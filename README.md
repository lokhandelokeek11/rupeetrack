# RupeeTrack

![RupeeTrack](https://via.placeholder.com/800x400.png?text=RupeeTrack+-+Quiet+Security+Expense+Tracker)

RupeeTrack is a production-grade, open-source, offline-first personal finance application built with a focus on privacy, minimalism, and a premium "Quiet Security" aesthetic.

## Philosophy

- **Open Source:** Community-driven and fully transparent.
- **Privacy-First:** No logins, no tracking, no ads. All data stays on your device.
- **Offline-First:** Seamless functionality without an internet connection.
- **Quiet Security:** A calming, monochromatic design optimized for OLED screens, moving away from stressful traditional financial aesthetics.

## Features

- **Offline Database:** Fully persistent local data using IndexedDB.
- **Cross-Platform:** Installable as a Progressive Web App (PWA) and buildable as a native Android APK via Capacitor.
- **Responsive Design:** Mobile-first architecture, elegantly scaling to tablets and desktops.
- **Insights & Budgets:** Categorize expenses, manage budgets, and view powerful offline analytics.

## Tech Stack

- **Core:** React 19+, TypeScript, Vite
- **Styling:** Tailwind CSS, Framer Motion, shadcn/ui inspired
- **State Management:** Zustand
- **Database:** Dexie.js (IndexedDB)
- **Mobile/PWA:** Vite PWA Plugin, Capacitor

## Getting Started

### Prerequisites

- Node.js >= 20.x
- npm >= 10.x

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/RupeeTrack.git
   cd RupeeTrack
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Building the APK

RupeeTrack uses Capacitor to build a native Android application.

1. Build the web assets:
   ```bash
   npm run build
   ```

2. Sync Capacitor:
   ```bash
   npx cap sync android
   ```

3. Open in Android Studio or build via CLI.

## Contribution

We welcome contributions! Please review our [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
