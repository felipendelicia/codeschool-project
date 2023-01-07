import { IContentProps } from "../types/PropTypes";
import '../styles/Content.css'
import '../styles/Content-Normalize.css'

export default function Content(props: IContentProps) {
  return (
    <div className="content-component-container">
      <div
        className="article-content-container"
        dangerouslySetInnerHTML={{ __html: props.subtopic.content }}
      ></div>
      <div className="subtopic-change"></div>
    </div>
  );
}
