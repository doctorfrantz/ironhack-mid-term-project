const getExternalAPiLoremInfo = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => {
        let projectLorem = "";
          for (let i = 0; i < 1; i++) {
            projectLorem += `${res[i].title} ${res[i].body}`;
        }
        document.querySelector(".lorem-one").innerHTML += projectLorem;
      })
      .catch((error) => console.log(error));
  };
window.addEventListener("load", getExternalAPiLoremInfo);