import "../styles/BigTitle.css"

const BigTitle = (props:{children:string}) => {
  return (
    <h1 className="bigtitle-component-container">{props.children}</h1>
  )
}

export default BigTitle