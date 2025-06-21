import { Container } from "react-bootstrap";
import Title from "./Title";
import LogosComponent from "../Logos/LogosComponent";
import { BsChevronDown  } from "react-icons/bs";

function TitleComponent(){
    return (
        <Container fluid style={{ height: "93vh", marginTop: "7vh" }}>
        {/* Les 2/3 premiers tiers pour la carte */}
        <div
          style={{
              height: "60%", // 2/3 de la hauteur
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            >
          <Title />
        </div>
        <div
          style={{
            height: "20%", // 2/3 de la hauteur
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
          <LogosComponent />
          </div>
        {/* Le dernier tiers pour le texte */}
        <div
          style={{
              height: "20%", // 1/3 de la hauteur
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            >
          <div className='infinite-arrow'>
            <a href="#project">

          <BsChevronDown  size={50} style={{color:"#FFA926"}} />
          <BsChevronDown  size={50} style={{color:"#FFA926"}} />
          <BsChevronDown  size={50} style={{color:"#FFA926"}} />
            </a>
          </div>
        </div>
      </Container>
    );
}

export default TitleComponent;