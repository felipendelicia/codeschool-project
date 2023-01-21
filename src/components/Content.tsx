import { IChangeSubtopic, IContentProps } from "../types/PropTypes";
import "../styles/Content.css";
import "../styles/Content-Normalize.css";

const NextSubtopic = (props: IChangeSubtopic) => {
  if (props.currentSubtopicPage >= props.contents.length - 1) {
    return <></>;
  } else {
    const nextSubtopic = props.contents[props.currentSubtopicPage + 1];
    return (
      <p
        onClick={() => props.changeSubtopicPage(props.currentSubtopicPage + 1)}
        className='handlechange-subtopic'
      >
        {nextSubtopic.title + " 👉"}
      </p>
    );
  }
};

const PrevSubtopic = (props: IChangeSubtopic) => {
  if (props.currentSubtopicPage <= 0) {
    return <></>;
  } else {
    const prevSubtopic = props.contents[props.currentSubtopicPage - 1];
    return (
      <p
        onClick={() => props.changeSubtopicPage(props.currentSubtopicPage - 1)}
        className='handlechange-subtopic'
      >
        {"👈 " + prevSubtopic.title}
      </p>
    );
  }
};

export default function Content(props: IContentProps) {
  return (
    <div className="content-component-container">
      <div
        className="article-content-container"
        dangerouslySetInnerHTML={{ __html: props.subtopic.content }}
      ></div>
      <div className="subtopic-change">
        <PrevSubtopic
          contents={props.contents}
          changeSubtopicPage={props.changeSubtopicPage}
          currentSubtopicPage={props.currentSubtopicPage}
        />
        <NextSubtopic
          contents={props.contents}
          changeSubtopicPage={props.changeSubtopicPage}
          currentSubtopicPage={props.currentSubtopicPage}
        />
      </div>
    </div>
  );
}
