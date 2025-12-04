import React from "react";

export default function Layout({ children }) {
  return (
    <div className="portfolio-app">
      {children}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          .portfolio-app {
            min-height: 100vh;
          }
          
          :root {
            --color-black: #000000;
            --color-white: #ffffff;
            --color-gray-50: #fafafa;
            --color-gray-100: #f5f5f5;
            --color-gray-200: #e5e5e5;
            --color-gray-300: #d4d4d4;
            --color-gray-400: #a3a3a3;
            --color-gray-500: #737373;
            --color-gray-600: #525252;
            --color-gray-700: #404040;
            --color-gray-800: #262626;
            --color-gray-900: #171717;
            
            --color-orange: #ff6b35;
            --color-orange-light: #ff8c5a;
            --color-teal: #14b8a6;
            --color-teal-light: #5eead4;
            
            --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            --font-mono: 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
            
            --spacing-xs: 0.25rem;
            --spacing-sm: 0.5rem;
            --spacing-md: 1rem;
            --spacing-lg: 1.5rem;
            --spacing-xl: 2rem;
            --spacing-2xl: 3rem;
            --spacing-3xl: 4rem;
            --spacing-4xl: 6rem;
            --spacing-5xl: 8rem;
            
            --radius-sm: 0.375rem;
            --radius-md: 0.5rem;
            --radius-lg: 0.75rem;
            --radius-xl: 1rem;
            --radius-2xl: 1.5rem;
            
            --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
            --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
            
            --transition-fast: 0.15s ease;
            --transition-normal: 0.2s ease;
            --transition-slow: 0.3s ease;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            font-family: var(--font-sans);
            font-size: 16px;
            line-height: 1.6;
            color: var(--color-gray-900);
            background: var(--color-white);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow-x: hidden;
          }

          .luxury-app {
            position: relative;
            min-height: 100vh;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 var(--spacing-xl);
          }

          /* Loading Screen */
          .loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--color-white);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            font-size: 1.125rem;
            color: var(--color-gray-600);
          }

          /* Sidebar Styles */
          .sidebar-toggle {
            position: fixed;
            top: var(--spacing-lg);
            left: var(--spacing-lg);
            z-index: 1001;
            background: var(--color-white);
            border: 1px solid var(--color-gray-200);
            border-radius: var(--radius-lg);
            padding: var(--spacing-sm);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all var(--transition-normal);
            box-shadow: var(--shadow-md);
          }

          .sidebar-toggle:hover {
            background: var(--color-gray-50);
            transform: translateY(-1px);
            box-shadow: var(--shadow-lg);
          }

          .luxury-sidebar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 280px;
            background: var(--color-white);
            border-right: 1px solid var(--color-gray-200);
            transform: translateX(-100%);
            transition: transform var(--transition-slow);
            z-index: 1000;
            overflow-y: auto;
          }

          .luxury-sidebar.sidebar-open {
            transform: translateX(0);
          }

          .sidebar-content {
            padding: var(--spacing-xl);
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          .sidebar-brand {
            position: relative;
            margin-bottom: var(--spacing-3xl);
          }

          .brand-text {
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--color-black);
            letter-spacing: -0.02em;
          }

          .brand-accent {
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, var(--color-orange), var(--color-teal));
            margin-top: var(--spacing-xs);
            border-radius: 1px;
          }

          .sidebar-nav-list {
            list-style: none;
            flex: 1;
          }

          .nav-item-wrapper {
            margin-bottom: var(--spacing-xs);
          }

          .nav-item {
            width: 100%;
            display: flex;
            align-items: center;
            gap: var(--spacing-md);
            padding: var(--spacing-md) var(--spacing-lg);
            background: transparent;
            border: none;
            border-radius: var(--radius-lg);
            text-align: left;
            cursor: pointer;
            transition: all var(--transition-normal);
            position: relative;
            overflow: hidden;
            animation: slideInLeft 0.6s ease forwards;
            opacity: 0;
            transform: translateX(-30px);
          }

          @keyframes slideInLeft {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .nav-item:hover,
          .nav-item.active {
            background: var(--color-gray-50);
            transform: translateX(4px);
          }

          .nav-item.active {
            background: linear-gradient(135deg, var(--color-orange) 0%, var(--color-teal) 100%);
            color: var(--color-white);
          }

          .nav-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.7;
            transition: opacity var(--transition-fast);
          }

          .nav-item:hover .nav-icon,
          .nav-item.active .nav-icon {
            opacity: 1;
          }

          .nav-label {
            font-size: 0.875rem;
            font-weight: 600;
            letter-spacing: -0.01em;
          }

          .nav-indicator {
            position: absolute;
            right: var(--spacing-md);
            width: 4px;
            height: 4px;
            background: currentColor;
            border-radius: 50%;
            opacity: 0;
            transition: opacity var(--transition-normal);
          }

          .nav-item.active .nav-indicator {
            opacity: 1;
          }

          .sidebar-footer {
            border-top: 1px solid var(--color-gray-200);
            padding-top: var(--spacing-lg);
            text-align: center;
          }

          .footer-line {
            width: 40px;
            height: 1px;
            background: var(--color-gray-300);
            margin: 0 auto var(--spacing-sm);
          }

          .footer-text {
            font-size: 0.75rem;
            color: var(--color-gray-500);
            font-weight: 500;
          }

          .sidebar-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(4px);
            opacity: 0;
            visibility: hidden;
            transition: all var(--transition-normal);
          }

          .luxury-sidebar.sidebar-open .sidebar-backdrop {
            opacity: 1;
            visibility: visible;
          }

          /* Hero Section */
          .hero-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            padding: var(--spacing-4xl) var(--spacing-xl);
            overflow: hidden;
          }

          .hero-content {
            max-width: 800px;
            margin-left: 320px;
            position: relative;
            z-index: 2;
          }

          .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: var(--spacing-sm);
            padding: var(--spacing-sm) var(--spacing-lg);
            background: var(--color-gray-50);
            border: 1px solid var(--color-gray-200);
            border-radius: 50px;
            font-size: 0.875rem;
            font-weight: 500;
            color: var(--color-gray-600);
            margin-bottom: var(--spacing-xl);
            position: relative;
          }

          .badge-pulse {
            width: 8px;
            height: 8px;
            background: var(--color-teal);
            border-radius: 50%;
            position: relative;
          }

          .badge-pulse::after {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: var(--color-teal);
            border-radius: 50%;
            opacity: 0.3;
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.2); opacity: 0.1; }
            100% { transform: scale(1); opacity: 0.3; }
          }

          .hero-title {
            font-size: clamp(3rem, 8vw, 4.5rem);
            font-weight: 900;
            line-height: 1.1;
            letter-spacing: -0.02em;
            margin-bottom: var(--spacing-xl);
          }

          .title-line {
            display: block;
            animation: slideInUp 0.8s ease forwards;
            opacity: 0;
            transform: translateY(50px);
          }

          .title-line:nth-child(1) { animation-delay: 0.1s; }
          .title-line:nth-child(2) { animation-delay: 0.3s; }
          .title-line:nth-child(3) { animation-delay: 0.5s; }

          @keyframes slideInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .title-main {
            background: linear-gradient(135deg, var(--color-orange) 0%, var(--color-teal) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .title-subtitle {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--color-gray-600);
          }

          .hero-description {
            font-size: 1.25rem;
            color: var(--color-gray-600);
            line-height: 1.7;
            margin-bottom: var(--spacing-2xl);
            max-width: 600px;
            animation: fadeIn 0.8s ease 0.7s forwards;
            opacity: 0;
          }

          @keyframes fadeIn {
            to { opacity: 1; }
          }

          .hero-actions {
            display: flex;
            align-items: center;
            gap: var(--spacing-lg);
            flex-wrap: wrap;
            animation: fadeIn 0.8s ease 0.9s forwards;
            opacity: 0;
          }

          .hero-visual {
            position: absolute;
            top: 50%;
            right: var(--spacing-4xl);
            transform: translateY(-50%);
            z-index: 1;
          }

          .code-snippet {
            background: var(--color-gray-900);
            border-radius: var(--radius-xl);
            padding: var(--spacing-xl);
            font-family: var(--font-mono);
            font-size: 0.875rem;
            box-shadow: var(--shadow-xl);
            min-width: 300px;
            animation: float 6s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(-50px) rotate(0deg); }
            50% { transform: translateY(-70px) rotate(1deg); }
          }

          .code-header {
            display: flex;
            align-items: center;
            padding-bottom: var(--spacing-md);
            border-bottom: 1px solid var(--color-gray-700);
            margin-bottom: var(--spacing-md);
          }

          .code-dots {
            display: flex;
            gap: var(--spacing-xs);
          }

          .code-dots span {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--color-gray-600);
          }

          .code-dots span:nth-child(1) { background: #ff5f57; }
          .code-dots span:nth-child(2) { background: #ffbd2e; }
          .code-dots span:nth-child(3) { background: #28ca42; }

          .code-content {
            display: flex;
            flex-direction: column;
            gap: 2px;
          }

          .code-comment { color: #6b7280; }
          .code-function { color: #f59e0b; }
          .code-property { color: #10b981; margin-left: var(--spacing-md); }

          .hero-scroll-indicator {
            position: absolute;
            bottom: var(--spacing-2xl);
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--spacing-sm);
            color: var(--color-gray-500);
            font-size: 0.875rem;
            font-weight: 500;
          }

          .scroll-line {
            width: 1px;
            height: 30px;
            background: var(--color-gray-300);
            animation: scrollPulse 2s infinite;
          }

          @keyframes scrollPulse {
            0% { height: 30px; opacity: 1; }
            50% { height: 20px; opacity: 0.5; }
            100% { height: 30px; opacity: 1; }
          }

          /* Infinite Marquee */
          .infinite-marquee {
            position: relative;
            overflow: hidden;
            background: var(--color-black);
            color: var(--color-white);
            padding: var(--spacing-lg) 0;
            margin: var(--spacing-5xl) 0;
          }

          .marquee-content {
            display: flex;
            align-items: center;
            white-space: nowrap;
            font-size: 2rem;
            font-weight: 800;
            letter-spacing: 0.1em;
            background: linear-gradient(90deg, 
              var(--color-white) 0%, 
              var(--color-orange) 25%, 
              var(--color-teal) 50%, 
              var(--color-white) 75%, 
              var(--color-white) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200% 100%;
            animation: gradientShift 3s ease-in-out infinite alternate;
          }

          @keyframes marqueeScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }

          .marquee-gradient {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100px;
            z-index: 1;
            pointer-events: none;
          }

          .marquee-gradient-left {
            left: 0;
            background: linear-gradient(90deg, var(--color-black), transparent);
          }

          .marquee-gradient-right {
            right: 0;
            background: linear-gradient(-90deg, var(--color-black), transparent);
          }

          /* Section Marquee */
          .section-marquee {
            margin: 0;
          }

          /* Luxury Buttons */
          .luxury-btn {
            display: inline-flex;
            align-items: center;
            gap: var(--spacing-sm);
            padding: var(--spacing-md) var(--spacing-xl);
            font-size: 0.875rem;
            font-weight: 600;
            text-decoration: none;
            border-radius: var(--radius-lg);
            transition: all var(--transition-normal);
            position: relative;
            overflow: hidden;
            border: none;
            cursor: pointer;
            font-family: inherit;
          }

          .luxury-btn.large {
            padding: var(--spacing-lg) var(--spacing-2xl);
            font-size: 1rem;
          }

          .luxury-btn.primary {
            background: linear-gradient(135deg, var(--color-orange) 0%, var(--color-teal) 100%);
            color: var(--color-white);
            box-shadow: var(--shadow-md);
          }

          .luxury-btn.primary:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-xl);
          }

          .luxury-btn.secondary {
            background: transparent;
            color: var(--color-gray-900);
            border: 1px solid var(--color-gray-300);
          }

          .luxury-btn.secondary:hover {
            background: var(--color-gray-50);
            border-color: var(--color-gray-400);
            transform: translateY(-1px);
          }

          .btn-glow {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, var(--color-orange) 0%, var(--color-teal) 100%);
            opacity: 0;
            transition: opacity var(--transition-normal);
          }

          .luxury-btn.primary:hover .btn-glow {
            opacity: 0.2;
          }

          /* Overlapping About Section */
          .overlapping-about {
            position: relative;
            padding: var(--spacing-5xl) 0;
            background: var(--color-gray-50);
            overflow: hidden;
          }

          .about-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 var(--spacing-xl);
            position: relative;
          }

          .bg-grid-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
              linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
            background-size: 50px 50px;
            opacity: 0.5;
          }

          .floating-shapes {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
          }

          .shape {
            position: absolute;
            border-radius: 50%;
            opacity: 0.1;
          }

          .shape-1 {
            width: 200px;
            height: 200px;
            background: var(--color-orange);
            top: 10%;
            right: 10%;
            animation: floatShape 8s ease-in-out infinite;
          }

          .shape-2 {
            width: 150px;
            height: 150px;
            background: var(--color-teal);
            bottom: 20%;
            left: 5%;
            animation: floatShape 10s ease-in-out infinite reverse;
          }

          .shape-3 {
            width: 100px;
            height: 100px;
            background: var(--color-gray-400);
            top: 50%;
            left: 50%;
            animation: floatShape 6s ease-in-out infinite;
          }

          @keyframes floatShape {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }

          .about-grid {
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: var(--spacing-4xl);
            align-items: start;
            position: relative;
            z-index: 2;
          }

          .about-text-section {
            max-width: 600px;
          }

          .section-badge {
            display: inline-flex;
            align-items: center;
            padding: var(--spacing-sm) var(--spacing-lg);
            background: var(--color-white);
            border: 1px solid var(--color-gray-200);
            border-radius: 50px;
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--color-gray-700);
            margin-bottom: var(--spacing-xl);
            position: relative;
            box-shadow: var(--shadow-sm);
          }

          .badge-glow {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, var(--color-orange), var(--color-teal));
            border-radius: 50px;
            opacity: 0.1;
          }

          .about-title {
            font-size: 3rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: var(--spacing-xl);
            color: var(--color-gray-900);
          }

          .title-accent {
            background: linear-gradient(135deg, var(--color-orange) 0%, var(--color-teal) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .about-description {
            margin-bottom: var(--spacing-2xl);
          }

          .about-description p {
            font-size: 1.125rem;
            line-height: 1.7;
            color: var(--color-gray-600);
            margin-bottom: var(--spacing-lg);
          }

          .about-actions {
            display: flex;
            align-items: center;
            gap: var(--spacing-lg);
            flex-wrap: wrap;
          }

          .achievement-cards {
            display: grid;
            gap: var(--spacing-lg);
          }

          .achievement-card {
            background: var(--color-white);
            padding: var(--spacing-lg);
            border-radius: var(--radius-xl);
            border: 1px solid var(--color-gray-200);
            display: flex;
            align-items: center;
            gap: var(--spacing-md);
            position: relative;
            overflow: hidden;
            animation: slideInRight 0.8s ease forwards;
            opacity: 0;
            transform: translateX(50px);
            box-shadow: var(--shadow-sm);
            transition: all var(--transition-normal);
          }

          .achievement-card.visible {
            opacity: 1;
            transform: translateX(0);
          }

          .achievement-card:hover {
            transform: translateY(-4px) translateX(0);
            box-shadow: var(--shadow-lg);
          }

          @keyframes slideInRight {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .achievement-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--color-orange), var(--color-teal));
            border-radius: var(--radius-lg);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-white);
            flex-shrink: 0;
          }

          .achievement-content {
            flex: 1;
          }

          .achievement-number {
            font-size: 1.125rem;
            font-weight: 700;
            color: var(--color-gray-900);
            line-height: 1;
          }

          .achievement-desc {
            font-size: 0.875rem;
            color: var(--color-gray-600);
            margin-top: 2px;
          }

          .card-shine {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transition: left 0.6s ease;
          }

          .achievement-card:hover .card-shine {
            left: 100%;
          }

          .tech-showcase {
            margin-top: var(--spacing-5xl);
            position: relative;
            z-index: 2;
          }

          .tech-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--color-gray-900);
            margin-bottom: var(--spacing-2xl);
            text-align: center;
          }

          .tech-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: var(--spacing-lg);
          }

          .tech-item {
            background: var(--color-white);
            padding: var(--spacing-lg);
            border-radius: var(--radius-lg);
            border: 1px solid var(--color-gray-200);
            animation: slideInUp 0.6s ease forwards;
            opacity: 0;
            transform: translateY(30px);
          }

          .tech-item.animate-in {
            opacity: 1;
            transform: translateY(0);
          }

          .tech-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--spacing-sm);
          }

          .tech-name {
            font-weight: 600;
            color: var(--color-gray-900);
          }

          .tech-level {
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--color-gray-600);
          }

          .tech-bar {
            height: 4px;
            background: var(--color-gray-200);
            border-radius: 2px;
            overflow: hidden;
            margin-bottom: var(--spacing-sm);
          }

          .tech-progress {
            height: 100%;
            background: linear-gradient(90deg, var(--color-orange), var(--color-teal));
            border-radius: 2px;
            transition: width 1s ease;
          }

          .tech-category {
            font-size: 0.75rem;
            color: var(--color-gray-500);
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .decorative-card {
            position: absolute;
            top: 20%;
            right: -50px;
            width: 200px;
            height: 120px;
            background: var(--color-white);
            border: 1px solid var(--color-gray-200);
            border-radius: var(--radius-xl);
            padding: var(--spacing-lg);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: var(--spacing-sm);
            box-shadow: var(--shadow-lg);
            z-index: 3;
          }

          .card-pattern {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: radial-gradient(circle, var(--color-gray-200) 1px, transparent 1px);
            background-size: 15px 15px;
            opacity: 0.3;
          }

          .card-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2px;
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--color-gray-700);
            text-align: center;
            position: relative;
          }

          /* Projects Section */
          .projects-section {
            padding: var(--spacing-5xl) 0;
            background: var(--color-white);
          }

          .horizontal-projects-container {
            position: relative;
          }

          .projects-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--spacing-3xl);
            padding: 0 var(--spacing-xl);
          }

          .section-title-container {
            position: relative;
          }

          .section-title-luxury {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-gray-900);
            margin-bottom: var(--spacing-sm);
          }

          .title-accent-line {
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, var(--color-orange), var(--color-teal));
            border-radius: 2px;
          }

          .scroll-controls {
            display: flex;
            gap: var(--spacing-sm);
          }

          .scroll-btn {
            width: 50px;
            height: 50px;
            background: var(--color-white);
            border: 1px solid var(--color-gray-300);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all var(--transition-normal);
            color: var(--color-gray-600);
          }

          .scroll-btn:hover:not(.disabled) {
            background: var(--color-gray-50);
            border-color: var(--color-gray-400);
            transform: translateY(-2px);
            color: var(--color-gray-900);
          }

          .scroll-btn.disabled {
            opacity: 0.3;
            cursor: not-allowed;
          }

          .horizontal-scroll-wrapper {
            position: relative;
            overflow: hidden;
          }

          .horizontal-projects-scroll {
            overflow-x: auto;
            overflow-y: hidden;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .horizontal-projects-scroll::-webkit-scrollbar {
            display: none;
          }

          .projects-track {
            display: flex;
            gap: var(--spacing-xl);
            padding: 0 var(--spacing-xl) var(--spacing-lg);
          }

          .luxury-project-card {
            flex: 0 0 350px;
            background: var(--color-white);
            border: 1px solid var(--color-gray-200);
            border-radius: var(--radius-xl);
            overflow: hidden;
            position: relative;
            transition: all var(--transition-slow);
            animation: slideInUp 0.8s ease forwards;
            opacity: 0;
            transform: translateY(50px);
            animation-delay: calc(var(--index) * 0.1s);
          }

          .luxury-project-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-xl);
          }

          .project-image-container {
            position: relative;
            height: 200px;
            overflow: hidden;
          }

          .project-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform var(--transition-slow);
          }

          .luxury-project-card:hover .project-image {
            transform: scale(1.05);
          }

          .project-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%);
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding: var(--spacing-lg);
            opacity: 0;
            transition: opacity var(--transition-normal);
          }

          .luxury-project-card:hover .project-overlay {
            opacity: 1;
          }

          .project-stats {
            display: flex;
            gap: var(--spacing-md);
          }

          .stat {
            display: flex;
            align-items: center;
            gap: var(--spacing-xs);
            color: var(--color-white);
            font-size: 0.875rem;
            font-weight: 500;
          }

          .project-links {
            display: flex;
            gap: var(--spacing-sm);
          }

          .project-link {
            width: 36px;
            height: 36px;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: var(--radius-md);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-white);
            text-decoration: none;
            transition: all var(--transition-normal);
          }

          .project-link:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: scale(1.1);
          }

          .project-content {
            padding: var(--spacing-xl);
          }

          .project-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--color-gray-900);
            margin-bottom: var(--spacing-sm);
            line-height: 1.3;
          }

          .project-description {
            color: var(--color-gray-600);
            line-height: 1.6;
            margin-bottom: var(--spacing-lg);
            font-size: 0.95rem;
          }

          .project-tech-stack {
            display: flex;
            gap: var(--spacing-xs);
            flex-wrap: wrap;
          }

          .tech-tag {
            padding: var(--spacing-xs) var(--spacing-sm);
            background: var(--color-gray-100);
            color: var(--color-gray-700);
            border-radius: var(--radius-sm);
            font-size: 0.75rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.025em;
          }

          .card-glow {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, var(--color-orange) 0%, var(--color-teal) 100%);
            opacity: 0;
            transition: opacity var(--transition-normal);
            pointer-events: none;
          }

          .luxury-project-card:hover .card-glow {
            opacity: 0.05;
          }

          .scroll-gradient {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 80px;
            pointer-events: none;
            z-index: 1;
          }

          .scroll-gradient-left {
            left: 0;
            background: linear-gradient(90deg, var(--color-white), transparent);
          }

          .scroll-gradient-right {
            right: 0;
            background: linear-gradient(-90deg, var(--color-white), transparent);
          }

          .projects-footer {
            text-align: center;
            padding: var(--spacing-2xl) var(--spacing-xl) 0;
          }

          .view-all-btn {
            display: inline-flex;
            align-items: center;
            gap: var(--spacing-sm);
            padding: var(--spacing-lg) var(--spacing-2xl);
            background: transparent;
            border: 2px solid var(--color-gray-300);
            border-radius: var(--radius-lg);
            color: var(--color-gray-900);
            text-decoration: none;
            font-weight: 600;
            transition: all var(--transition-normal);
          }

          .view-all-btn:hover {
            border-color: var(--color-orange);
            color: var(--color-orange);
            transform: translateY(-2px);
          }

          .horizontal-projects-loading {
            text-align: center;
            padding: var(--spacing-4xl);
          }

          .loading-spinner-luxury {
            width: 40px;
            height: 40px;
            border: 3px solid var(--color-gray-200);
            border-top: 3px solid var(--color-orange);
            border-radius: 50%;
            margin: 0 auto var(--spacing-lg);
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          /* Certificates Section */
          .certificates-section {
            padding: var(--spacing-5xl) 0;
            background: var(--color-gray-50);
          }

          .section-header {
            text-align: center;
            margin-bottom: var(--spacing-4xl);
          }

          .certificates-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: var(--spacing-xl);
            max-width: 1000px;
            margin: 0 auto;
          }

          .certificate-card {
            background: var(--color-white);
            border: 1px solid var(--color-gray-200);
            border-radius: var(--radius-xl);
            padding: var(--spacing-xl);
            display: flex;
            align-items: center;
            gap: var(--spacing-lg);
            text-decoration: none;
            color: inherit;
            transition: all var(--transition-normal);
            position: relative;
            overflow: hidden;
            animation: slideInUp 0.6s ease forwards;
            opacity: 0;
            transform: translateY(30px);
          }

          .certificate-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg);
          }

          .cert-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--color-orange), var(--color-teal));
            border-radius: var(--radius-lg);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-white);
            flex-shrink: 0;
          }

          .cert-content {
            flex: 1;
          }

          .cert-title {
            font-size: 1.125rem;
            font-weight: 700;
            color: var(--color-gray-900);
            margin-bottom: var(--spacing-xs);
            line-height: 1.3;
          }

          .cert-issuer {
            color: var(--color-gray-600);
            font-size: 0.875rem;
            margin-bottom: var(--spacing-xs);
          }

          .cert-date {
            color: var(--color-orange);
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .cert-arrow {
            color: var(--color-gray-400);
            transition: all var(--transition-normal);
          }

          .certificate-card:hover .cert-arrow {
            color: var(--color-orange);
            transform: translate(4px, -4px);
          }

          .certificates-loading {
            text-align: center;
            padding: var(--spacing-4xl);
          }

          /* Contact Section */
          .contact-section {
            padding: var(--spacing-5xl) 0;
            background: var(--color-gray-900);
            color: var(--color-white);
            position: relative;
            overflow: hidden;
          }

          .contact-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
            position: relative;
            z-index: 2;
          }

          .contact-text {
            margin-bottom: var(--spacing-3xl);
          }

          .contact-title {
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: var(--spacing-lg);
          }

          .contact-description {
            font-size: 1.25rem;
            color: var(--color-gray-400);
            line-height: 1.6;
            max-width: 600px;
            margin: 0 auto;
          }

          .contact-actions {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--spacing-2xl);
          }

          .social-links {
            display: flex;
            gap: var(--spacing-xl);
            flex-wrap: wrap;
            justify-content: center;
          }

          .social-link {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
            color: var(--color-gray-400);
            text-decoration: none;
            font-weight: 500;
            transition: color var(--transition-normal);
          }

          .social-link:hover {
            color: var(--color-white);
          }

          .contact-visual {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
          }

          .visual-grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: repeat(4, 1fr);
            height: 100%;
            opacity: 0.05;
          }

          .grid-item {
            border: 1px solid var(--color-gray-700);
            animation: gridPulse 4s ease-in-out infinite;
          }

          .grid-item:nth-child(odd) {
            animation-delay: 0.5s;
          }

          @keyframes gridPulse {
            0%, 100% { opacity: 0.05; }
            50% { opacity: 0.1; }
          }

          /* Footer */
          .luxury-footer {
            background: var(--color-white);
            border-top: 1px solid var(--color-gray-200);
            padding: var(--spacing-2xl) 0;
          }

          .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--color-gray-600);
            font-size: 0.875rem;
          }

          .footer-links {
            display: flex;
            align-items: center;
            gap: var(--spacing-md);
          }

          .footer-links a {
            color: var(--color-gray-600);
            text-decoration: none;
            transition: color var(--transition-fast);
          }

          .footer-links a:hover {
            color: var(--color-gray-900);
          }

          .separator {
            color: var(--color-gray-400);
          }

          /* Scramble Text Effect */
          .scramble-text {
            cursor: pointer;
            transition: letter-spacing var(--transition-fast);
          }

          /* Mobile Responsive */
          @media (max-width: 1024px) {
            .hero-content {
              margin-left: 0;
              text-align: center;
            }

            .hero-visual {
              display: none;
            }

            .about-grid {
              grid-template-columns: 1fr;
              gap: var(--spacing-2xl);
            }

            .achievement-cards {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 768px) {
            .container {
              padding: 0 var(--spacing-lg);
            }

            .sidebar-toggle {
              top: var(--spacing-md);
              left: var(--spacing-md);
            }

            .hero-section {
              padding: var(--spacing-3xl) var(--spacing-lg);
            }

            .hero-title {
              font-size: 2.5rem;
            }

            .about-title {
              font-size: 2rem;
            }

            .section-title-luxury {
              font-size: 2rem;
            }

            .projects-header {
              flex-direction: column;
              align-items: flex-start;
              gap: var(--spacing-lg);
            }

            .scroll-controls {
              align-self: flex-end;
            }

            .projects-track {
              padding: 0 var(--spacing-lg) var(--spacing-lg);
            }

            .luxury-project-card {
              flex: 0 0 300px;
            }

            .certificates-grid {
              grid-template-columns: 1fr;
            }

            .achievement-cards {
              grid-template-columns: 1fr;
            }

            .tech-grid {
              grid-template-columns: 1fr;
            }

            .hero-actions,
            .about-actions {
              flex-direction: column;
              width: 100%;
            }

            .luxury-btn {
              width: 100%;
              justify-content: center;
            }

            .social-links {
              flex-direction: column;
              gap: var(--spacing-lg);
            }

            .footer-content {
              flex-direction: column;
              gap: var(--spacing-md);
              text-align: center;
            }
          }

          @media (max-width: 480px) {
            .hero-title {
              font-size: 2rem;
            }

            .contact-title {
              font-size: 2rem;
            }

            .luxury-project-card {
              flex: 0 0 280px;
            }

            .decorative-card {
              display: none;
            }

            .floating-shapes {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
}