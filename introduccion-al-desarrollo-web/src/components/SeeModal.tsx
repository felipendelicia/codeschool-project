import "../styles/SeeModal.css"

const SeeModal = (props:{openModal:()=>void}) => {
  return (
    <div className="step-see-modal" onClick={props.openModal}>
        <img alt="menu" src="./assets/img/openModal.png"/>
    </div>
  )
}

export default SeeModal