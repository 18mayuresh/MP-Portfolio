# Mayuresh Sachin Patil — Portfolio

A professional Data Analytics portfolio website.

---

## 📁 File Structure

```
mayuresh_portfolio/
├── index.html              →  HTML structure
├── style.css               →  All colors, fonts, spacing
├── data.js                 →  ⭐ Your personal data — edit this
├── script.js               →  Page builder + lightbox logic
├── README.md               →  This file
└── certificates/
    ├── generative-ai.svg   →  🔁 Replace with your real certificate
    ├── c-programming.svg   →  🔁 Replace with your real certificate
    ├── power-bi.svg        →  🔁 Replace with your real certificate
    └── data-science.svg    →  🔁 Replace with your real certificate
```

---

## 🚀 How to Open

1. Open the folder in **VS Code**
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **"Open with Live Server"**
4. Your portfolio opens in the browser and auto-refreshes on save

---

## ✏️ How to Edit

### 🏅 Replace placeholder certificates with your real ones

1. Copy your certificate image files (`.jpg`, `.png`, or `.pdf`) into the `certificates/` folder
2. Open `data.js` and update the `image:` path for each certificate:

```js
certificates: [
  {
    icon: "🤖", name: "Generative AI", issuer: "Artificial Intelligence",
    image: "certificates/generative-ai.jpg"   // ← change filename here
  },
  ...
]
```

✅ Supported formats: `.jpg` `.jpeg` `.png` `.svg` `.webp`

---

### Change personal info, skills, projects → `data.js`
This is the **only file you normally need to edit**.
Everything (name, email, skills, projects, certs) is defined here.

```js
// Example: change your email
email: "your-new-email@gmail.com",

// Example: add a new project
projects: [
  ...
  {
    num:   "04",
    icon:  "🗄️",
    title: "My New Project",
    desc:  "Description of the project...",
    tags:  ["Python", "SQL"],
    cls:   "p1"   // p1 = gold, p2 = teal, p3 = slate
  }
]
```

### Change colors → `style.css` (top section `:root`)
```css
:root {
  --gold:   #c8a45a;   /* Primary accent  */
  --teal:   #2fb8a0;   /* Secondary accent */
  --slate:  #5b8db8;   /* Tertiary accent  */
  --bg:     #07090f;   /* Page background  */
}
```

### Change layout or HTML structure → `index.html`

### Change animations or logic → `script.js`

---

## 🌐 How to Deploy (Free Hosting)

**Option 1 — GitHub Pages**
1. Create a GitHub repo
2. Upload all 4 files
3. Go to Settings → Pages → Source: main branch
4. Your site is live at `https://yourusername.github.io/repo-name`

**Option 2 — Netlify (Drag & Drop)**
1. Go to [netlify.com](https://netlify.com)
2. Drag the entire folder onto the dashboard
3. Done — instant live URL

---

## 🛠️ VS Code Tips

- `Ctrl + S` → Save and auto-refresh (with Live Server)
- `Alt + Z` → Toggle word wrap
- `Ctrl + /` → Comment/uncomment a line
- `Ctrl + F` → Find text in file
