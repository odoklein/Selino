# Selino - Modern E-commerce Platform

## Overview

Selino is a modern e-commerce platform built with Next.js, React, and Redux. It features a clean, responsive design with Tailwind CSS and implements core e-commerce functionality including product browsing, cart management, and user authentication.


## Features

- 🛍️ **Product Catalog**: Browse categories and filter products
- 🔍 **Product Details**: View detailed product information with image galleries
- 🛒 **Shopping Cart**: Add, remove, and update quantities of items
- ❤️ **Wishlist**: Save products for later
- 🔐 **Authentication**: User registration and login functionality
- 📱 **Responsive Design**: Works on all devices from mobile to desktop
- 🌐 **SEO Optimized**: Built with Next.js for improved search engine visibility

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **UI & Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **CMS**: [Strapi](https://strapi.io/) (Headless CMS for product management)
- **Animations**: [Swiper](https://swiperjs.com/) for product image galleries

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/odoklein/Selino.git
   cd Selino
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
selino/
├── app/                      # Next.js app directory
│   ├── [category]/           # Dynamic category pages
│   │   └── [product]/        # Dynamic product pages
│   ├── components/           # Reusable components
│   │   ├── cart/             # Cart-related components
│   │   ├── header/           # Header and navigation
│   │   ├── footer/           # Footer components
│   │   └── products/         # Product-related components
│   ├── lib/                  # Utility functions and API clients
│   ├── store/                # Redux store configuration
│   └── providers.tsx         # React context providers
├── public/                   # Static assets
│   └── images/               # Image assets
└── tailwind.config.js        # Tailwind CSS configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started)
- [Strapi Documentation](https://docs.strapi.io)
