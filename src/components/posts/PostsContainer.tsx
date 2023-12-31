import { useEffect, useRef } from 'react';
import usePrevious from '../../hooks/usePrevious';
import Post from './Post';
import { postsSelector } from '../../selectors';
import { useAppSelector } from '../../hooks';

const PostsContainer = () => {
  const posts = useAppSelector(postsSelector.selectAll);
  const currentUsersIdsData = useAppSelector(
    (state) => state.users.currentUsersIds
  );
  const currentUsersPosts = posts.filter(({ userId }) =>
    currentUsersIdsData.includes(userId)
  );
  const refPosts = useRef<HTMLInputElement>(null);
  const previousPostsLength = usePrevious(posts.length);

  // Скролл до нового поста при добавлении поста
  useEffect(() => {
    if (previousPostsLength && posts.length > previousPostsLength) {
      refPosts.current?.lastElementChild?.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
      });
    }
  }, [posts.length, previousPostsLength]);

  return (
    <div className="posts__container" ref={refPosts}>
      <ul className="posts__list">
        {currentUsersPosts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
};

export default PostsContainer;
