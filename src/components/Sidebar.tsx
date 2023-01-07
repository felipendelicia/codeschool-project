import { ISidebarProps } from "../types/PropTypes";
import "../styles/Sidebar.css";

export default function Sidebar(props: ISidebarProps) {
  return (
    <div className="sidebar-component-container">
      {props.contents.map((content, i) => {
        if (content.id === props.currentSubtopicPage) {
          return (
            <p
              key={i}
              id="current-subtopic"
              className="sidebar-subtopic"
              onClick={() => props.changeSubtopicPage(content.id)}
            >
              {content.title}
            </p>
          );
        } else {
          return (
            <p
              key={i}
              onClick={() => props.changeSubtopicPage(content.id)}
              className="sidebar-subtopic"
            >
              {content.title}
            </p>
          );
        }
      })}
    </div>
  );
}
