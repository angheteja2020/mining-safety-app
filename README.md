# Mining Safety Hazards Dashboard

A comprehensive web application displaying major safety hazards in mining operations with their corresponding symbols, critical controls, interactive checklists, and notes system.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Adding Images](#adding-images)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Features Guide](#features-guide)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)

## ✨ Features

- **11 Major Safety Hazards** - Comprehensive coverage of mining safety risks
- **Three-Column Layout** - Hazard, Symbol, and Critical Controls
- **Search & Filter System** - Real-time search and filter by control type
- **Multi-Language Support** - English/Spanish toggle (ES/EN)
- **Interactive Checklist** - Verify implementation of critical controls with progress tracking
- **Notes System** - Add, edit, and delete notes for each hazard with timestamps
- **Expandable Rows** - Click any hazard to view detailed checklist and notes
- **Data Persistence** - All checklists and notes saved automatically in localStorage
- **Responsive Design** - Works on desktop and tablet devices
- **Color-Coded Controls** - Engineering (blue), Administrative (red), PPE (blue)
- **Progress Visualization** - Color-coded progress bars (red < 50%, orange 50-99%, green 100%)

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
│   ├── index.css                       # Global styles with Tailwind
│   ├── translations.js                 # Multi-language support
│   ├── NotesSection.jsx               # Notes system component
│   └── ChecklistSection.jsx           # Checklist system component
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

## 📖 Features Guide

### Search & Filter System

**Search Bar:**

- Type any hazard name to filter results in real-time
- Example: Type "fire" to show only Fire hazard
- Case-insensitive search

**Filter Buttons:**

- **All** - Shows all 11 hazards
- **Engineering** - Shows only hazards with engineering controls
- **Administrative** - Shows only hazards with administrative controls
- **PPE** - Shows only hazards requiring Personal Protective Equipment

**Results Counter:**

- Displays "Showing X of Y hazards" below filters
- Updates automatically as you search/filter

### Multi-Language Support

**Language Toggle:**

- Click the **EN/ES** button in the header
- Instantly switches between English and Spanish
- All text updates: hazards, controls, buttons, messages
- Checklist and notes maintain their state when switching languages

### Interactive Checklist System

**How to Use:**

1. **Click any hazard row** to expand it
2. The **Checklist** section appears first
3. Click on any control card to mark it as verified
4. Checked items show:
   - Green checkmark icon ✓
   - Green border
   - Strikethrough text
   - Updated progress counter

**Progress Tracking:**

- **Counter:** "X of Y controls verified (Z%)"
- **Progress Bar:** Visual representation with color coding:
  - **Red:** 0-49% complete
  - **Orange:** 50-99% complete
  - **Green:** 100% complete
- Progress updates instantly when checking/unchecking

**Data Persistence:**

- All checkbox states save automatically to your browser
- Reload the page - your progress remains intact
- Each hazard maintains independent checklist state

### Notes System

**Adding Notes:**

1. Expand any hazard row
2. Scroll to the **Notes** section (below checklist)
3. Click **"+ Add Note"**
4. Type your note in the text area
5. Optionally add your name in the Author field
6. Click **"Save"**

**Note Features:**

- Timestamp automatically added to each note
- Shows author name (or "Anonymous" if not provided)
- Notes display in reverse chronological order (newest first)
- Each note shows: Author, Date/Time, Content

**Managing Notes:**

- **Edit:** Click the pencil icon, modify text, save
- **Delete:** Click the trash icon to remove
- Notes counter shows total: "Notes (3)"

**Note Persistence:**

- All notes save automatically to your browser
- Each hazard has independent notes
- Notes survive page reloads

### Expanding/Collapsing Hazards

**Visual Indicators:**

- **ChevronDown ▼** - Row is collapsed
- **ChevronUp ▲** - Row is expanded

**Interaction:**

- Click anywhere on a hazard row to expand/collapse
- Only one hazard can be expanded at a time
- Expanding a hazard shows:
  1. Checklist section
  2. Notes section

## 🎨 Customization

### Changing Colors

The application uses cardinal red and navy blue. To customize:

**In App.jsx, find and modify these style properties:**

```javascript
// Header gradient
background: "linear-gradient(to right, rgb(153 27 27), rgb(30 58 138))";

// Change to your colors:
background: "linear-gradient(to right, rgb(YOUR_RED), rgb(YOUR_BLUE))";
```

### Adding/Removing Hazards

**Step 1 - Add translations in translations.js:**

```javascript
// In both 'en' and 'es' objects, add to hazards section:
newHazard: {
  name: "New Hazard Name",
  engineering: "Engineering control description...",
  administrative: "Administrative control description..."
}
```

**Step 2 - Add to hazardsData array in App.jsx:**

```javascript
const hazardsData = [
  // ... existing hazards
  { id: 12, key: "newHazard", iconPath: "/images/icons/new-hazard.png" },
];
```

**Step 3 - Add icon image:**

- Place icon in `public/images/icons/new-hazard.png`

### Modifying Control Text

Edit the `translations.js` file:

- Navigate to the hazard you want to modify
- Update the text for engineering, administrative, or ppe
- Changes apply to both the main display and checklist

## 🔧 Troubleshooting

### Images Not Showing

**Problem:** Images appear broken or don't load

**Solutions:**

1. Verify image files are in the correct folders
2. Check file names match exactly (case-sensitive)
3. Make sure images are in `public/` folder, not `src/`
4. Clear browser cache (Ctrl + Shift + R)

### Checklist Not Saving

**Problem:** Checkbox states reset after page reload

**Solutions:**

1. Check browser console for localStorage errors
2. Ensure localStorage is enabled in browser settings
3. Try a different browser (private browsing may block localStorage)
4. Clear browser data and try again

### Notes Disappearing

**Problem:** Notes don't persist after reload

**Solutions:**

1. Same as checklist troubleshooting above
2. Verify you clicked "Save" after typing the note
3. Check localStorage key 'hazardNotes' exists in browser DevTools

### Language Toggle Not Working

**Problem:** Clicking EN/ES doesn't change language

**Solutions:**

1. Verify translations.js is properly imported
2. Check browser console for errors
3. Ensure all translation keys exist in both 'en' and 'es' objects

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

## 💾 Data Storage

**What Gets Saved:**

- Checklist states (all checkboxes for all hazards)
- All notes (text, author, timestamps)
- Language preference (optional)

**Where It's Saved:**

- Browser's localStorage
- Keys used:
  - `hazardChecklists` - Checklist data
  - `hazardNotes` - Notes data

**Important Notes:**

- Data is browser-specific (doesn't sync across devices)
- Clearing browser data will delete saved information
- Private/Incognito mode may not save data
- Data persists indefinitely unless manually cleared

## 📝 Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Icon library (CheckCircle, Circle, AlertTriangle, etc.)
- **localStorage API** - Browser storage for persistence

## 📄 License

This project is for educational purposes.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs.

## 📧 Support

If you encounter any issues, please check the Troubleshooting section or consult your instructor.

## 🔄 Version History

**v2.0** - Current Version

- Added interactive checklist system
- Added notes system with edit/delete
- Added multi-language support (EN/ES)
- Added search and filter functionality
- Added expandable rows
- Added data persistence

**v1.0** - Initial Release

- Basic table with 11 safety hazards
- Static display of controls
- Icon support

---

**Made for Mining Safety Education** 🏗️⚠️
