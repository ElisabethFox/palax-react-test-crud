import { currentUser, postsSelector } from '../../selectors';
import Post from './Post';
import { useAppSelector } from '../../hooks';
import { useEffect, useRef } from 'react';

const PostsContainer = () => {
  const posts = useAppSelector(postsSelector.selectAll);
  const currentUserData = useAppSelector(currentUser);
  const currentUserPosts = posts.filter(
    (post) => post.userId === currentUserData?.id
  );

  const refPosts = useRef<HTMLInputElement>(null);

  useEffect(() => {
    refPosts.current?.lastElementChild?.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
    });
  }, [posts]);

  return (
    <div className="posts__container" ref={refPosts}>
      <ul className="posts__list">
        {currentUserPosts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
};

export default PostsContainer;
