import { useSelector } from "react-redux";
import DeletePostModalWindow from "./DeletePostModalWindow";
import './styles.css'
import ChangePostModalWindow from "./ChangePostModalWindow";

const ModalWindow = () => {
    const currentModalWindowType = useSelector((state) => state.modal.type)

    if (currentModalWindowType === 'delete') {
        return <DeletePostModalWindow />;
      }

      if (currentModalWindowType === 'change') {
        return <ChangePostModalWindow />;
      }
}
 
export default ModalWindow;