import Button from "../components/Button";
import BigTitle from "../components/BigTitle";
import Paragraph from "../components/Paragraph";
import ViewContainer from "../components/ViewContainer";
import "../styles/Landing.css";

const Landing = () => {
  return (
    <ViewContainer>
      <div className="landing-container-main">
        <div className="landing-container">
          <BigTitle>Aprendé desarrollo web 👩‍💻</BigTitle>
          <Paragraph>
            Hola! soy Felipe y mi objetivo es crear una serie de posibles pasos a
            seguir para poder introducir a alguien al desarrollo web mediante una
            serie de contenidos que te permitan ser capaz de desempeñarse de forma
            autodidacta.
          </Paragraph>
          <Button> Arranquemos! </Button>
        </div>
      </div>
    </ViewContainer>
  );
};

export default Landing;
