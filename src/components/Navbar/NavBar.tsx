import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";
import { useTranslation } from 'react-i18next';
import { Form } from 'react-bootstrap';

function NavBar() {
  const { i18n, t } = useTranslation('navbar');

  const onChangeLang = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLang = e.target.checked ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <Navbar expand="lg" className='portfolio-navbar ' fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='portfolio-navbar-link' href="/portfolio/#project">{t("projects")}</Nav.Link>
            <Nav.Link className='portfolio-navbar-link' href="/portfolio/#timeline">{t("timeline")}</Nav.Link>
            <Nav.Link className='portfolio-navbar-link' href="/portfolio/#about_me">{t("about me")}</Nav.Link>
          </Nav>
          {/* <Button 
            className="ms-auto portfolio-navbar-button" 
            href="/path/to/cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            
          > 
            Download Resume
          </Button> */}
          <Form.Check 
            type="switch"
            id="language-switch"
            className="language-switch"
            onChange={onChangeLang}
            checked={i18n.language === 'en'}
            label={i18n.language === 'en' ? 'EN' : 'FR'}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
