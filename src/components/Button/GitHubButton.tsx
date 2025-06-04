import { Button } from "react-bootstrap";

import githubDarkLogo from "./../../assets/github_dark.png";
import { useTranslation } from "react-i18next";


function GitHubButton ({link}: {link: string}) {

    const { t } = useTranslation('core_components');

    return (
        <Button href={link} variant='dark' target="_blank"> 
            <img
                src={githubDarkLogo}
                alt="GitHub Logo"
                style={{ width: '20px', marginRight: '10px', alignContent: 'center' }}
            />
            {t('buttons.github')}
        </Button>
    )
}

export default GitHubButton;