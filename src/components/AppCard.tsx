import PostsContainer from './posts/PostsContainer';
import UsersContainer from './users/UsersContainer';
import AppCardHeader from './AppCardHeader';
import { currentUser } from '../selectors';
import { FC } from 'react';
import { useAppSelector } from '../hooks';

const AppCard: FC = () => {
  const currentUserData = useAppSelector(currentUser);

  return (
    <div className="app-card">
      <div className="card__headers">
        <div className="users__header">
          <h5>USERNAMES</h5>
        </div>
        <div className="posts__header">
          <AppCardHeader user={currentUserData} />
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
