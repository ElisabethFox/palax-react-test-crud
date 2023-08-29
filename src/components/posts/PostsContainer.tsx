import { currentUser, postsSelector } from '../../selectors';
import Post from './Post';
import { useAppSelector } from '../../hooks';

const PostsContainer = () => {
  const posts = useAppSelector(postsSelector.selectAll) ?? null;
  const currentUserData = useAppSelector(currentUser);
  const currentUserPosts = posts.filter(
    (post) => post.userId === currentUserData?.id
  );

  return (
    <div className="posts__container">
      <ul className="posts__list">
        {currentUserPosts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
};

export default PostsContainer;
