import React, { useState, useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import { Saved } from "../../../components/Icons/Icons";
import Like from "../../../components/Like/Like";
import UserPhoto from "../../../components/UserPhoto/UserPhoto";
import styles from "./Post.module.scss";
import { LangContext } from "./../../../components/LangContext/LangContext";

// interface IMyPostProps extends RouteComponentProps<{}, StaticContext, Location> {
//   // history: RouteComponentProps;
//   // location: Location;
// }

const MyPost: React.FC<any> = ({ history, user, post }) => {
  const [like, setLike] = useState({
    icon: post?.myLike,
    // counter: post?.likes,
  });

  const langContext = useContext(LangContext);
  let text = langContext?.useLocale()["user"]["post"];

  if (!post) {
    return (
      <div className="container">
        <p
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "150px",
          }}
        >
          {text["notFound"]}
        </p>
      </div>
    );
  }

  return (
    <div className={styles["post"]}>
      <div className="container">
        <div className={styles["post-user"]}>
          <div className={styles["post-user-photo"]}>
            <Link to={`/${user?.username}`}>
              <UserPhoto src={user?.mainPhoto} />
            </Link>
          </div>
          <div className={styles["post-user-info"]}>
            <div className={styles["post-user-info-full-name"]}>
              <Link to={`/${user?.username}`}>{user?.fullName}</Link>
            </div>
            <div className={styles["post-user-info-descripiton"]}>
              {user?.info}
            </div>
          </div>
        </div>
        <div className={styles["post-image"]}>
          <img src={post?.img} alt="ahasha models" />
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
