
# Elevate

# 🎓 Diploma Exam Platform

A full-featured online examination system built with [Next.js](https://nextjs.org), designed to manage diplomas, enroll learners, and conduct timed exams — all from a clean, role-based interface.

---

## 📌 Overview

The Diploma Exam Platform provides two core experiences:

- **Users** can browse diplomas, enroll, view their profile, and take timed exams.
- **Admins** can create and manage diplomas, build exams, define correct answers, and control all content.

---

## ✨ Features

### 👤 User Dashboard
| Feature | Description |
|---|---|
| **User Profile** | View and manage personal account information |
| **All Diplomas** | Browse the full list of available diplomas |
| **Diploma Description** | Read detailed info about a diploma before enrolling |
| **Diploma Exam** | Take the exam within the time window set by the diploma creator |
| **Enrollment** | Enroll in a diploma to unlock access to its exam |
| **Timed Submission** | Submit answers before the countdown expires |

### 🛠️ Admin Dashboard
| Feature | Description |
|---|---|
| **Create Diploma** | Add a new diploma with title, description, and duration |
| **Edit Diploma** | Update diploma details and exam settings |
| **Delete Diploma** | Remove diplomas and their associated exams |
| **Manage Exams** | Create and edit questions for each diploma |
| **Define Answers** | Set the correct answers for each exam question |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18.x`
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone https://github.com/NesreenAbotaleb/exam-app-elevate.git
cd exam-app-elevate
npm install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 🗂️ Project Structure

```
EXAM-APP/
├── public/                          # Static assets (icons, images)
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── (auth)/                  # Auth route group
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   ├── reset-password/
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/             # Protected dashboard route group
│   │   │   ├── (diplomas)/          # Diplomas listing page
│   │   │   ├── account/             # User profile & account settings
│   │   │   ├── exams/               # Exam taking & submission
│   │   │   └── api/                 # Dashboard API routes
│   │   ├── globals.css
│   │   ├── favicon.ico
│   │   └── layout.tsx               # Root layout
│   │
│   ├── features/                    # Feature-based modules
│   │   ├── auth/                    # Auth feature
│   │   │   ├── api/                 # Auth API calls
│   │   │   ├── components/          # Auth UI components
│   │   │   ├── constants/           # Auth constants
│   │   │   ├── hooks/               # Auth custom hooks
│   │   │   ├── schemes/             # Zod / validation schemas
│   │   │   └── types/               # Auth TypeScript types
│   │   └── diploma/                 # Diploma feature module
│   │
│   └── shared/                      # Shared across features
│       ├── components/ui/           # Reusable UI components
│       ├── constants/               # Global constants
│       ├── context/                 # React context providers
│       ├── hooks/                   # Shared custom hooks
│       ├── lib/                     # Utilities & helpers
│       └── types/                   # Global TypeScript types
│
├── auth.ts                          # Auth configuration
├── next.config.ts                   # Next.js configuration
├── components.json                  # shadcn/ui config
├── tailwind.config.ts               # Tailwind configuration
├── tsconfig.json                    # TypeScript configuration
├── postcss.config.mjs
├── eslint.config.mjs
├── .env                             # Environment variables
└── README.md
```

---

## 🧱 Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 
- **Auth**: *(e.g., NextAuth.js / custom)*
- **Database**: *(e.g., Swagger)*

---

## 🔐 Roles & Access

| Role | Access |
|---|---|
| **User** | View diplomas, enroll, take & submit exams |
| **Admin** | Full CRUD over diplomas, exams, and answers |

---

