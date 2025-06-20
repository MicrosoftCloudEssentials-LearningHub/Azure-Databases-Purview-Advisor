# Azure Databases Purview Tool - Unofficial

Costa Rica

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[brown9804](https://github.com/brown9804)

Last updated: 2025-06-20

----------

> [!IMPORTANT]
> The information and code in this repository are provided for demonstration purposes only. For official guidance, support, or more detailed information, please refer to Microsoft's official documentation or contact Microsoft directly: [Microsoft Sales and Support](https://support.microsoft.com/contactus?ContactUsExperienceEntryPointAssetId=S.HP.SMC-HOME)

## Project Structure

```
tool/
├── backend/
│   └── app.py
└── web-app/
    ├── index.html
    ├── script.js
    └── styles.css
```

## Usage

> This repository contains both a static web app and a backend API.

- The static web app is deployed via GitHub Pages.
- The backend (Flask API) is not deployed by default and must be deployed separately if you want to use it.

> [!NOTE]
> **If you want your frontend to use the backend API, you need to:**
> - Deploy the backend somewhere accessible (e.g., Azure App Service, Azure Functions, etc.).
> - Update `script.js` in your web app to call the backend API instead of duplicating the logic.

<div align="center">
  <h3 style="color: #4CAF50;">Total Visitors</h3>
  <img src="https://profile-counter.glitch.me/brown9804/count.svg" alt="Visitor Count" style="border: 2px solid #4CAF50; border-radius: 5px; padding: 5px;"/>
</div>
