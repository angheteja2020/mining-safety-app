# Mining Safety Hazards Dashboard

A comprehensive web application displaying major safety hazards in mining operations with their corresponding symbols and critical controls.

## 📋 Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Adding Images](#adding-images)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)

## ✨ Features

- 11 major safety hazards clearly displayed
- Three-column layout: Hazard, Symbol, and Critical Controls
- Color-coded controls (Engineering, Administrative, PPE)
- Responsive design
- University logo integration
- Professional cardinal red and navy blue color scheme

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

To verify installation, run:
```bash
node --version
npm --version
```

## 📥 Installation

1. **Clone or download this project** to your computer

2. **Open terminal/command prompt** in the project folder

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Install Lucide React icons:**
   ```bash
   npm install lucide-react
   ```

## 📁 Project Structure

```
mining-safety-app/
├── public/
│   ├── index.html
│   └── images/
│       ├── logo.png                    # University logo
│       └── icons/                      # Safety hazard icons
│           ├── ground-instability.png
│           ├── human-equipment.png
│           ├── air-quality.png
│           ├── slips-trips-falls.png
│           ├── stored-energy.png
│           ├── electrical.png
│           ├── fire.png
│           ├── confined-spaces.png
│           ├── noise.png
│           ├── wildlife.png
│           └── flash-flooding.png
├── src/
│   ├── App.jsx                         # Main application component
│   ├── App.css                         # Custom styles
│   ├── main.jsx                        # Application entry point
│   └── index.css                       # Global styles with Tailwind
├── package.json
└── README.md
```

## 🖼️ Adding Images

### Safety Hazard Icons
1. Create the icons folder: `public/images/icons/`
2. Add 11 icon images with these exact names:
   - `ground-instability.png`
   - `human-equipment.png`
   - `air-quality.png`
   - `slips-trips-falls.png`
   - `stored-energy.png`
   - `electrical.png`
   - `fire.png`
   - `confined-spaces.png`
   - `noise.png`
   - `wildlife.png`
   - `flash-flooding.png`

3. **Recommended specifications:**
   - **Size:** 256x256 pixels (or 128x128 minimum)
   - **Format:** PNG with transparent background
   - **Alternative:** SVG for scalable vector graphics

### Fixing Transparent Background Issues

If you see a checkered pattern instead of transparency:

**Option 1 - Add white background in code:**
The current code already handles this with a white background.

**Option 2 - Use online tools to fix transparency:**
- [Remove.bg](https://www.remove.bg/) - Automatic background removal
- [Photopea](https://www.photopea.com/) - Free online Photoshop alternative
- [Canva](https://www.canva.com/) - Background remover tool

**Option 3 - Save as JPG with white background:**
If transparency isn't needed, save icons as JPG files instead.

## 🚀 Running the Application

### Development Mode
Start the development server:
```bash
npm run dev
```

The application will open in your browser at: `http://localhost:5173`

Any changes you make will automatically reload the page.

### Stopping the Server
Press `Ctrl + C` in the terminal

## 🏗️ Building for Production

Create an optimized production build:
```bash
npm run build
```

The optimized files will be in the `dist/` folder, ready to deploy to a web server.

### Preview Production Build
```bash
npm run preview
```

## 🎨 Customization

### Changing Colors

The application uses cardinal red and navy blue. To customize:

**In App.jsx, find and modify these style properties:**

```javascript
// Header gradient
background: 'linear-gradient(to right, rgb(153 27 27), rgb(30 58 138))'

// Change to your colors:
background: 'linear-gradient(to right, rgb(YOUR_RED), rgb(YOUR_BLUE))'
```

### Adding/Removing Hazards

Edit the `hazards` array in `App.jsx`:

```javascript
const hazards = [
  {
    id: 1,
    name: "Your Hazard Name",
    iconPath: "/images/icons/your-icon.png",
    controls: {
      engineering: "Your engineering control...",
      administrative: "Your administrative control...",
      ppe: "Your PPE requirement..." // Optional
    }
  },
  // Add more hazards...
];
```

### Modifying Text Content

All hazard information is in the `hazards` array in `App.jsx`. Simply edit the text there.

## 🔧 Troubleshooting

### Images Not Showing

**Problem:** Images appear broken or don't load

**Solutions:**
1. Verify image files are in the correct folders
2. Check file names match exactly (case-sensitive)
3. Make sure images are in `public/` folder, not `src/`
4. Clear browser cache (Ctrl + Shift + R)

### Tailwind Styles Not Working

**Problem:** Styles don't apply correctly

**Solution:**
The current code uses inline styles instead of Tailwind classes to avoid compatibility issues with Tailwind v4.

### Port Already in Use

**Problem:** `Error: Port 5173 is already in use`

**Solution:**
```bash
# Kill the process using the port, or
npm run dev -- --port 3000
```

### Build Errors

**Problem:** Errors during `npm run build`

**Solutions:**
1. Delete `node_modules/` and `package-lock.json`
2. Run `npm install` again
3. Try `npm run build` again

## 📝 Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Icon library

## 📄 License

This project is for educational purposes.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs.

## 📧 Support

If you encounter any issues, please check the Troubleshooting section or consult me.

---

**Made for Mining Safety Education** 🏗️⚠️