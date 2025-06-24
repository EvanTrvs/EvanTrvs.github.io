import { Badge, Card, Col, Row } from 'react-bootstrap';
import './project.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ProjectModal from '../components/ProjectModal/ProjectModal';

// Import all project thumbnails
const projectThumbnails: { [key: string]: string } = {
    '3D_Split&Merge': new URL('../assets/thumbnails/3D_Split&Merge.png', import.meta.url).href,
    'RL_Frogger': new URL('../assets/thumbnails/rl_frogger.png', import.meta.url).href,
    'GestionStock': new URL('../assets/thumbnails/gestion_stock.png', import.meta.url).href,
	'ML_comparison': new URL('../assets/thumbnails/ML_comparison.jpg', import.meta.url).href,
	'HexGame-Platform': new URL('../assets/thumbnails/HexGame-Platform.png', import.meta.url).href
};

interface Project {
    id: string;
    title: string;
    subtitle?: string;
    date?: string;
    description: string;
    link?: string;
    thumbnail?: string;
    badges: string[];
}

// Array of pleasant colors for project placeholders
const placeholderColors = [
    '#084be6', // Blue
    '#2ecc71', // Green
    '#e74c3c', // Red
    '#f1c40f', // Yellow
    '#9b59b6', // Purple
    '#1abc9c', // Turquoise
    '#e67e22', // Orange
    '#34495e', // Dark Blue
];

function Project() {
    const { t } = useTranslation('projects');
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    // Get all project keys from the translation file
    const projectKeys = ['RL_Frogger', '3D_Split&Merge', 'Portfolio', 'ML_comparison', 'HexGame-Platform', 'GestionStock', 'QT_UserManager'];

    // Create projects array from translation data
    const Projects: Project[] = projectKeys.map(key => ({
        id: key,
        title: t(`${key}.title`),
        subtitle: t(`${key}.subtitle`, { defaultValue: '' }),
        date: t(`${key}.date`, { defaultValue: '' }),
        description: t(`${key}.description`),
        link: t(`${key}.link`, { defaultValue: '' }),
        thumbnail: projectThumbnails[key],
        badges: Array.isArray(t(`${key}.badges`, { returnObjects: true })) 
            ? (t(`${key}.badges`, { returnObjects: true }) as string[]) 
            : []
    }));
    
    return (
        <>
            <Row className="g-4">
                {Projects.map((project, index) => (
                    <Col key={project.id} xs={12} sm={6} md={4}>
                        <Card className="h-100 project-card" onClick={() => setSelectedProject(project.id)}>
                            {project.thumbnail ? (
                                <Card.Img 
                                    variant="top" 
                                    src={project.thumbnail} 
                                    alt={project.title}
                                    className="project-thumbnail"
                                />
                            ) : (
                                <div 
                                    className="project-thumbnail-placeholder"
                                    style={{ backgroundColor: placeholderColors[index % placeholderColors.length] }}
                                />
                            )}
                            <Card.Body className="d-flex flex-column">
                                <div className="d-flex flex-wrap gap-1 mb-2">
                                    {project.badges.map((badge, index) => (
                                        <Badge key={index} bg='#FFA926' className='stack-badge'>{badge}</Badge>
                                    ))}
                                </div>
                                <Card.Title>{project.title}  {project.subtitle && <>- {project.subtitle}</>}</Card.Title>
                                {project.date && <Card.Subtitle className="mb-2 text-muted">{project.date}</Card.Subtitle>}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {selectedProject && (
                <ProjectModal
                    show={selectedProject !== null}
                    onHide={() => setSelectedProject(null)}
                    project={Projects.find(p => p.id === selectedProject)!}
                />
            )}
        </>
    );
}

export default Project;
