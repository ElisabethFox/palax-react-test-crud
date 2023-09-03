import { setCurrentModalType } from '../slices/modalWindowsSlice';
import { openModalWindow } from '../slices/modalWindowsSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { currentUsers } from '../selectors';
import { FaRegEdit } from 'react-icons/fa';

const AppCardHeader = () => {
    return (
      <div>
        <p>Change user to watch their posts</p>
      </div>
    );

};

export default AppCardHeader;
