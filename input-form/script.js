const title = document.getElementById("title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const itemLocation = document.getElementById("location");
const imageUrl = document.getElementById("image-url");
const warrningMessage = document.getElementById("warning-message");
const button = document.getElementById("button");
const buttonHome = document.getElementById("button-home");

const createRecipes = async () => {
  const numberRegex = /^\d+(\.\d+)?$/;
  const imageUrlRegex =
    /https?:\/\/(?:www\.)?[^\s\/]+\/[^\s]+\.(?:jpg|jpeg|png|gif|bmp|webp|svg)(?:\?.*)?$/;

  if (
    title.value == "" ||
    description.value == "" ||
    price.value == "" ||
    itemLocation.value == "" ||
    imageUrl.value == ""
  ) {
    warrningMessage.style.color = "Maroon";
    return (warrningMessage.innerText = "Please fill out all the fields");
  }
  if (numberRegex.test(price.value) == false) {
    warrningMessage.style.color = "Maroon";
    return (warrningMessage.innerText = "Your price must be numbers only!");
  }
  if (imageUrlRegex.test(imageUrl.value) == false) {
    warrningMessage.style.color = "Maroon";
    return (warrningMessage.innerText = "Your image adress is incorrect!");
  } else {
    data = {
      title: title.value,
      description: description.value,
      price: parseFloat(price.value).toFixed(2),
      itemLocation: itemLocation.value,
      imageUrl: imageUrl.value,
    };

    const response = await fetch(
      "https://66f0921df2a8bce81be63552.mockapi.io/item",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    console.log(response);
    if (response.status === 201) {
      setTimeout(() => {
        warrningMessage.style.color = "DarkOliveGreen";
        warrningMessage.innerText = "Item was added succesfuly!";
        (title.value = ""),
          (description.value = ""),
          (price.value = ""),
          (itemLocation.value = ""),
          (imageUrl.value = "");
      }, 1000);
    }
    console.log(data);
  }
};

button.addEventListener("click", (event) => {
  event.preventDefault();
  createRecipes();
});

buttonHome.addEventListener("click", () => {
  window.location.replace("../index.html");
});
