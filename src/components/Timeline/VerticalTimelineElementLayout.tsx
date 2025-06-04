import { useEffect, useState } from 'react';
import { Badge, Button } from 'react-bootstrap';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './TimeLineElement.css'

import { useTranslation } from 'react-i18next';

interface VerticalTimelineElementLayoutProps {
    title: string;
    date: string;
    icon: React.ReactNode;
    subtitle: string;
    content: string;
    detail?: React.ReactNode;
    badges? : string[];
}

function VerticalTimelineElementLayout({ title, date, icon, subtitle, content, detail, badges }: VerticalTimelineElementLayoutProps) {
    
    const { t } = useTranslation('core_components');

    const [show, setShow] = useState(false);
    const [buttonText, setButtonText] = useState(t("buttons.timeline_details.show"));

    useEffect(() => {
        setButtonText(t("buttons.timeline_details.show"))
    }, [t]);

    const handleShow = () => {
        if (show) {
            setShow(false)
            setButtonText(t("buttons.timeline_details.show"))
        }
        else {
            setShow(true)
            setButtonText(t("buttons.timeline_details.hide"))
        }
    }
    
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', borderTop: '3px solid #4464AD'}}
            date={date}
            iconStyle={{ background: '#4464AD', color: '#fff' }}
            icon={icon}
            contentArrowStyle={{ borderRight: '7px solid  #4464AD', color: '#fff' }}
        >
            <div className="d-flex flex-wrap">
            {badges && badges.map((badge, index) => (
                                    <Badge key={index} bg='#4464AD' className='stack-badge m-1 ms-0'>{badge}</Badge>
                                ))}
            </div>
            <h3 className="mb-2">{title}</h3>
            <h4 className="mb-4 text-muted">{subtitle}</h4>
            <div>
            <p>
            {content}
            </p>
            {detail && <>
            {show ? (
                detail
            ) : null}
            <Button className='view-detail-button' onClick={handleShow}>{buttonText}</Button>
            </>}
            </div>
        


            
                    
        </VerticalTimelineElement>
    );
}

export default VerticalTimelineElementLayout;