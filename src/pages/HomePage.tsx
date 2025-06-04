import './../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Project from './Project';
import TitleComponent from '../components/Title/TitleComponent';
import Timeline from '../components/Timeline/Timeline';
import { useTranslation } from 'react-i18next';
import AboutMe from './AboutMe';


function HomePage() {

  const { t } = useTranslation('core_components');

  return (
    <>
      <TitleComponent />

      <Container id="project" style={{paddingTop:'10vh'}}>
        <h1 className='section-title'>{t('section.projects.title')}</h1>
        <Project />
      </Container>

      <Container id='timeline' style={{paddingTop:'10vh'}}>
        <h1 className='section-title'>{t('section.timeline.title')}</h1>
        <Timeline />
      </Container>
      
      <Container id='about_me' style={{paddingTop:'10vh'}}>
        <h1 className='section-title'>{t('section.about_me.title')}</h1>
        <AboutMe />
      </Container>
    </>
  );
  
  
}

export default HomePage;
