const emailSubscribe = (preventForm) => {
    preventForm.preventDefault();
    let email = document.querySelector("#email").value;
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "text/plain, application/json",
      },
        body: JSON.stringify({
            email: email,
        }),
    })
      .then((response) => response.json())
      .then((formData) => console.log(formData))
      .catch((error) => console.log(error));
  };
  document.querySelector("#cta-form").addEventListener("submit", emailSubscribe);