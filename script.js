/* ============================================================
   SCRIPT.JS — Builds the page from data.js + handles animations
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  buildPage();
  initScrollProgress();
  initReveal();
  initSkillBars();
});

/* ── Build full page from data.js ── */
function buildPage() {
  const d = PORTFOLIO_DATA;

  /* NAV */
  document.querySelector(".nav-brand-mark").textContent = d.initials;
  document.querySelector(".nav-brand-name").textContent = d.name;
  document.querySelector(".nav-cta").href = `mailto:${d.email}`;

  /* HERO */
  if (!d.available) document.querySelector(".hero-tag").style.display = "none";
  document.querySelector(".hero-name").innerHTML =
    d.name.split(" ").slice(0, 2).join(" ") +
    `<br><em>${d.name.split(" ").slice(2).join(" ")}</em>`;
  document.querySelector(".hero-role").textContent = d.role;
  document.querySelector(".hero-desc").textContent = d.summary;

  /* HERO STATS PANEL */
  const statsWrap = document.querySelector(".stats-wrap");
  d.stats.forEach(s => {
    statsWrap.insertAdjacentHTML("beforeend", `
      <div class="stat-row">
        <span class="stat-lbl">${s.label}</span>
        <span class="stat-val">${s.value}<sup>${s.sup}</sup></span>
      </div>`);
  });

  /* PANEL CONTACT */
  document.querySelector(".panel-contact").innerHTML = `
    <a href="mailto:${d.email}" class="contact-item">
      ${iconEmail()} ${d.email}
    </a>
    <a href="tel:${d.phone.replace(/\s/g,"")}" class="contact-item">
      ${iconPhone()} ${d.phone}
    </a>
    <a href="${d.linkedin}" target="_blank" class="contact-item">
      ${iconLinkedIn()} linkedin.com/in/mayuresh-patil
    </a>
    <div class="contact-item" style="cursor:default;">
      ${iconPin()} ${d.location}
    </div>`;

  /* SKILLS */
  const skillsLayout = document.querySelector(".skills-layout");
  skillsLayout.innerHTML = "";
  d.skillPanels.forEach(panel => {
    let inner = "";
    if (panel.bars) {
      inner = panel.bars.map(b => `
        <div class="sbar">
          <div class="sbar-top">
            <span class="sbar-name">${b.name}</span>
            <span class="sbar-pct">${b.pct}%</span>
          </div>
          <div class="sbar-track">
            <div class="sbar-fill ${panel.fillClass}" data-w="${b.pct}"></div>
          </div>
        </div>`).join("");
    } else {
      inner = `<div class="tools-row">${
        panel.tools.map(t => `<span class="tool">${t}</span>`).join("")
      }</div>`;
    }
    skillsLayout.insertAdjacentHTML("beforeend", `
      <div class="skill-panel">
        <div class="skill-panel-head">
          <div class="skill-panel-icon ${panel.iconClass}">${panel.icon}</div>
          <span class="skill-panel-title">${panel.title}</span>
        </div>
        ${inner}
      </div>`);
  });

  /* EXPERIENCE */
  const expTl = document.querySelector(".tl-experience");
  d.experience.forEach(e => {
    expTl.insertAdjacentHTML("beforeend", `
      <div class="tl-item">
        <div class="tl-node"></div>
        <div class="tl-date">${e.date}</div>
        <div class="tl-card">
          <div class="tl-title">
            ${e.title}
            <span class="badge ${e.badge.cls}">${e.badge.text}</span>
          </div>
          <div class="tl-org"><strong>${e.org}</strong> &nbsp;·&nbsp; ${e.loc}</div>
          ${e.points ? `<ul class="tl-points">
            ${e.points.map(p => `<li>${p}</li>`).join("")}
          </ul>` : ""}
        </div>
      </div>`);
  });

  /* EDUCATION */
  const eduTl = document.querySelector(".tl-education");
  d.education.forEach(e => {
    eduTl.insertAdjacentHTML("beforeend", `
      <div class="tl-item">
        <div class="tl-node nd-teal"></div>
        <div class="tl-date d-teal">${e.date}</div>
        <div class="tl-card">
          <div class="tl-title">
            ${e.degree}
            <span class="badge ${e.badge.cls}">${e.badge.text}</span>
          </div>
          <div class="tl-org"><strong>${e.org}</strong> &nbsp;·&nbsp; ${e.loc}</div>
          ${e.note ? `<div class="cgpa">${e.note}</div>` : ""}
        </div>
      </div>`);
  });

  /* PROJECTS */
  const projGrid = document.querySelector(".proj-grid");
  d.projects.forEach((p, i) => {
    projGrid.insertAdjacentHTML("beforeend", `
      <div class="proj-card ${p.cls} reveal reveal-delay-${i + 1}">
        <div class="proj-idx">PROJECT · ${p.num}</div>
        <span class="proj-icon">${p.icon}</span>
        <div class="proj-title">${p.title}</div>
        <p class="proj-desc">${p.desc}</p>
        <div class="proj-tags">
          ${p.tags.map(t => `<span class="ptag">${t}</span>`).join("")}
        </div>
      </div>`);
  });

  /* CERTIFICATES — gallery with lightbox */
  const certGallery = document.querySelector(".cert-gallery");
  d.certificates.forEach((c, i) => {
    const card = document.createElement("div");
    card.className = "cert-gallery-card reveal";
    card.dataset.index = i;
    card.innerHTML = `
      <div class="cert-thumb-wrap">
        <img src="${c.image}" alt="${c.name} Certificate" loading="lazy" />
        <div class="cert-thumb-overlay">
          <div class="cert-view-btn">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            View Certificate
          </div>
        </div>
      </div>
      <div class="cert-gallery-info">
        <div class="cert-gallery-name">${c.name}</div>
        <div class="cert-gallery-issuer">${c.issuer}</div>
      </div>`;
    card.addEventListener("click", () => openLightbox(i));
    certGallery.appendChild(card);
  });

  /* LANGUAGES */
  const langRow = document.querySelector(".lang-row");
  d.languages.forEach(l => {
    langRow.insertAdjacentHTML("beforeend", `
      <div class="lang-pill">
        <span class="lang-n">${l.name}</span>
        <span class="lang-lvl">${l.level}</span>
      </div>`);
  });

  /* HOBBIES */
  const hobbyRow = document.querySelector(".hobby-row");
  d.hobbies.forEach(h => {
    hobbyRow.insertAdjacentHTML("beforeend", `
      <div class="hobby-pill">${h.icon}&nbsp; ${h.name}</div>`);
  });

  /* CONTACT SECTION */
  document.querySelector(".contact-email-link").href = `mailto:${d.email}`;
  document.querySelector(".contact-linkedin-link").href = d.linkedin;
  document.querySelector(".contact-phone-link").href = `tel:${d.phone.replace(/\s/g,"")}`;
  document.querySelector(".contact-phone-link").textContent = d.phone;

  /* FOOTER */
  document.querySelector(".footer-name").textContent = `© ${new Date().getFullYear()} ${d.name}`;
  document.querySelector(".footer-loc").textContent = d.location;
}

/* ── Scroll progress bar ── */
function initScrollProgress() {
  const prog = document.getElementById("prog");
  window.addEventListener("scroll", () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    prog.style.width = pct + "%";
  });
}

/* ── Scroll reveal ── */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("vis"), i * 60);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

/* ── Skill bar fill animation ── */
function initSkillBars() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll(".sbar-fill").forEach(b => {
          b.style.width = b.dataset.w + "%";
        });
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll(".skill-panel").forEach(el => obs.observe(el));
}

/* ── SVG Icon helpers ── */
function iconEmail() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>`;
}
function iconPhone() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.16h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6 6z"/>
  </svg>`;
}
function iconLinkedIn() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>`;
}
function iconPin() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>`;
}

/* ============================================================
   LIGHTBOX — Certificate viewer
   ============================================================ */
let lbIndex = 0;
const certs  = () => PORTFOLIO_DATA.certificates;

function buildLightbox() {
  const lb = document.createElement("div");
  lb.className = "lightbox-overlay";
  lb.id = "lightbox";
  lb.innerHTML = `
    <div class="lightbox-box">
      <button class="lightbox-arrow prev" id="lb-prev">&#8592;</button>
      <button class="lightbox-arrow next" id="lb-next">&#8594;</button>
      <div class="lightbox-img-wrap">
        <img id="lb-img" src="" alt="" />
      </div>
      <div class="lightbox-footer">
        <div>
          <div class="lightbox-title" id="lb-title"></div>
          <div class="lightbox-subtitle" id="lb-sub"></div>
        </div>
        <button class="lightbox-close" id="lb-close">&#x2715;</button>
      </div>
      <div class="lightbox-dots" id="lb-dots"></div>
    </div>`;
  document.body.appendChild(lb);

  /* Build dots */
  const dotsWrap = lb.querySelector("#lb-dots");
  certs().forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "lb-dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => setLightbox(i));
    dotsWrap.appendChild(dot);
  });

  /* Controls */
  lb.querySelector("#lb-close").addEventListener("click", closeLightbox);
  lb.querySelector("#lb-prev").addEventListener("click", () => setLightbox((lbIndex - 1 + certs().length) % certs().length));
  lb.querySelector("#lb-next").addEventListener("click", () => setLightbox((lbIndex + 1) % certs().length));
  lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });

  /* Keyboard nav */
  document.addEventListener("keydown", e => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape")     closeLightbox();
    if (e.key === "ArrowLeft")  setLightbox((lbIndex - 1 + certs().length) % certs().length);
    if (e.key === "ArrowRight") setLightbox((lbIndex + 1) % certs().length);
  });
}

function setLightbox(i) {
  lbIndex = i;
  const c = certs()[i];
  document.getElementById("lb-img").src   = c.image;
  document.getElementById("lb-img").alt   = c.name + " Certificate";
  document.getElementById("lb-title").textContent = c.name;
  document.getElementById("lb-sub").textContent   = c.issuer;
  document.querySelectorAll(".lb-dot").forEach((d, idx) =>
    d.classList.toggle("active", idx === i));
}

function openLightbox(i) {
  setLightbox(i);
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

buildLightbox();
