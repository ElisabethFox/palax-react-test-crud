import { useEffect, useRef } from 'react';
import Post from './Post';
import { currentUsers, postsSelector } from '../../selectors';
import { useAppSelector } from '../../hooks';

const PostsContainer = () => {
  const posts = useAppSelector(postsSelector.selectAll);
  const currentUsersIdsData = useAppSelector((state) => state.users.currentUsersIds);
  const currentUsersPosts = posts.filter(
    ({ userId }) => currentUsersIdsData.includes(userId)
  );
  const refPosts = useRef<HTMLInputElement>(null);

  // Скролл при открытии до самого свежего поста + скролл до нового поста при добавлении поста
  // useEffect(() => {
  //   refPosts.current?.lastElementChild?.scrollIntoView({
  //     block: 'start',
  //     behavior: 'smooth',
  //   });
  // }, [posts, currentUsersData]);

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
