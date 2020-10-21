import React, { useEffect, useRef, useState } from 'react';
import { PostFeedStore } from '../../data/postFeed';
import styles from './PostFeed.module.scss';
import observer from '../../App';
import PostFeed from './PostFeed';
import ActionsDesktopModal from './ActionsModal/ActionsModal';
import HideModal from './HideModal/HideModal';
import SendModal from './SendModal/SendModal';
import ActionsModal from './ActionsModal/ActionsModal';
import Layout from '../../containers/Layout/Layout';
import { BasketIcon, SearchIcon } from '../../components/Icons/Icons';
import HideModalMessage from './HideModalMessage/HideModalMessage';

const PostFeedContainer: React.FC<any> = (props: any) => {
  const { innerWidth: displayWidth, innerHeight: displayHeight } = window;
  const { posts } = PostFeedStore;
  const closeModal = useRef<any>(null);

  const [openModalActions, setOpenModalActions] = useState<boolean>(false);
  const [hoverModalActionsMobile, setHoverModalActionsMobile] = useState<
    string
  >('');
  const [activePost, setActivePost] = useState<number | null>(null);
  const [insertionElement, setInsertionElement] = useState<any>(null);
  const [openHideModal, setOpenHideModal] = useState<boolean>(false);
  const [openHideModalMessage, setOpenHideModalMessage] = useState<boolean>(
    false
  );
  const [openShareModal, setOpenShareModal] = useState<boolean>(false);
  const [modalPosition, setModalPosition] = useState<string>('');

  useEffect(() => {
    document.addEventListener('click', closeOutOfContent, false);

    return () => {
      document.removeEventListener('click', closeOutOfContent, false);
    };
  });

  const closeOutOfContent = (event: any) => {
    let path = event.path || (event.composedPath && event.composedPath());

    if (path[0] === closeModal.current || !path.includes(closeModal.current)) {
      setOpenModalActions(false);
    } else {
      // console.log('false');
    }
  };

  const setPostLike = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('like');
  };

  const placeOpenActions = (target: HTMLDivElement): string => {
    const header = 60;
    const footer = 54;
    const modalElem = displayWidth > 950 ? 160 : 60;

    const coords = target.getBoundingClientRect();

    if (
      coords.top - modalElem - header > 0 &&
      coords.right + modalElem < displayWidth
    )
      return 'topRight';

    if (
      coords.right + modalElem < displayWidth &&
      coords.bottom + modalElem + footer < displayHeight
    )
      return 'bottomRight';
    if (
      coords.left - modalElem > 0 &&
      coords.bottom + modalElem + footer < displayHeight
    )
      return 'bottomLeft';
    if (coords.top - modalElem - header > 0 && coords.left - modalElem > 0)
      return 'topLeft';

    return '';
  };

  const openActions = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    postID: number
  ): void => {
    event.preventDefault();
    event.stopPropagation();
    setOpenHideModalMessage(false);

    const target = event.target as HTMLDivElement;
    const position = placeOpenActions(target);
    console.log(position);
    setModalPosition(position);

    if (target.closest('a') === insertionElement) {
      setOpenModalActions((prev) => !prev);
    } else {
      setOpenModalActions(true);
      setActivePost(postID);
      setInsertionElement(target.closest('a'));
    }
  };

  const savePost = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('save post: ' + activePost);
    setHoverModalActionsMobile('');
    setOpenModalActions(false);
  };

  const hidePost = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    setHoverModalActionsMobile('');
    setOpenModalActions(false);
    setOpenHideModal(true);
  };

  const sharePost = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    setHoverModalActionsMobile('');
    setOpenModalActions(false);
    setOpenShareModal(true);
  };

  const sendReport = (event: any) => {
    event.preventDefault();
    console.log('send report');
    setHoverModalActionsMobile('');
    setOpenHideModal(false);
    setOpenHideModalMessage(true);
  };

  const header = {
    left: <SearchIcon />,
    middle: <h1 className={styles['header-title']}>AHASHA</h1>,
    right: <BasketIcon />,
  };

  return (
    <Layout header={header}>
      <ActionsModal
        targetElement={insertionElement}
        isOpen={openModalActions}
        closeModal={setOpenModalActions}
        savePost={savePost}
        hidePost={hidePost}
        sharePost={sharePost}
        positionOnElement={modalPosition}
        activeHover={hoverModalActionsMobile}
        setActiveHover={setHoverModalActionsMobile}
      />

      <HideModal
        isOpen={openHideModal}
        closeModal={setOpenHideModal}
        sendReport={sendReport}
      />
      <HideModalMessage
        targetElement={insertionElement}
        isOpen={openHideModalMessage}
        cancel={setOpenHideModalMessage}
      />
      <SendModal isOpen={openShareModal} closeModal={setOpenShareModal} />

      <div className={styles['post-feed-container']} ref={closeModal}>
        {posts.map((post, index) => {
          return (
            <PostFeed
              key={post.postID}
              userPhoto={post.userPhoto}
              firstName={post.firstName}
              lastName={post.lastName}
              postID={post.postID}
              postPhoto={post.postPhoto}
              likes={post.likes}
              setLike={setPostLike}
              openModalActions={openModalActions}
              openActions={openActions}
              activePost={activePost}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default PostFeedContainer;
