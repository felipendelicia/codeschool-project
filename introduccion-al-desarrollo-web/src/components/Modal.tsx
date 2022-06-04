import { motion } from "framer-motion";
import Titles from "./Titles";
import ChangeMd from "./ChangeMd";
import "../styles/ModalBackdrop.css";
import "../styles/Modal.css";

const Modal = (props: {
  closeModal: () => void;
  currentThemeContent: {
    name: string;
    contents: { id: number; title: string; content: string }[];
  };
  currentContentPage: number;
  changeContent:(id:number)=>void
}) => {
  return (
    <motion.div
      className="backdrop-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={props.closeModal}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal-container"
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{
          y: "0",
          opacity: 1,
          transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
          },
        }}
        exit={{ y: "100vh", opacity: 0 }}
      >
        <div>
          <Titles
            currentMdContent={props.currentThemeContent!.contents}
            currentContent={
              props.currentThemeContent!.contents[props.currentContentPage]
                .title
            }
            changeContent={(id: number) => props.changeContent(id)}
          />
          <ChangeMd currentTheme={props.currentThemeContent!.name}/>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
