import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import VerticalTimelineElementLayout from './VerticalTimelineElementLayout';
import { Container, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Timeline() {

  const { t } = useTranslation('timeline');

  return (
    <VerticalTimeline>
      {/* Maîtrise en informatique*/}
      <VerticalTimelineElementLayout 
        title={t("udes.title")}
        date={t("udes.date")}
        icon={<FaGraduationCap />} 
        subtitle={t("udes.subtitle")}
        content={t("udes.content")}
        detail={
          <>
            <Container className="py-3">
              <Image 
                src="/assets/udes.jpg" 
                alt="Université de Sherbrooke" 
                style={{ width: '100%', marginBottom: '15px' }} 
              />
            </Container>
            <h6>{t("udes.details.fall.title")}</h6>
            <ul> 
              <li>{t("udes.details.fall.list.1")}</li>
              <li>{t("udes.details.fall.list.2")}</li>
              <li>{t("udes.details.fall.list.3")}</li>
              <li>{t("udes.details.fall.list.4")}</li>
            </ul>
            <h6>{t("udes.details.winter.title")}</h6>
            <ul>
              <li>{t("udes.details.winter.list.1")}</li>
              <li>{t("udes.details.winter.list.2")}</li>
              <li>{t("udes.details.winter.list.3")}</li>
              <li>{t("udes.details.winter.list.4")}</li>
            </ul>
          </>
        }
            />

      {/* System migration & automation - Intern */}
      <VerticalTimelineElementLayout 
        badges={["VB.net", "SQL", "Script", "Conception système"]}
        title={t("dupliprint.title")}
        date={t("dupliprint.date")} 
        icon={<MdWork />} 
        subtitle={t("dupliprint.subtitle")} 
        content={t("dupliprint.content")} 
        detail={
          <>
            <Container className="py-3">
              <Image 
          src="/assets/dpm.png" 
          alt="Dupliprint" 
          style={{ width: '100%', marginBottom: '15px' }} 
              />
            </Container>
            <h6>{t("dupliprint.details.tasks.title")}</h6>
            <ul>
              <li>{t("dupliprint.details.tasks.list.1")}</li>
              <li>{t("dupliprint.details.tasks.list.2")}</li>
              <li>{t("dupliprint.details.tasks.list.3")}</li>
              <li>{t("dupliprint.details.tasks.list.4")}</li>
            </ul>
            <h6>{t("dupliprint.details.skills.title")}</h6>
            <ul>
              <li>{t("dupliprint.details.skills.list.1")}</li>
              <li>{t("dupliprint.details.skills.list.2")}</li>
              <li>{t("dupliprint.details.skills.list.3")}</li>
              <li>{t("dupliprint.details.skills.list.4")}</li>
            </ul>
          </>
        }
            />

            {/* Ingénieur en informatique */}
            <VerticalTimelineElementLayout 
        title={t("polytech.title")} 
        date={t("polytech.date")} 
        icon={<FaGraduationCap />} 
        subtitle={t("polytech.subtitle")} 
        content={t("polytech.content")} 
        detail={
          <>
            <Container className="py-3">
              <Image 
          src="/assets/polytechtours.jpg" 
          alt="Polytech Tours" 
          style={{ width: '100%', marginBottom: '15px' }} 
              />
            </Container>
            <h6>{t("polytech.details.courses.title")}</h6>
            <ul>
              <li>{t("polytech.details.courses.list.1")}</li>
              <li>{t("polytech.details.courses.list.2")}</li>
              <li>{t("polytech.details.courses.list.3")}</li>
              <li>{t("polytech.details.courses.list.4")}</li>
              <li>{t("polytech.details.courses.list.5")}</li>
              <li>{t("polytech.details.courses.list.6")}</li>
              <li>{t("polytech.details.courses.list.7")}</li>
              <li>{t("polytech.details.courses.list.8")}</li>
            </ul>
          </>
        }
            />

            {/* TOEIC Certification */}
            <VerticalTimelineElementLayout 
        title={t("toeic.title")} 
        date={t("toeic.date")} 
        icon={<PiCertificateFill />} 
        subtitle={t("toeic.subtitle")} 
        content={t("toeic.content")} 
        detail={
          <>
            <Container className='py-3'>
          <Image src="/assets/toeic.jpg" 
              alt="TOEIC" 
              style={{ width: '100%', marginBottom: '15px' }} /> 
            </Container>
            <h6>{t("toeic.details.description.title")}</h6>
            <p style={{ fontWeight: "300" }}>
              {t("toeic.details.description.content")}
            </p>
            <h6>{t("toeic.details.score.title")}</h6>
            <ul>
              <li>{t("toeic.details.score.list.1")}</li>
              <li>{t("toeic.details.score.list.2")}</li>
            </ul>
          </>
        }
            />

            {/* Classe préparatoire */}
      <VerticalTimelineElementLayout
        title={t("peip.title")}
        date={t("peip.date")}
        icon={<FaGraduationCap />}
        subtitle={t("peip.subtitle")}
        content={t("peip.content")}
      />
    </VerticalTimeline>
  );
}

export default Timeline;
