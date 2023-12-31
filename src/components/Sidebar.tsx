import { ISidebarProps } from "../types/PropTypes";
import "../styles/Sidebar.css";

export default function Sidebar(props: ISidebarProps) {
  return(
    <div className="sidebar-component-container">
      {
        props.subtopics.map((subtopic, i)=>{
          return (
            <p
              key={i}
              id={subtopic.id === props.currentSubtopicPageIndex ? "current-subtopic" : ""}
              className="sidebar-subtopic"
              onClick={() => props.changeSubtopicPageIndex(subtopic.id)}
            >
              {subtopic.title}
            </p>
          );
        })
      }
    </div>
  )
}