import { useState } from "react";
import ViewContainer from "../components/ViewContainer";
import Content from "../components/Content";
import Titles from "../components/Titles";
import themes from "../steps/themes";
import "../styles/Step.css";

const Step = (props: { md: string }) => {
  const [md, setMd] = useState(props.md);
  const [currentContentPage, setCurrentContentPage] = useState(9);

  let currentThemeContent = themes.find((theme) => {
    return theme.name === md;
  });

  return (
    <ViewContainer>
      <div className="step-container-main">
        
        <div className="step-content-container">
          <Content
            currentContent={currentThemeContent!.contents[currentContentPage]}
          />
        </div>

        <div className="step-titles-container">
          <Titles 
          currentMdContent={currentThemeContent!.contents} 
          currentContent={currentThemeContent!.contents[currentContentPage].title}
          />
        </div>

      </div>
    </ViewContainer>
  );
};

export default Step;
