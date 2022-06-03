import "../styles/Titles.css";

const Titles = (props: {
  currentMdContent: { title: string; content: string }[];
  currentContent: string;
}) => {
  return (
    <div className="title-component-container">
      {props.currentMdContent.map((content, i) => {
        if (content.title === props.currentContent) {
          return (
            <p key={i} id="content-title-active">
              {content.title}
            </p>
          );
        } else {
          return <p key={i}>{content.title}</p>;
        }
      })}
    </div>
  );
};

export default Titles;
