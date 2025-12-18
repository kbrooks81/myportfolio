/* Projects renderer + filter tabs for #work section */

(function () {
  const PROJECTS = [
    // ===== Featured =====
    {
      title: "MealsToGo",
      category: "react-native",
      featured: true,
      impact: "React Native app for location-based restaurant discovery using search + maps.",
      tech: ["Expo", "TypeScript", "Context API", "Maps", "Places"],
      thumbnail: "assets/projects/MealsToGo/mealstogo-main-thumbnail.png",
      repoUrl: "https://github.com/kbrooks81/MealsToGo",
      caseStudyUrl: "case-studies/mealstogo_info.html",
      demoUrl: "https://youtu.be/1S6dHtgNBdI?si=74WgtBta-7ICdLft"
    },
    {
      title: "e2875 Dashboard",
      category: "power-bi",
      featured: true,
      impact: "Interactive operational dashboard with a modeled dataset and DAX measures.",
      tech: ["Power BI", "DAX", "Power Query", "Data Modeling"],
      thumbnail: "assets/projects/e2875-dashboard/e2875-dashboard-thumbnail.png",
      repoUrl: "",
      caseStudyUrl: "case-studies/e2875_dashboard_info.html",
      demoUrl: ""
    },
    {
      title: "Course Registration System",
      category: "other",
      featured: true,
      impact: "Java project simulating a course registration workflow with clear CLI and flows.",
      tech: ["Java", "CLI"],
      thumbnail: "assets/projects/CRS/crs-main-thumbnail.PNG",
      repoUrl: "https://github.com/kbrooks81/Course-Registration-System",
      caseStudyUrl: "case-studies/course_registration_system_info.html",
      demoUrl: ""
    },

    // ===== All Projects =====
    {
      title: "Test Driven Development",
      category: "other",
      featured: false,
      impact: "TDD-focused project documenting approach and workflow.",
      tech: ["Python", "Django", "TDD"],
      thumbnail: "assets/projects/TDD/tdd-main-thumbnail.png",
      repoUrl: "https://github.com/kbrooks81/ITEC4365_FP_krisbrooks",
      caseStudyUrl: "case-studies/tdd_info.html",
      demoUrl: ""
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
    const repoLink = p.repoUrl
      ? `<a href="${esc(p.repoUrl)}" target="_blank" rel="noopener">Repo</a>`
      : "";

    const caseStudyLink = p.caseStudyUrl
      ? `<a href="${esc(p.caseStudyUrl)}">Case Study</a>`
      : "";

    const demoLink = p.demoUrl
      ? `<a href="${esc(p.demoUrl)}" target="_blank" rel="noopener">Demo</a>`
      : "";

    return `
      <div class="projects__card" data-category="${esc(p.category)}">
        <a href="${esc(p.caseStudyUrl)}" class="portfolio__item projects__card-link">
          <div class="projects__thumb">
            <img src="${esc(p.thumbnail)}" alt="${esc(p.title)}" class="projects__img">
          </div>
          <h3>${esc(p.title)}</h3>
        </a>

        <p class="projects__impact">${esc(p.impact)}</p>
        <div class="projects__chips" aria-label="Tech stack">${chips}</div>

        <div class="projects__links">
          ${repoLink}
          ${caseStudyLink}
          ${demoLink}
        </div>
      </div>
    `;
  }

  function render() {
    const featured = PROJECTS.filter(p => p.featured);
    featuredEl.innerHTML = featured.map(card).join("");
    gridEl.innerHTML = PROJECTS.map(card).join("");
    //gridEl.innerHTML = PROJECTS.filter(p => !p.featured).map(card).join("");
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
