/* Projects renderer + filter tabs for #work section */

(function () {
  const PROJECTS = [
    // ===== Featured =====
    {
      title: "MealToGo",
      category: "react-native",
      featured: true,
      impact: "React Native app for location-based restaurant discovery using search + maps.",
      tech: ["Expo", "TypeScript", "Context API", "Maps", "Places"],
      thumbnail: "images/devthekrisbrooks1.png",
      repoUrl: "https://github.com/kbrooks81",
      caseStudyUrl: "mealtogo_info.html",
      demoUrl: "https://github.com/kbrooks81"
    },
    {
      title: "Power BI Dashboard",
      category: "power-bi",
      featured: true,
      impact: "Interactive operational dashboard with a modeled dataset and DAX measures.",
      tech: ["Power BI", "DAX", "Power Query", "Data Modeling"],
      thumbnail: "images/devthekrisbrooks1.png",
      repoUrl: "https://github.com/kbrooks81",
      caseStudyUrl: "powerbi_dashboard_info.html",
      demoUrl: "https://github.com/kbrooks81"
    },
    {
      title: "Course Registration System",
      category: "web",
      featured: true,
      impact: "Web project simulating a course registration workflow with clear UI and flows.",
      tech: ["HTML", "CSS", "JavaScript"],
      thumbnail: "images/CRS_1.PNG",
      repoUrl: "https://github.com/kbrooks81/myportfolio",
      caseStudyUrl: "course_registration_system_info.html",
      demoUrl: "course_registration_system_info.html"
    },

    // ===== All Projects =====
    {
      title: "Arithmetic Formatter",
      category: "web",
      featured: false,
      impact: "Formats arithmetic problems into clean, readable output (practice project).",
      tech: ["HTML", "CSS", "JavaScript"],
      thumbnail: "images/arithmetic_format.jpg",
      repoUrl: "https://github.com/kbrooks81/myportfolio",
      caseStudyUrl: "arithmetic_formatter_info.html",
      demoUrl: "arithmetic_formatter_info.html"
    },
    {
      title: "Time Calculator",
      category: "web",
      featured: false,
      impact: "Adds durations to start times and returns normalized results.",
      tech: ["HTML", "CSS", "JavaScript"],
      thumbnail: "images/time_cal.jpg",
      repoUrl: "https://github.com/kbrooks81/myportfolio",
      caseStudyUrl: "time_calculator_info.html",
      demoUrl: "time_calculator_info.html"
    },
    {
      title: "Budget App",
      category: "web",
      featured: false,
      impact: "Simple budgeting experience that tracks entries and totals.",
      tech: ["HTML", "CSS", "JavaScript"],
      thumbnail: "images/budget_app.jpg",
      repoUrl: "https://github.com/kbrooks81/myportfolio",
      caseStudyUrl: "budget_app_info.html",
      demoUrl: "budget_app_info.html"
    },
    {
      title: "Survey Form",
      category: "web",
      featured: false,
      impact: "Responsive survey form with structured inputs and styling.",
      tech: ["HTML", "CSS"],
      thumbnail: "images/GaGa's_Goodies_test.PNG",
      repoUrl: "https://github.com/kbrooks81/myportfolio",
      caseStudyUrl: "survey_form_info.html",
      demoUrl: "survey_form_info.html"
    },
    {
      title: "Tribute Page",
      category: "web",
      featured: false,
      impact: "Single-page tribute layout with typography and media.",
      tech: ["HTML", "CSS"],
      thumbnail: "images/Deep_Souths_Oldest_Rivalry_test.PNG",
      repoUrl: "https://github.com/kbrooks81/myportfolio",
      caseStudyUrl: "tribute_page_info.html",
      demoUrl: "tribute_page_info.html"
    },
    {
      title: "Test Driven Development",
      category: "other",
      featured: false,
      impact: "TDD-focused project documenting approach and workflow.",
      tech: ["TDD", "Testing"],
      thumbnail: "images/TDD_1.PNG",
      repoUrl: "https://github.com/kbrooks81/myportfolio",
      caseStudyUrl: "tdd_info.html",
      demoUrl: "tdd_info.html"
    }
  ];

  const featuredEl = document.getElementById("featuredProjects");
  const gridEl = document.getElementById("projectsGrid");
  const filterButtons = document.querySelectorAll(".projects__filter");

  if (!featuredEl || !gridEl) return;

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  }[c]));

  function card(p) {
    const chips = (p.tech || []).slice(0, 6).map(t => `<span class="projects__chip">${esc(t)}</span>`).join("");
    return `
      <div class="projects__card" data-category="${esc(p.category)}">
        <a href="${esc(p.caseStudyUrl)}" class="portfolio__item projects__card-link">
          <img src="${esc(p.thumbnail)}" alt="${esc(p.title)}" class="portfolio__img projects__img">
          <h3>${esc(p.title)}</h3>
        </a>
        <p class="projects__impact">${esc(p.impact)}</p>
        <div class="projects__chips" aria-label="Tech stack">${chips}</div>
        <div class="projects__links">
          <a href="${esc(p.repoUrl)}" target="_blank" rel="noopener">Repo</a>
          <a href="${esc(p.caseStudyUrl)}">Case Study</a>
          <a href="${esc(p.demoUrl)}" target="_blank" rel="noopener">Demo</a>
        </div>
      </div>
    `;
  }

  function render() {
    const featured = PROJECTS.filter(p => p.featured);
    featuredEl.innerHTML = featured.map(card).join("");
    gridEl.innerHTML = PROJECTS.map(card).join("");
  }

  function setFilter(cat) {
    filterButtons.forEach(b => b.classList.toggle("is-active", b.dataset.filter === cat));
    gridEl.querySelectorAll(".projects__card").forEach((el) => {
      const match = cat === "all" || el.getAttribute("data-category") === cat;
      el.style.display = match ? "" : "none";
    });
  }

  filterButtons.forEach((btn) => btn.addEventListener("click", () => setFilter(btn.dataset.filter)));

  render();
  setFilter("all");
})();
