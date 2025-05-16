const translations = {
    en: {
        nav: {
            about: "About",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            title: "Evan Trvs",
            subtitle: "Computer Science Student & Developer"
        },
        about: {
            title: "About Me",
            description: "Computer science student passionate about development and technology.",
            cv: {
                en: "Download CV (EN)",
                fr: "Download CV (FR)"
            }
        },
        projects: {
            title: "Projects",
            viewProject: "View Project",
            viewCode: "View Code"
        },
        contact: {
            title: "Contact",
            description: "Feel free to reach out to me through the following channels:",
            email: "Email",
            linkedin: "LinkedIn"
        }
    },
    fr: {
        nav: {
            about: "À propos",
            projects: "Projets",
            contact: "Contact"
        },
        hero: {
            title: "Evan Trvs",
            subtitle: "Étudiant en Informatique & Développeur"
        },
        about: {
            title: "À propos de moi",
            description: "Étudiant en informatique passionné par le développement et la technologie.",
            cv: {
                en: "Télécharger CV (EN)",
                fr: "Télécharger CV (FR)"
            }
        },
        projects: {
            title: "Projets",
            viewProject: "Voir le projet",
            viewCode: "Voir le code"
        },
        contact: {
            title: "Contact",
            description: "N'hésitez pas à me contacter via les canaux suivants :",
            email: "Email",
            linkedin: "LinkedIn"
        }
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let value = translations[lang];
        for (const key of keys) {
            value = value[key];
        }
        if (value) {
            element.textContent = value;
        }
    });

    // Update project cards if they exist
    updateProjectCards();
}

function updateProjectCards() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    const projectCards = projectsGrid.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const title = card.querySelector('h3');
        const description = card.querySelector('p');
        const projectId = card.getAttribute('data-project-id');
        
        if (title && description && projectId) {
            const project = translations[currentLang].projects[projectId];
            if (project) {
                title.textContent = project.title;
                description.textContent = project.description;
            }
        }
    });
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    
    // Add language toggle functionality
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'fr' : 'en';
            setLanguage(newLang);
            langToggle.textContent = newLang === 'en' ? 'FR' : 'EN';
        });
    }
}); 