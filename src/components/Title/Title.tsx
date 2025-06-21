import { Card, Container } from 'react-bootstrap';
import './title.css'
import { useTranslation } from 'react-i18next';


function Title () {

    const { t } = useTranslation('core_components');

    return (
        <>
        <Container>
        <Container style={{width: "fit-content", textAlign: "right"}}>
            <h1 style={{fontFamily: "Aldrich"}}>&gt; {t("title.line1")} _</h1>
            <div className='typewriter' style={{ display: 'flex', alignItems: 'center' }}>
                <h1 style={{ margin: 0, padding: 0 }}>
                    {t("title.line2")}&nbsp;
                    <span style={{
                        color: "#FFA926", 
                        fontFamily: "Aldrich",
                        display: 'inline-block',
                        transform: 'scale(01)',
                        transformOrigin: 'left center',
                        padding: '0.2em 0',
                        margin: '0 -0em'
                    }}>Evan Tortevois</span>
                </h1>
            </div>
        </Container>
        <Container style={{width: "fit-content", textAlign: "left"}}>
            <Card style={{marginTop: "5vh"}}>
                <Card.Body>
                    <Card.Title>{t("subtitle")}</Card.Title>
                    <Card.Text>
                        {t("description")}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
        </Container>
        </>
    );
}

export default Title;