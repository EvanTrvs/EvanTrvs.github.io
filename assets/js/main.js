// Load configuration
async function loadConfig() {
    try {
        const response = await fetch('/config/links.json');
        return await response.json();
    } catch (error) {
        console.error('Error loading configuration:', error);
        return null;
    }
}

// Create project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-project-id', project.id);

    const thumbnail = document.createElement('img');
    thumbnail.className = 'project-thumbnail';
    thumbnail.src = project.thumbnail;
    thumbnail.alt = project.title[currentLang];

    const info = document.createElement('div');
    info.className = 'project-info';

    const title = document.createElement('h3');
    title.textContent = project.title[currentLang];

    const description = document.createElement('p');
    description.textContent = project.description[currentLang];

    const links = document.createElement('div');
    links.className = 'project-links';

    const githubLink = document.createElement('a');
    githubLink.href = project.github;
    githubLink.target = '_blank';
    githubLink.className = 'btn';
    githubLink.textContent = translations[currentLang].projects.viewCode;

    links.appendChild(githubLink);
    info.appendChild(title);
    info.appendChild(description);
    info.appendChild(links);

    card.appendChild(thumbnail);
    card.appendChild(info);

    return card;
}

// Initialize projects
async function initializeProjects() {
    const config = await loadConfig();
    if (!config) return;

    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    // Clear existing projects
    projectsGrid.innerHTML = '';

    // Add projects
    config.projects.forEach(project => {
        const card = createProjectCard(project);
        projectsGrid.appendChild(card);
    });

    // Update social links
    const githubLink = document.getElementById('github-link');
    const linkedinLink = document.getElementById('linkedin-link');
    const contactLinkedin = document.getElementById('contact-linkedin');

    if (githubLink) githubLink.href = config.social.github;
    if (linkedinLink) linkedinLink.href = config.social.linkedin;
    if (contactLinkedin) contactLinkedin.href = config.social.linkedin;
}

// CV Preview functionality
function initializeCVPreview() {
    const preview = document.querySelector('.cv-preview');
    const iframe = document.getElementById('cv-iframe');
    const closeBtn = document.querySelector('.cv-preview-close');
    const previewBtns = document.querySelectorAll('.cv-preview-btn');

    function openPreview(cvPath) {
        iframe.src = `CV/${cvPath}`;
        preview.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePreview() {
        preview.classList.remove('active');
        iframe.src = '';
        document.body.style.overflow = '';
    }

    previewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const cvPath = btn.getAttribute('data-cv');
            openPreview(cvPath);
        });
    });

    closeBtn.addEventListener('click', closePreview);
    preview.addEventListener('click', (e) => {
        if (e.target === preview) {
            closePreview();
        }
    });

    // Close preview with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && preview.classList.contains('active')) {
            closePreview();
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeProjects();
    initializeCVPreview();
}); 