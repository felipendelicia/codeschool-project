import "../styles/Titles.css";

const Titles = (props: {
  currentMdContent: { id: number; title: string; content: string }[];
  currentContent: string;
  changeContent: (id:number)=>void;
}) => {
  return (
    <div className="title-component-container">
      {props.currentMdContent.map((content, i) => {
        return (
          <p
            key={i}
            id={props.currentContent===content.title?"content-title-active":""}
            onClick={()=>props.changeContent(content.id)}
          >
            {content.title}
          </p>
        );
      })}
    </div>
  );
};

export default Titles;
