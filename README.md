# Portfolio Optimization Theories

An interactive educational web application that provides comprehensive guides to various portfolio optimization theories with step-by-step mathematical formulations rendered using LaTeX.

![Portfolio Optimization](https://img.shields.io/badge/Portfolio-Optimization-blue)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite)

## Overview

This application offers an intuitive interface to explore and understand fundamental portfolio optimization theories used in quantitative finance. Each theory is presented with:

- Clear descriptions and context
- Step-by-step implementation guides
- Mathematical equations rendered with LaTeX
- Professional, readable formatting

## Portfolio Theories Covered

1. **Markowitz Mean-Variance Optimization** - Modern Portfolio Theory focusing on maximizing returns for a given risk level
2. **Capital Asset Pricing Model (CAPM)** - Relationship between systematic risk and expected return
3. **Black-Litterman Model** - Combines market equilibrium with investor views
4. **Arbitrage Pricing Theory (APT)** - Multi-factor model for asset pricing
5. **Risk Parity** - Equal risk contribution from each asset
6. **Minimum Variance Portfolio** - Achieving the lowest possible portfolio volatility
7. **Maximum Sharpe Ratio Portfolio** - Maximizing risk-adjusted returns
8. **Mean-CVaR Optimization** - Minimizing tail risk using Conditional Value at Risk

## Features

- 📚 **8 Comprehensive Portfolio Theories** with detailed mathematical formulations
- 📐 **LaTeX Equation Rendering** using KaTeX for beautiful mathematical notation
- 🎯 **Step-by-Step Guides** for each theory implementation
- 🎨 **Clean, Modern UI** with responsive design
- ⚡ **Fast Performance** built with Vite and React
- 📱 **Mobile Friendly** responsive layout

## Prerequisites

- **Node.js** (version 16 or higher recommended)
- **npm** (comes with Node.js)

## Installation

1. Clone the repository or download the source code:
   ```bash
   git clone <repository-url>
   cd portfolio-optimization-theories
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

Build the application for production:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
portfolio-optimization-theories/
├── index.html              # HTML entry point
├── index.tsx              # Main React application component
├── portfolioTheories.ts   # Portfolio theory data and definitions
├── TheoryDetail.tsx       # Component for displaying theory details
├── MathEquation.tsx       # LaTeX equation rendering component
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md             # This file
```

## Usage

1. **Browse Theories**: The home page displays cards for all available portfolio theories
2. **Select a Theory**: Click on any theory card to view its detailed guide
3. **Read Step-by-Step**: Each theory is broken down into clear steps with descriptions
4. **View Equations**: Mathematical formulas are rendered beautifully using LaTeX
5. **Navigate Back**: Use the back button to return to the theory selection page

## Technologies Used

- **React 19.2.0** - UI library for building the interface
- **TypeScript 5.8.2** - Type-safe JavaScript
- **Vite 6.2.0** - Fast build tool and development server
- **KaTeX** - Fast LaTeX rendering library
- **react-katex** - React components for LaTeX rendering

## Mathematical Rendering

This application uses KaTeX and react-katex to render mathematical equations. The `MathEquation` component supports both inline and block-level equations, ensuring proper formatting of complex mathematical expressions.

## Reference Material

The theories included in this application are based on academic research in portfolio optimization and modern portfolio theory. For more in-depth academic context, refer to:

[NYU Law - Portfolio Theory Research](https://ncpl.law.nyu.edu/wp-content/uploads/pdfs/2003/Conf2003_Gruber_Final.pdf)

## Contributing

Contributions are welcome! If you'd like to add more theories or improve existing content:

1. Fork the repository
2. Create a feature branch
3. Add your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please open an issue in the repository.

---

Built with ❤️ for finance and mathematics enthusiasts
