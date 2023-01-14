import { ILearnProps } from "../types/PropTypes";
import contents from "../data/contents";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Learn.css";
import { useEffect, useState } from "react";
import goUp from "../handle/goUp";

export default function Learn(props: ILearnProps) {
  const [currentSubtopicPage, setCurrentSubtopicPage] = useState(0);

  useEffect(goUp, [currentSubtopicPage])

  const subject = contents.find((element) => element.name === props.subject)!;
  const changeSubtopicPage = (page: number) => setCurrentSubtopicPage(page);

  return (
    <div className="learn-container-main">
      <Navbar />
      <div className="learn-contents-container">
        <Sidebar
          contents={subject.contents}
          currentSubtopicPage={currentSubtopicPage}
          changeSubtopicPage={changeSubtopicPage}
        />
        <Content
          contents={subject.contents}
          subtopic={subject.contents[currentSubtopicPage]}
          currentSubtopicPage={currentSubtopicPage}
          changeSubtopicPage={changeSubtopicPage}
        />
      </div>
    </div>
  );
}
