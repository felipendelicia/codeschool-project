import "../styles/Paragraph.css"

const Paragraph = (props:{children:string}) => {
  return (
    <p className="paragraph-component-container">{props.children}</p>
  )
}

export default Paragraph