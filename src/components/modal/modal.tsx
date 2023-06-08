import { closeCross } from "../../data/data";
import "./modal.scss";

interface ModalProps {
  onClick: () => void;
  src: string;
}

const Modal = ({ onClick, src }: ModalProps) => {
  return (
    <div className="modal" onClick={onClick}>
      <div className="modal-header">
        <div className="modal-title">title</div>
        <div className="modal-cross">{closeCross}</div>
      </div>
      <div className="modal-body">
        <img className="modal-body-img" src={src} alt="" />
      </div>
    </div>
  );
};

export default Modal;
