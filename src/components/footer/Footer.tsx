import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {

    const { t } = useTranslation('core_components');

    return (
        <footer className="footer">
            <Container className="text-center py-4" fluid>
                <Row className="mb-3">
                    <p className="footer-text">{t('footer.last_update')}</p>
                </Row>
                <Row className="mb-3">
                    <p className="footer-text">
                        {t('footer.code')}{' '}
                        <a
                            href="https://github.com/evantrvs/portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                             GitHub
                        </a>
                    </p>
                </Row>
                <Row>
                    <p className="footer-text">© 2025 Evan Tortevois</p>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
