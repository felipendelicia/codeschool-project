import "../styles/Content.css";
import "../styles/ContentControls.css";

const Content = (props: {
  currentContent: { title: string; content: string };
  nextContent: string | undefined;
  previousContent: string | undefined;
  currentContentPage: number;
  changeContent: (id: number) => void;
}) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: props.currentContent.content }}
        className="content-component-container"
      ></div>
      <div className="content-component-controls">
        {props.previousContent === undefined ? (
          <></>
        ) : (
          <span
            onClick={() => props.changeContent(props.currentContentPage - 1)}
          >
            {"👈 " + props.previousContent}
          </span>
        )}
        {props.nextContent === undefined ? (
          <></>
        ) : (
          <span
            onClick={() => props.changeContent(props.currentContentPage + 1)}
          >
            {props.nextContent + " 👉"}
          </span>
        )}
      </div>
    </>
  );
};

export default Content;
