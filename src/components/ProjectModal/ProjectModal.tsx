import { Modal, Button } from 'react-bootstrap';
import GitHubButton from '../Button/GitHubButton';
import { useTranslation } from 'react-i18next';

interface ProjectModalProps {
    show: boolean;
    onHide: () => void;
    project: {
        title: string;
        subtitle?: string;
        date?: string;
        description: string;
        link?: string;
        badges: string[];
    };
}

function ProjectModal({ show, onHide, project }: ProjectModalProps) {
    const { t } = useTranslation('projects');

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>
                    {project.title}
                    {project.subtitle && <span className="text-muted"> - {project.subtitle}</span>}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {project.date && (
                    <div className="mb-3">
                        <small className="text-muted">{project.date}</small>
                    </div>
                )}
                <div className="mb-3">
                    {project.badges.map((badge, index) => (
                        <span key={index} className="badge bg-primary me-2 mb-2">{badge}</span>
                    ))}
                </div>
                <p>{project.description}</p>
            </Modal.Body>
            <Modal.Footer>
                {project.link && <GitHubButton link={project.link} />}
                <Button variant="secondary" onClick={onHide}>
                    {t('close')}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProjectModal; 