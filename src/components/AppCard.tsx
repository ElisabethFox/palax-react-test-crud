import PostsContainer from './posts/PostsContainer';
import UsersContainer from './users/UsersContainer';
import AppCardHeader from './AppCardHeader';

const AppCard = () => {
  return (
    <div className="app-card">
      <div className="card__headers">
        <div className="users__header">
          <h5>Usernames</h5>
        </div>
        <div className="posts__header">
          <AppCardHeader />
        </div>
      </div>
      <div className="card-containers">
        <UsersContainer />
        <PostsContainer />
      </div>
    </div>
  );
};

export default AppCard;
