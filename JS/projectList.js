const getExternalAPiInfo = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => {
        let externalApiInfo = "";
        let projectTitle = "";
        let projectLorem = "";
          for (let i = 0; i < 3; i++) {
                  externalApiInfo += `
                </div>
                    <div class="project-item">
                    <img src="/assets/projects-section/1.jpg" alt="Project Image">
                    <h3 class="dark-grey project-title">${res[i].title}</h3>
                    <p class="dark-grey project-description">Best App/Web Ever</p>
                    <a class="dark-blue" href="/projecttemplate.html">Learn More</a>
            </div>
                `;
                
          }
          for (let i = 0; i < 1; i++) {
              projectTitle += `${res[i].title}`;
          }
          for (let i = 0; i < 1; i++) {
            projectLorem += `${res[i].title} ${res[i].body}`;
        }
          document.querySelector(".other-projects").innerHTML += externalApiInfo;
        document.querySelector(".project-title").innerHTML += projectTitle;
        document.querySelector(".lorem-one").innerHTML += projectLorem;
      })
      .catch((error) => console.log(error));
  };
window.addEventListener("load", getExternalAPiInfo);