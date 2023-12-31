import { ISubjectPageProps } from "../types/PropTypes";
import contents from "../data/subjects-content";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/SubjectPage.css";
import { useEffect, useState } from "react";
import goUp from "../handle/goUp";

export default function SubjectPage(props: ISubjectPageProps) {
  const [currentSubtopicPageIndex, setCurrentSubtopicPageIndex] = useState(0);

  useEffect(goUp, [currentSubtopicPageIndex])

  const subjectContent = contents.find((element) => element.name === props.subject)!;
  const changeSubtopicPageIndex = (page: number) => setCurrentSubtopicPageIndex(page);

  return (
    <div className="learn-container-main">
      <Navbar />
      <div className="learn-contents-container">
        <Sidebar
          subtopics={subjectContent.subtopics}
          currentSubtopicPageIndex={currentSubtopicPageIndex}
          changeSubtopicPageIndex={changeSubtopicPageIndex}
        />
        <Content
          subtopics={subjectContent.subtopics}
          currentSubtopicPageIndex={currentSubtopicPageIndex}
          changeSubtopicPageIndex={changeSubtopicPageIndex}
        />
      </div>
    </div>
  );
}
