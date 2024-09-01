import Icon from "../icon";
import "./styles.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="background">
      <div className="modal">
        <button onClick={onClose} className="close-button">
          <Icon name="Close" />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
