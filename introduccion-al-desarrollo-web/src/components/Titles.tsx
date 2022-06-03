const Titles = (props:{currentMdContent:{ title: string; content: string; }[]}) => {
  return (
    <div className="title-component-container">
      {
        props.currentMdContent.map((content, i)=>{
          return(
            <p key={i}>{"- "+ content.title}</p>
          )
        })
      }
    </div>
  )
}

export default Titles