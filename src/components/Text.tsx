import '../styles/Text.css'

export const MainTitle = (props:{children:string}) => {
  return (
    <h1 className="maintitle-component-container">{props.children}</h1>
  )
}

export const Paragraph = (props:{children:string}) => {
    return (
      <p className="paragraph-component-container">{props.children}</p>
    )
  }
