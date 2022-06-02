import ViewContainer from '../components/ViewContainer'
import "../styles/Step.css"

const Step = () => {
  return (
    <ViewContainer>
        <div className="step-container-main">
            <div className="step-content-container">
                content
            </div>
            <div className="step-titles-container">
                titles
            </div>
        </div>
    </ViewContainer>
  )
}

export default Step