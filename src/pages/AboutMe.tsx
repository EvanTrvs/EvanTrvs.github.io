import { Container, Row, Col, Image, Button } from "react-bootstrap";
import githubDarkLogo from '../assets/github_dark.png';
import linkedinLogo from '../assets/linkedin_logo.png';
import { useTranslation } from "react-i18next";
import './AboutMe.css';

function AboutMe() {
  const { t } = useTranslation('about_me');

  const calculateAge = () => {
    const birthDate = new Date('2002-07-01');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  return (
    <Container className="py-5">
        <Row>
            <Col xs={12} md={3}>
                {/* <Image src='/portfolio/assets/pp.png' roundedCircle fluid /> */}
                <Col className="text-center mt-4">
                    <Row>
                        <h3>{t("aboutMe.name")}</h3>
                    </Row>
                    <Row>
                        <p>{t("aboutMe.age", { age: calculateAge() })}</p>
                    </Row>
                    <Row>
                        <p>{t("aboutMe.student")}</p>
                    </Row>
                    <Row>
                        <p>{t("aboutMe.location")}</p>
                    </Row>
                </Col>
            </Col>
            <Col xs={12} md={9}>
                <Row>
                    <Container className="my-2 text-center">
                        <h3>{t("aboutMe.resources")}</h3>
                        <Button href="https://github.com/evantrvs" variant='dark' target="_blank" className="m-2">
                            <img
                                src={githubDarkLogo}
                                alt="GitHub Logo"
                                style={{ width: '20px', marginRight: '10px', alignContent: 'center' }}
                            />
                            {t("aboutMe.github")}
                        </Button>
                        <Button href="https://www.linkedin.com/in/evantrvs" variant='dark' target="_blank" className="m-2 linkedin-button">
                            <img
                                src={linkedinLogo}
                                alt="Linkedin Logo"
                                style={{ width: '20px', marginRight: '10px', alignContent: 'center' }}
                            />
                            {t("aboutMe.linkedin")}
                        </Button>
                        <a href={t('aboutMe.resume_link')} download target="_blank">
                            <Button variant='warning' className="m-2">
                                {t("aboutMe.resume")}
                            </Button>
                        </a>
                    </Container>
                </Row>
                <Row>
                    <Container className="py-2 text-center">
                        <h3>{t("aboutMe.languages")}</h3>
                        <Row className="my-2">
                            <Col>
                                <p><b>{t("aboutMe.french")}</b></p>
                            </Col>
                            <Col>
                                <p><b>{t("aboutMe.english")}</b></p>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Container className="py-2 text-center">
                        <h3>{t("aboutMe.skills")}</h3>
                        {/* Langages de programmation C */}
                        <Image src='https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white' fluid className="m-2" />
                        
                        {/* Python et ses frameworks */}
                        <Image src='https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white' fluid className="m-2" />
                        
                        {/* Web Development */}
                        <Image src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white' fluid className="m-2" />
                        
                        {/* DevOps & Tools */}
                        <Image src='https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white' fluid className="m-2" />
                        
                        {/* Autres langages et outils */}
                        <Image src='https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/julia-%23A270BA.svg?style=for-the-badge&logo=julia&logoColor=white' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/cursor-%23000000.svg?style=for-the-badge&logo=cursor&logoColor=white' fluid className="m-2" />
                    </Container>
                </Row>
            </Col>
        </Row>
    </Container>
  );
}

export default AboutMe;
