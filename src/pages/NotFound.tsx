import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <Container className="text-center mt-5">
            <Row>
                <Col>
                    <h1>404 - Page Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                    <Button variant="primary" onClick={handleGoBack}>
                        Go Back Home
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;