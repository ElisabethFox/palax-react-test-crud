import { useSelector } from "react-redux";
import DeletePostModalWindow from "./DeletePostModalWindow";
import './styles.css'

const ModalWindow = () => {
    const currentModalWindowType = useSelector((state) => state.modal.type)

    if (currentModalWindowType === 'delete') {
        return <DeletePostModalWindow />;
      }
}
 
export default ModalWindow;