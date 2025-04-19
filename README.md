# 💼 WealthHealth

WealthHealth est une application interne de gestion des employés d'une entreprise. Elle permet aux utilisateurs de créer, consulter et enregistrer des profils d'employés via une interface simple et intuitive.

## 🚀 Fonctionnalités

- Ajout de nouveaux employés via un formulaire
- Stockage des employés avec Redux
- Modale de confirmation à la création d’un employé
- Composants réutilisables


---

## 🛠️ Stack technique

- ⚛️ React
- 📦 Redux Toolkit
- 🧪 Jest (ou autre lib de tests si utilisé)
- 🎨 SCSS
- 🗃️ LocalStorage (ou autre type de persistance si applicable)

---


## 🧩 Structure du projet

```bash
WealthHealth/
├── src/
│   ├── components/
│   │   ├── EmployeeForm/
│   │   │   ├── EmployeeForm.jsx
│   │   │   └── EmployeeForm.scss
│   │   └── Model/        # Composant de modale
│   │       ├── Model.jsx
│   │       └── Model.scss
│   ├── redux/
│   │   └── slices/
│   │       └── employeeSlice.js
│   └── App.jsx
├── public/
├── README.md
└── package.json
--
```
## Installation & Lancement:
git clone https://github.com/soumiaTehami/WealthHealth.git

# hrnet_model

`hrnet_model` est un package JavaScript destiné à fournir un modèle réutilisable pour la gestion des employés dans l'application WealthHealth.

## 📦 Installation

```bash
npm install hrnet_model
npm publish --access public

```
## Structure du package

```bash
hrnet_model/
├── dist/
│   └── index.js       # Fichier exporté
├── src/
│   └── model.js       # Logique du modèle
└── package.json
--
```