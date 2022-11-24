
  const contactForm = (preventForm) => {
    preventForm.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let textarea = document.querySelector("#text").value;
    let formComfirmation = "";
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
      .then(() => {
        formComfirmation += `
                <h3 class="comfirmation">
                    Thank you for reaching us! We'll answer to you soon.
            </h3>
                `;
        document.querySelector(".success").innerHTML += formComfirmation;
      })
      .catch((error) => console.log(error));
  };
  document.querySelector("#form").addEventListener("submit", contactForm);
  
  