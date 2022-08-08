import { useState } from "react";
import ViewContainer from "../components/ViewContainer";
import Content from "../components/Content";
import Titles from "../components/Titles";
import ChangeMd from "../components/ChangeMd";
import Modal from "../components/Modal";
import SeeModal from "../components/SeeModal";
import themes from "../steps/themes";
import "../styles/Step.css";

const Step = (props: { md: string }) => {
  const [currentContentPage, setCurrentContentPage] = useState(0);
  const [toggleModal, setToggleModal] = useState(false);

  let currentThemeContent = themes.find((theme) => {
    return theme.name === props.md;
  });

  const changeContent = (id: number) => {
    setCurrentContentPage(id);
    setToggleModal(false);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const closeModal = () => setToggleModal(false);
  const openModal = () => setToggleModal(true);

  return (
    <ViewContainer>
      <div>

        <SeeModal openModal={openModal} />
        <div className="step-container-main">
          <div className="step-content-container">

            <Content
              currentContent={currentThemeContent!.contents[currentContentPage]}
              nextContent={
                currentThemeContent!.contents[currentContentPage].id + 1 ===
                currentThemeContent!.contents.length
                  ? undefined
                  : currentThemeContent!.contents[currentContentPage + 1].title
              }
              previousContent={
                currentThemeContent!.contents[currentContentPage].id === 0
                  ? undefined
                  : currentThemeContent!.contents[currentContentPage - 1].title
              }
              currentContentPage={currentContentPage}
              changeContent={(id: number) => changeContent(id)}
            />

          </div>

          <div className="step-titles-container">

            <Titles
              currentMdContent={currentThemeContent!.contents}
              currentContent={
                currentThemeContent!.contents[currentContentPage].title
              }
              changeContent={(id: number) => changeContent(id)}
            />

            <ChangeMd currentTheme={currentThemeContent!.name} />

          </div>

          {toggleModal ? (
            <Modal
              closeModal={() => closeModal}
              currentThemeContent={currentThemeContent!}
              currentContentPage={currentContentPage}
              changeContent={(id: number) => changeContent(id)}
            />
          ) : (
            <></>
          )}

        </div>
        
      </div>
    </ViewContainer>
  );
};

export default Step;
