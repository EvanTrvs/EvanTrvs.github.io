// Language management
let currentLang = 'en';
const langToggle = document.querySelector('.lang-toggle');
const langOptions = document.querySelector('.lang-options');

// Toggle language options
langToggle.addEventListener('click', () => {
    langOptions.classList.toggle('show');
});

// Change language
document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', () => {
        currentLang = option.dataset.lang;
        langToggle.textContent = currentLang.toUpperCase();
        langOptions.classList.remove('show');
        updateContent();
    });
});

// Load and display projects
async function loadProjects() {
    try {
        const response = await fetch('/config/links.json');
        const data = await response.json();
        const projectsContainer = document.querySelector('.projects-grid');
        
        data.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            projectCard.innerHTML = `
                <div class="project-thumbnail">
                    <img src="${project.thumbnail}" alt="${project.title[currentLang]}">
                </div>
                <div class="project-info">
                    <h3>${project.title[currentLang]}</h3>
                    <p>${project.description[currentLang]}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" class="github-link">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                </div>
            `;
            
            projectsContainer.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

// Load and display timeline
async function loadTimeline() {
    try {
        const response = await fetch('/config/links.json');
        const data = await response.json();
        const educationContainer = document.querySelector('.education-items');
        const experienceContainer = document.querySelector('.experience-items');
        
        // Load education
        data.timeline.education.forEach(item => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            
            timelineItem.innerHTML = `
                <div class="timeline-content">
                    <h3>${item.title[currentLang]}</h3>
                    <h4>${item.school}</h4>
                    <p class="period">${item.period}</p>
                    <p>${item.description[currentLang]}</p>
                </div>
            `;
            
            educationContainer.appendChild(timelineItem);
        });
        
        // Load experience
        data.timeline.experience.forEach(item => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            
            timelineItem.innerHTML = `
                <div class="timeline-content">
                    <h3>${item.title[currentLang]}</h3>
                    <h4>${item.company}</h4>
                    <p class="period">${item.period}</p>
                    <p>${item.description[currentLang]}</p>
                </div>
            `;
            
            experienceContainer.appendChild(timelineItem);
        });
    } catch (error) {
        console.error('Error loading timeline:', error);
    }
}

// Update about section
async function updateAbout() {
    try {
        const response = await fetch('/config/links.json');
        const data = await response.json();
        const aboutSection = document.querySelector('.about-content');
        
        aboutSection.innerHTML = `
            <div class="about-info">
                <p><i class="fas fa-map-marker-alt"></i> ${data.about.location}</p>
                <p><i class="fas fa-birthday-cake"></i> ${data.about.age} years</p>
                <p><i class="fas fa-envelope"></i> ${data.about.email}</p>
            </div>
            <p class="about-description">${data.about.description[currentLang]}</p>
            <div class="social-links">
                <a href="${data.social.github}" target="_blank"><i class="fab fa-github"></i></a>
                <a href="${data.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
            </div>
        `;
    } catch (error) {
        console.error('Error updating about section:', error);
    }
}

// Update all content based on current language
function updateContent() {
    // Clear existing content
    document.querySelector('.projects-grid').innerHTML = '';
    document.querySelector('.education-items').innerHTML = '';
    document.querySelector('.experience-items').innerHTML = '';
    
    // Reload content with new language
    loadProjects();
    loadTimeline();
    updateAbout();
}

// CV Preview Modal
const cvButton = document.querySelector('.cv-button');
const cvModal = document.querySelector('.cv-modal');
const closeModal = document.querySelector('.close-modal');

cvButton.addEventListener('click', () => {
    cvModal.classList.add('show');
});

closeModal.addEventListener('click', () => {
    cvModal.classList.remove('show');
});

// Close modal when clicking outside
cvModal.addEventListener('click', (e) => {
    if (e.target === cvModal) {
        cvModal.classList.remove('show');
    }
});

// Initialize content
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadTimeline();
    updateAbout();
});

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