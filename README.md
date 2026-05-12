<div align="center">

# ⬛ RupeeTrack

**A CALM, PRIVATE, AND LIBERATED APPROACH TO PERSONAL FINANCE.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Status: Development](https://img.shields.io/badge/Status-Under%20Development-orange.svg)]()
[![Privacy: Zero Telemetry](https://img.shields.io/badge/Privacy-Zero%20Telemetry-success.svg)]()
[![Platform: PWA & Android](https://img.shields.io/badge/Platform-PWA%20%7C%20Android-black.svg)]()

</div>

<img width="1024" height="559" alt="image" src="https://github.com/user-attachments/assets/888ad51b-6caa-4782-aa7f-785026925a68" />


**RupeeTrack** is a production-grade, open-source, offline-first personal finance application. It abandons the stressful, vibrant aesthetics of traditional finance apps in favor of a premium **"Quiet Security"** philosophy—minimalist, monochromatic, and deeply comforting. Built for users who value extreme privacy, absolute data ownership, and modern, buttery-smooth interfaces.

> ⚠️ **NOTICE: UNDER DEVELOPMENT STAGE**
> RupeeTrack is currently in active development. The core architecture is scaffolded, but feature implementation is ongoing. Expect breaking changes and rapid iterations.

---

## ✨ Features

- **🔒 Privacy-First Architecture** — No logins, no tracking, no telemetry, no ads. Your API keys, bank data, and spending habits never leave your device.
- **📴 Offline-First Engine** — Built entirely on top of Dexie.js (IndexedDB). Instant, seamless functionality without an internet connection.
- **🎨 "Quiet Security" Aesthetic** — A soothing, matte monochromatic design optimized for OLED screens. No blaring red or green financial indicators; just calm, clear data.
- **📱 Cross-Platform Native** — Installable instantly as a Progressive Web App (PWA) via browser, or buildable as a native Android APK via Capacitor.
- **📊 Comprehensive Insights** — Categorize expenses, define rigid or flexible budgets, and view powerful offline analytics via Recharts.
- **⚡ Modern, Blazing Fast Stack** — Powered by React 19+, TypeScript, Vite, Tailwind CSS v4, and Zustand.
- **📱 Responsive by Default** — Mobile-first architecture that scales elegantly to tablets, foldables, and ultra-wide desktops.

---

## 🚀 Quick Start

Since RupeeTrack is completely local, you can build and run it anywhere without spinning up backend servers or databases.

### Prerequisites
- Node.js >= 20.x
- npm >= 10.x
- Android Studio (Optional, for APK generation)

### Web Development Setup

Clone the repository and run the Vite development server:

```bash
# Clone the repository
git clone https://github.com/lokhandelokeek11/rupeetrack.git
cd RupeeTrack

# Install all dependencies
npm install

# Start the blazing fast Vite dev server
npm run dev
```

### 📱 Android APK Build (Capacitor)

RupeeTrack uses Capacitor to compile the web layer into a performant native Android application.

```bash
# 1. Build the production web assets
npm run build

# 2. Sync the assets with the Android native project
npx cap sync android

# 3. Open in Android Studio to build the APK
npx cap open android
```
*Alternatively, you can build the APK via CLI if your local Android SDK is configured properly: `cd android && ./gradlew assembleDebug`*

---

## 🏗️ Architecture & Stack

RupeeTrack is built using a modern, scalable frontend architecture designed for future feature expansion without technical debt.

- **Framework:** React 19+ with strict TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4, Framer Motion, and shadcn/ui-inspired accessible components
- **State Management:** Zustand (for transient UI state)
- **Local Database:** Dexie.js (wrapper for IndexedDB)
- **Routing:** React Router DOM
- **Forms & Validation:** React Hook Form + Zod
- **Mobile Translation:** Vite PWA Plugin & Capacitor core

---

## 🤝 Contributing

We welcome hackers, designers, and open-source enthusiasts to help build RupeeTrack! 

Since the project is in active development, please check out the issues tab or open a discussion before tackling major architectural changes.
- Read our [Contributing Guide](CONTRIBUTING.md) to understand our workflow.
- Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## ⚖️ License

This project is fully open-source and liberated under the **MIT License**. See the [LICENSE](LICENSE) file for complete details.

*Your Money. Your Device. Your Peace of Mind.*
