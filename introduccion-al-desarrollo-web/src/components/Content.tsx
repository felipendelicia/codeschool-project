const Content = (props: {
  currentContent: { title: string; content: string };
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.currentContent.content }}
      className="content-component-container"
    ></div>
  );
};

export default Content;
