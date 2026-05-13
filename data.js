/* ============================================================
   DATA.JS — Edit ALL your personal info here
   No need to touch index.html or script.js
   ============================================================ */

const PORTFOLIO_DATA = {

  /* ── Personal Info ── */
  name:       "Mayuresh Sachin Patil",
  initials:   "M",
  role:       "Data Analytics Professional",
  tagline:    "Turning Data into Decisions",
  location:   "Kolhapur, Maharashtra, India",
  email:      "mayureshpatil0018@gmail.com",
  phone:      "+91 73850 42752",
  linkedin:   "https://www.linkedin.com/in/mayuresh-patil-88a0412a7",
  available:  true,   // true = shows "Available for Opportunities" badge

  summary: `MCA candidate with hands-on internship experience transforming raw data into
    strategic decisions. Proficient in Python, SQL, Pandas, Matplotlib & Power BI —
    delivering dashboards and insight reports that drive business outcomes.`,

  /* ── Hero Stats Panel ── */
  stats: [
    { label: "Projects Completed", value: "3",  sup: "+" },
    { label: "Certifications",     value: "4",  sup: "+" },
    { label: "Technologies",       value: "8",  sup: "+" },
    { label: "Internship Duration",value: "4",  sup: "mo"},
    { label: "Core Skills",        value: "8",  sup: "+" },
  ],

  /* ── Skills ── */
  skillPanels: [
    {
      icon: "⌨", iconClass: "icon-gold", fillClass: "f-gold",
      title: "Python & Data Libraries",
      bars: [
        { name: "Python",                     pct: 85 },
        { name: "Pandas — Data Manipulation", pct: 80 },
        { name: "NumPy",                      pct: 72 },
        { name: "Matplotlib — Visualisation", pct: 75 },
      ]
    },
    {
      icon: "◈", iconClass: "icon-teal", fillClass: "f-teal",
      title: "Data & Business Intelligence",
      bars: [
        { name: "SQL Data Analysis", pct: 82 },
        { name: "Power BI",          pct: 80 },
        { name: "Advanced Excel",    pct: 78 },
        { name: "Generative AI",     pct: 70 },
      ]
    },
    {
      icon: "⬡", iconClass: "icon-slate", fillClass: "f-slate",
      title: "Web Technologies & Soft Skills",
      bars: [
        { name: "HTML & CSS",  pct: 78 },
        { name: "JavaScript",  pct: 62 },
        { name: "Leadership",  pct: 85 },
      ]
    },
    {
      icon: "⚙", iconClass: "icon-crimson", fillClass: "f-crimson",
      title: "Tools & Platforms",
      tools: [
        "Python","Pandas","NumPy","Matplotlib",
        "SQL / MySQL","Power BI","Advanced Excel",
        "VS Code","Git","DBMS"
      ]
    }
  ],

  /* ── Work Experience ── */
  experience: [
    {
      title:  "Data Analytics Intern",
      badge:  { text: "Live", cls: "badge-live" },
      org:    "Technoworld Softwares Solutions",
      loc:    "Pune, MH",
      date:   "Jan 2026 — Present",
      points: [
        "Collecting & cleaning datasets from multiple sources — handling nulls, duplicates & inconsistencies.",
        "Analyzing business trends using SQL, Python & Excel; producing executive-ready dashboards & reports.",
      ]
    }
  ],

  /* ── Education ── */
  education: [
    {
      degree: "Master of Computer Applications",
      badge:  { text: "Pursuing", cls: "badge-live" },
      org:    "KIT's IMER",
      loc:    "Kolhapur",
      date:   "Jun 2024 — Jun 2026",
      note:   "Specialisation — Data Analysis, Databases & Web Technologies"
    },
    {
      degree: "B.Sc Computer Science",
      badge:  { text: "Completed", cls: "badge-done" },
      org:    "Shivaji University",
      loc:    "Kolhapur",
      date:   "Jun 2021 — Jun 2024",
    },
    {
      degree: "HSC — Class XII",
      badge:  { text: "Completed", cls: "badge-done" },
      org:    "Parisana Ingrale Junior College",
      loc:    "Kolhapur",
      date:   "Jun 2020 — Jun 2021",
    },
    {
      degree: "SSC — Class X",
      badge:  { text: "Completed", cls: "badge-done" },
      org:    "Yashwantrao Ghatge High School",
      loc:    "Kagal",
      date:   "Jun 2018 — Jun 2019",
    }
  ],

  /* ── Projects ── */
  projects: [
    {
      num:   "01",
      icon:  "📊",
      title: "Mobile Sales Data Analysis",
      desc:  "Comprehensive analysis of mobile sales transactions, customer ratings, and brand performance. Built interactive Power BI dashboards visualising daily sales trends and KPIs for stakeholders.",
      tags:  ["Power BI", "Data Cleaning", "Dashboard", "Visualisation"],
      cls:   "p1"
    },
    {
      num:   "02",
      icon:  "👥",
      title: "Employee Career Analysis",
      desc:  "Data-driven HR analytics project examining career growth, promotions, job roles, and performance trends — identifying patterns and workforce insights within an organisation.",
      tags:  ["Python", "SQL", "HR Analytics", "Data Analysis"],
      cls:   "p2"
    },
    {
      num:   "03",
      icon:  "📈",
      title: "Netflix Stock Analysis",
      desc:  "Historical market data analysis of Netflix stock — price trends, volatility metrics, and investment insights using Python and Power BI to understand financial movement patterns.",
      tags:  ["Python", "Power BI", "Finance", "Time-Series"],
      cls:   "p3"
    },
    {
      num:   "04",
      icon:  "📈",
      title: "Ola Ride-Bookings Analysis",
      desc:  "Developed an interactive ride-booking analytics dashboard using Power BI, SQL, and Pandas to analyze booking trends, revenue, cancellations, vehicle performance, and customer behavior. Created dynamic visualizations, KPI cards, and date filters for real-time business insights and data-driven decision-making.",
      tags:  ["Python", "Power BI", "SQL"],
      cls:   "p3"
    },
    {
      num:   "05",
      icon:  "📊",
      title: "Market Sales Analysis",
      desc:  "Developed an interactive Sales Dashboard using Tableau to analyze sales performance, customer behavior, and payment trends. Designed dynamic visualizations including KPI cards, treemaps, bar charts, line charts, and pie charts to track sales by category, mall, gender, payment mode, and monthly invoices. Improved business insights and decision-making through data-driven reporting and dashboard storytelling.",
      tags:  ["Tableau"],
      cls:   "p3"
    }
  ],

  /* ── Certificates ──
     image: path to your certificate file inside the certificates/ folder
     Replace the .svg files with your real .jpg / .png / .pdf files
     and update the paths below accordingly.
  ── */
  certificates: [
    {
      icon: "🤖", name: "Generative AI",  issuer: "Artificial Intelligence",
      image: "certificates/generative-ai.png"
    },
    {
      icon: "💻", name: "C Programming",  issuer: "Programming Fundamentals",
      image: "certificates/c-programming.svg"
    },
    {
      icon: "📊", name: "Power BI",       issuer: "Data Visualisation",
      image: "certificates/power-bi.svg"
    },
    {
      icon: "🔬", name: "Data Science",   issuer: "Analytics & ML",
      image: "certificates/data-science.svg"
    },
    {
      icon: "📊", name: "Bussiness Analyst with Gen-AI",       issuer: "Data Visualisation",
      image: "certificates/Business Analyst.png"
    },
  ],

  /* ── Languages ── */
  languages: [
    { name: "English", level: "Intermediate" },
    { name: "Hindi",   level: "Fluent"       },
    { name: "Marathi", level: "Native"       },
  ],

  /* ── Hobbies ── */
  hobbies: [
    { icon: "🏸", name: "Badminton" },
    { icon: "🏏", name: "Cricket"   },
  ]
};
