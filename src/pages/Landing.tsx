import {Link} from 'react-router-dom'
import '../styles/Landing.css'
import Button from '../components/Button';
import { MainTitle, Paragraph } from '../components/Text';

export default function Landing() {
  return (
    <div className="landing-container-main">
      <div className="landing-container">
        <MainTitle>Aprendé desarrollo web 👩‍💻</MainTitle>
        <Paragraph>
          Hola, soy Felipe! Este proyecto tiene como objetivo brindar una guía
          completa para aprender desarrollo web de manera autodidacta. El
          contenido incluirá pasos y recursos para que puedas desempeñarte
          eficientemente en el área. ¡Espero que disfrutes del proyecto y
          aprendas mucho con él!
        </Paragraph>
        <Link to="/intro">
          <Button> Arranquemos! </Button>
        </Link>
      </div>
    </div>
  );
}
