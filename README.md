# VendorHub

## Introduction
VendorHub is a modern e-commerce frontend project that allows users to browse, search, and filter products, manage a shopping cart, mark favourites, and handle user authentication. It demonstrates a clean UI, robust state management, and integration with a public product API. The project is designed to provide a seamless shopping experience and showcase best practices in React development.

## Project Type
Frontend

## Deployed App
Frontend: https://cozy-clafoutis-0c90f2.netlify.app
Backend: N/A
Database: N/A

## Directory Structure
```
vendorHub/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ home/
│  │  ├─ layout/
│  │  ├─ products/
│  │  └─ ui/
│  ├─ context/
│  ├─ hooks/
│  ├─ pages/
│  ├─ App.tsx
│  └─ ...
├─ package.json
├─ tailwind.config.ts
├─ vite.config.ts
└─ ...
```

## Video Walkthrough of the project
_Attach a short video walkthrough of all features here (1-3 minutes)_

## Video Walkthrough of the codebase
_Attach a short video walkthrough of the codebase here (1-5 minutes)_

## Features
- User authentication (login, register, protected routes)
- Product listing with search, category, price, and rating filters
- Product details and clean, responsive product cards
- Shopping cart with persistent state and quantity management
- Favourites system with dedicated page and navbar icon
- Category browsing using live data from fakestoreapi
- Error handling and loading states
- Modern UI with Tailwind CSS and shadcn-ui

## Design decisions or assumptions
- Products and categories are fetched from https://fakestoreapi.com for demo purposes
- All state (cart, favourites, user) is persisted in localStorage for demo
- Protected routes ensure only authenticated users can access main features
- UI is mobile-friendly and accessible
- No backend or database is included; all data is fetched from public API

## Installation & Getting started
```bash
npm install
npm run dev
```

## Usage
- Register or login to access the dashboard
- Browse products, search, and filter by category, price, or rating
- Add products to cart or mark as favourite
- View and manage your cart and favourites
- Logout to end your session

## Credentials
- Demo user: `demo@vendorhub.com` / any password (or register your own)

## APIs Used
- [Fake Store API](https://fakestoreapi.com)

## API Endpoints
N/A (Frontend only, all data fetched from public API)

## Technology Stack
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn-ui
- React Router
- @tanstack/react-query
