// ui.js

const preview = document.getElementById("preview");

// Render Portfolio Preview
function renderPortfolio(data) {
    if (!data.name) {
        preview.innerHTML = '<p class="text-gray-500">Your portfolio will appear here...</p>';
        return;
    }

    preview.innerHTML = `
    <div class="text-center">
      <h1 class="text-3xl font-bold mb-2">${data.name}</h1>
      <h2 class="text-xl text-gray-700 mb-3">${data.role}</h2>
      <p class="text-gray-600 mb-4">${data.about}</p>

      <h3 class="font-semibold mb-2">Skills:</h3>
      <div class="flex flex-wrap justify-center gap-2 mb-4">
        ${data.skills.map(skill => `<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">${skill}</span>`).join("")}
      </div>

      <h3 class="font-semibold mb-2">Projects:</h3>
      <ul class="mb-4">
        ${data.projects.map(p => `<li class="text-left mb-1"><strong>${p.name}:</strong> ${p.desc}</li>`).join("")}
      </ul>

      <div class="flex justify-center gap-4">
        ${data.linkedin ? `<a href="${data.linkedin}" target="_blank" class="text-blue-600 font-semibold">LinkedIn</a>` : ""}
        ${data.github ? `<a href="${data.github}" target="_blank" class="text-gray-800 font-semibold">GitHub</a>` : ""}
      </div>
    </div>
  `;
}
