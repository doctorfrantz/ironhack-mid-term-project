
  const addPost = (preventForm) => {
    preventForm.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let textarea = document.querySelector("#text").value;
      
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "text/plain, application/json",
      },
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            text: textarea
        }),
    })
      .then((response) => response.json())
      .then((formData) => console.log(formData))
      .catch((error) => console.log(error));
  };
  document.querySelector("#form").addEventListener("submit", addPost);
  