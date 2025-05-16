# Portfolio Personnel

Un portfolio moderne et responsive pour présenter vos projets et compétences en tant que développeur.

## Fonctionnalités

- Design moderne et responsive
- Support multilingue (Français/Anglais)
- Intégration GitHub pour les projets
- Navigation fluide
- Mise en page adaptative pour mobile et desktop
- Système de configuration simple pour ajouter/modifier les projets

## Structure du Projet

```
.
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── i18n.js
│   │   └── main.js
│   └── images/
│       └── projects/
├── config/
│   └── links.json
├── CV/
│   ├── cv_en.pdf
│   └── cv_fr.pdf
├── index.html
└── README.md
```

## Comment Ajouter un Nouveau Projet

1. Ajoutez une image du projet dans `assets/images/projects/`
2. Modifiez le fichier `config/links.json` en ajoutant un nouvel objet dans le tableau `projects` :

```json
{
  "id": "nom-du-projet",
  "title": {
    "en": "Project Title in English",
    "fr": "Titre du Projet en Français"
  },
  "description": {
    "en": "Project description in English",
    "fr": "Description du projet en français"
  },
  "github": "https://github.com/username/project",
  "thumbnail": "assets/images/projects/nom-du-projet.jpg"
}
```

## Comment Mettre à Jour les CV

1. Remplacez les fichiers dans le dossier `CV/` :
   - `cv_en.pdf` pour la version anglaise
   - `cv_fr.pdf` pour la version française

## Personnalisation

### Couleurs

Les couleurs principales peuvent être modifiées dans le fichier `assets/css/style.css` en ajustant les variables CSS dans la section `:root` :

```css
:root {
    --primary-color: #2d3436;
    --secondary-color: #0984e3;
    --text-color: #2d3436;
    --background-color: #ffffff;
    --accent-color: #00b894;
}
```

### Traductions

Les traductions sont gérées dans le fichier `assets/js/i18n.js`. Pour ajouter de nouvelles traductions ou modifier les existantes, modifiez l'objet `translations`.

## Déploiement

Le site peut être déployé sur GitHub Pages ou tout autre service d'hébergement statique.

Pour GitHub Pages :
1. Activez GitHub Pages dans les paramètres du repository
2. Sélectionnez la branche principale comme source
3. Le site sera accessible à l'adresse `https://username.github.io/repository-name`

## Technologies Utilisées

- HTML5
- CSS3 (avec variables CSS et Flexbox/Grid)
- JavaScript (ES6+)
- Font Awesome pour les icônes

## Maintenance

Pour maintenir le site à jour :

1. Mettez régulièrement à jour les projets dans `config/links.json`
2. Gardez les CV à jour dans le dossier `CV/`
3. Ajoutez de nouvelles images de projets dans `assets/images/projects/`
4. Mettez à jour les traductions si nécessaire dans `assets/js/i18n.js` 