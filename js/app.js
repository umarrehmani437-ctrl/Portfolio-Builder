// app.js

// Elements
const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const aboutInput = document.getElementById("about");
const skillsInput = document.getElementById("skills");
const projectsInput = document.getElementById("projects");
const linkedinInput = document.getElementById("linkedin");
const githubInput = document.getElementById("github");

// Initialize from localStorage
const savedData = loadPortfolio();
if (savedData) {
    state.portfolioData = savedData;

    nameInput.value = savedData.name;
    roleInput.value = savedData.role;
    aboutInput.value = savedData.about;
    skillsInput.value = savedData.skills.join(", ");
    projectsInput.value = savedData.projects.map(p => `${p.name} - ${p.desc}`).join(", ");
    linkedinInput.value = savedData.linkedin || "";
    githubInput.value = savedData.github || "";
}

// Update portfolio data
function updatePortfolio() {
    const name = nameInput.value.trim();
    const role = roleInput.value.trim();
    const about = aboutInput.value.trim();
    const skills = skillsInput.value.split(",").map(s => s.trim()).filter(s => s);
    const projects = projectsInput.value.split(",").map(p => {
        const parts = p.split("-").map(x => x.trim());
        return parts[0] ? { name: parts[0], desc: parts[1] || "" } : null;
    }).filter(p => p);
    const linkedin = linkedinInput.value.trim();
    const github = githubInput.value.trim();

    state.portfolioData = { name, role, about, skills, projects, linkedin, github };
    savePortfolio(state.portfolioData);
    renderPortfolio(state.portfolioData);
}

// Live preview
[nameInput, roleInput, aboutInput, skillsInput, projectsInput, linkedinInput, githubInput].forEach(input => {
    input.addEventListener("input", updatePortfolio);
});

// Initial render
updatePortfolio();
