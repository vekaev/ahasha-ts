import React, { useEffect, useRef, useState } from 'react';
import Layout from '../../containers/Layout/Layout';
import styles from './PostFeed.module.scss';
import { observer } from 'mobx-react';
import {
  BasketIcon,
  SearchIcon,
  IconStar,
  SendIcon,
  BanIcon,
  LikeIcon,
  OthersIcon,
} from '../../components/Icons/Icons';
import { Saved } from './../../components/Icons/Icons';
import { PostFeedStore } from './../../data/postFeed';
import { Link } from 'react-router-dom';
import HideModal from './HideModal/HideModal';
import SendModal from './SendModal/SendModal';

const Page: React.FC<any> = (props) => {
  // console.log('render');
  const [elem, setElem] = useState<any>(null);
  const [elemOption, setElemOption] = useState<any>(null);
  const closeModal = useRef<any>(null);
  const closeModalGlobal = useRef<any>(null);

  const { posts } = PostFeedStore;

  const [activePost, setActivePost] = useState<number | null>(null);
  const [isOpenPostActions, setIsOpenPostActions] = useState<boolean>(false);
  const [hoverActions, setHoverAction] = useState<string | null>(null);

  const header = {
    left: <SearchIcon />,
    middle: <h1 className={styles['header-title']}>AHASHA</h1>,
    right: <BasketIcon />,
  };

  useEffect(() => {
    document.addEventListener('click', closeOutOfContent, false);

    return () => {
      document.removeEventListener('click', closeOutOfContent, false);
    };
  });

  const closeOutOfContent = (event: any) => {
    let path = event.path || (event.composedPath && event.composedPath());

    if (
      path[0] === closeModalGlobal.current ||
      !path.includes(closeModalGlobal.current)
    ) {
      setIsOpenPostActions(false);
    } else {
      console.log('false');
    }
  };

  let timer: any;

  const postOpenActionsDown = (event: any) => {
    timer = setTimeout(() => setIsOpenPostActions(true), 300);
  };

  const postOpenActionsUp = (event: any, postID: number) => {
    if (isOpenPostActions) {
      setActivePost(postID);
    } else {
      clearTimeout(timer);
      console.log('link to');
    }
  };

  const savePost = (postID: number) => {
    console.log(`save post: ${postID}`);
  };

  const hidePost = (postID: number) => {
    console.log(`hide post: ${postID}`);
  };

  const sendPost = (postID: number) => {
    console.log(`send post: ${postID}`);
  };

  const onHoverActions = (event: any) => {
    let action = event.target?.dataset.name;
    console.log(event.target);
    // setHoverAction(action);
  };

  const test = (event: any, postID: number) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.target.closest('a') === elemOption) {
      setIsOpenPostActions((prev) => !prev);
    } else {
      setIsOpenPostActions(true);
      setActivePost(postID);
      setElemOption(event.target.closest('a'));
    }
    // activePost !== postID ? setActivePost(postID) : setActivePost(null);
    // setIsOpenPostActions((prev) => !prev);
    // setActivePost(postID);
    // setElemOption(event.target.closest('a'));
  };

  const test1 = (event: any, postID: number) => {
    // console.log('photo enter');
    // let test;
    // if (closeModal.current) {
    //   test = Array.from(closeModal.current?.children);
    // }
    // if (!test?.includes(event.relatedTarget)) {
    //   // setActivePost(postID);
    //   setElem(event.target.closest('a'));
    // }
  };

  const test2 = (event: any, postID: number) => {
    // let test;
    // if (closeModal.current) {
    //   test = Array.from(closeModal.current?.children);
    // }
    // if (!test?.includes(event.relatedTarget)) {
    //   // setActivePost(null);
    //   setElem(null);
    // }
  };

  return (
    <Layout header={header}>
      <div
        className={`${styles['post-feed-container']}`}
        ref={closeModalGlobal}
      >
        {/* <OptionsPanel
          elem={elem}
          closeModal={closeModal}
          open={isOpenPostActions}
          openOpen={setIsOpenPostActions}
          setopen={setElemOption}
        /> */}
        {posts.map((post) => {
          return (
            <div className={styles['post-feed-item']} key={post.postID}>
              <div className={styles['post-feed-item-header']}>
                <div className={styles['post-feed-item-header-user']}>
                  <div className={styles['post-feed-item-header-user-photo']}>
                    <img src={post.userPhoto} alt='user' />
                  </div>
                  <span className={styles['post-feed-item-header-user-name']}>
                    {post.firstName} {post.lastName}
                  </span>
                </div>
                <div className={styles['post-feed-item-header-likes']}>
                  <IconStar />
                  <span>{post.likes}</span>
                </div>
              </div>
              <Link
                to={`/post:${post.postID}`}
                className={`${styles['post-feed-item-picture']} ${
                  isOpenPostActions && activePost === post.postID
                    ? styles['active']
                    : ''
                }`}
                onMouseEnter={(e) => test1(e, post.postID)}
                onMouseLeave={(e) => test2(e, post.postID)}
                // onPointerDown={postOpenActionsDown}
                // onPointerUp={(e) => postOpenActionsUp(e, post.postID)}
                // onClick={(e) => e.preventDefault()}
                // style={activePost === post.postID ? { zIndex: 3 } : {}}
              >
                <img src={post.postPhoto} alt='post' />

                <div className={`${styles['post-feed-item-picture-options']}`}>
                  <div
                    className={styles['post-feed-item-picture-options-like']}
                    // onClick={test}
                  >
                    <LikeIcon />
                  </div>

                  <div
                    className={styles['post-feed-item-picture-options-dots']}
                    onClick={(e) => test(e, post.postID)}
                  >
                    <OthersIcon />
                  </div>
                </div>

                {/* {activePost === post.postID && (
                  <div
                    className={styles['post-feed-item-picture-actions-desktop']}
                  >
                    <div
                      className={
                        styles['post-feed-item-picture-actions-desktop-action']
                      }
                    >
                      <Saved />
                      <span>Save</span>
                    </div>

                    <div
                      className={
                        styles['post-feed-item-picture-actions-desktop-action']
                      }
                    >
                      <BanIcon />
                      <span>Сomplain</span>
                    </div>

                    <div
                      className={
                        styles['post-feed-item-picture-actions-desktop-action']
                      }
                    >
                      <SendIcon />
                      <span>Share</span>
                    </div>
                  </div>
                )} */}

                {/* {activePost === post.postID && (
                  <div
                    className={`${styles['post-feed-actions']}`}
                    // onMouseMove={onHoverActions}
                  >
                    <div
                      data-name='Save'
                      className={`${styles['post-feed-actions-item']}  ${
                        styles['right']
                      } ${hoverActions === 'Save' ? styles['active'] : null}`}
                      onClick={() => savePost(post.postID)}
                    >
                      <Saved />
                    </div>
                    <div
                      data-name='Hide'
                      className={`${styles['post-feed-actions-item']} ${
                        styles['right']
                      } ${hoverActions === 'Hide' ? styles['active'] : null}`}
                      onClick={() => hidePost(post.postID)}
                    >
                      <BanIcon />
                    </div>
                    <div
                      data-name='Send'
                      className={`${styles['post-feed-actions-item']} ${
                        styles['right']
                      } ${hoverActions === 'Send' ? styles['active'] : null}`}
                      onClick={() => sendPost(post.postID)}
                    >
                      <SendIcon />
                    </div>
                    <span className={styles['right']}>{hoverActions}</span>
                  </div>
                )} */}
              </Link>
            </div>
          );
        })}
        {/* {isOpenPostActions && (
          <div className={styles['post-feed-actions-modal']} ref={popUp}></div>
        )} */}
      </div>
      {/* <HideModal /> */}
      {/* <SendModal /> */}
    </Layout>
  );
};

export const PostFeed = observer(Page);
