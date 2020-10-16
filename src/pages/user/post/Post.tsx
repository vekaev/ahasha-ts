import React, { useState, useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import { Saved } from "../../../components/Icons/Icons";
import Like from "../../../components/Like/Like";
import UserPhoto from "../../../components/UserPhoto/UserPhoto";
import styles from "./Post.module.scss";
import { abbr } from "../../../utils/abbr";

// interface IMyPostProps extends RouteComponentProps<{}, StaticContext, Location> {
//   // history: RouteComponentProps;
//   // location: Location;
// }

const MyPost: React.FC<any> = ({ profile, post }) => {
  const [like, setLike] = useState({
    icon: post?.myLike,
    // counter: post?.likes,
  });

  if (!post) {
    return null;
  }

  return (
    <div className={styles["post"]}>
      <div className="container">
        <div className={styles["post-user"]}>
          <div className={styles["post-user-photo"]}>
            <Link to={`/${profile?.username}`}>
              <UserPhoto abbr={abbr(profile.firstName, profile.lastName)} src={profile?.avatar} />
            </Link>
          </div>
          <div className={styles["post-user-info"]}>
            <div className={styles["post-user-info-full-name"]}>
              <Link to={`/${profile?.username}`}>{profile?.fullName}</Link>
            </div>
            <div className={styles["post-user-info-descripiton"]}>
              {profile?.info}
            </div>
          </div>
        </div>
        <div className={styles["post-image"]}>
          {console.log(post.resources[0].origin, "POST")}
          <img src={post.resources[0].origin} alt="ahasha models" />
        </div>
        <div className={styles["post-actions"]}>
          <div className={styles["post-actions-like"]}>
            <Like
              icon={like.icon}
              // counter={like.counter}
              setLike={setLike}
            />
          </div>
          <div className={styles["post-actions-saved"]}>
            <Saved />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MyPost);
