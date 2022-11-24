const getExternalAPiInfo = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => {
        let externalApiInfo = "";
        let projectTitle = "";
        res.forEach((post) => {
          externalApiInfo += `
                </div>
                    <div class="project-item">
                    <img src="/assets/projects-section/1.jpg" alt="Project Image">
                    <h3 class="dark-grey project-title">${post.title}</h3>
                    <p class="dark-grey project-description">Best App/Web Ever</p>
                    <a class="dark-blue" href="/projecttemplate.html">Learn More</a>
            </div>
                `;
            projectTitle += `${post.title}`;
        });
  
          document.querySelector(".output").innerHTML += externalApiInfo;
          document.querySelector(".project-title").innerHTML += projectTitle;
      })
      .catch((error) => console.log(error));
  };
window.addEventListener("load", getExternalAPiInfo);

for (let i = 0; i < 3; i++){

}