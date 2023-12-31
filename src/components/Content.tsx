import { IChangeSubtopic, IContentProps } from "../types/PropTypes";
import "../styles/Content.css";
import "../styles/Content-Normalize.css";
import ChangeAroundSubtopics from "./ChangeAroundSubtopics";

export default function Content(props: IContentProps) {
  return (
    <div className="content-component-container">
      <div
        className="article-content-container"
        dangerouslySetInnerHTML={{ __html: props.subtopics[props.currentSubtopicPageIndex].content }}
      ></div>
      <ChangeAroundSubtopics
      {...props}
      />
    </div>
  );
}
