const portfolio = document.getElementById("portfolio");
const projectModal = document.getElementById("project-modal");
const projectDetails = document.getElementById("project-details");
const closeModal = document.getElementsByClassName("close")[0];

function displayModal(project) {
    projectDetails.innerHTML = `
      <h1>${project.title}</h1>
      <div>${marked(project.longDescription)}</div>
    `;
    document.getElementById("project-modal-link").href = project.url;
    projectModal.style.display = "block";
  }

closeModal.onclick = function () {
  projectModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === projectModal) {
    projectModal.style.display = "none";
  }
};

fetch("projects.json")
  .then((response) => response.json())
  .then((projects) => {
    const projectGrid = document.createElement("div");
    projectGrid.className = "project-grid";

    projects.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.className = "project";
      projectDiv.innerHTML = `
        <h1 class="project-title">${project.title}</h1>
        <p class="project-description">${project.shortDescription}</p>
      `;
      projectDiv.addEventListener("click", (event) => {
        if (event.target !== projectDiv.querySelector(".project-link")) {
          displayModal(project);
        }
      });

      projectGrid.appendChild(projectDiv);
    });

    portfolio.appendChild(projectGrid);
  });