const title = document.getElementById("title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const itemLocation = document.getElementById("location");
const imageUrl = document.getElementById("image-url");
const warrningMessage = document.getElementById("warning-message");
const button = document.getElementById("button");
const buttonHome = document.getElementById("button-home");

const condition = document.getElementById("condition");
const yearsUsed = document.getElementById("years-used");
const originalPackaging = document.getElementById("original-packaging");
const additionalInfo = document.getElementById("additional-info");

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
    return (warrningMessage.innerText =
      "Please fill out all the required fields");
  }
  if (numberRegex.test(price.value) == false) {
    warrningMessage.style.color = "Maroon";
    return (warrningMessage.innerText = "Your price must be numbers only!");
  }
  if (imageUrlRegex.test(imageUrl.value) == false) {
    warrningMessage.style.color = "Maroon";
    return (warrningMessage.innerText = "Your image adress is incorrect!");
  }
  if (
    numberRegex.test(yearsUsed.value) == false &&
    yearsUsed.value !== "" &&
    yearsUsed.value !== "-------"
  ) {
    warrningMessage.style.color = "Maroon";
    return (warrningMessage.innerText = "Years must be numbers only!");
  }
  if (yearsUsed.value == "") {
    yearsUsed.value = "-------";
  } else {
    yearsUsed.value = parseFloat(yearsUsed.value).toFixed(1);
  }
  if (condition.value == "") {
    condition.value = "-------";
  }
  if (originalPackaging.value == "") {
    originalPackaging.value = "-------";
  }
  if (additionalInfo.value == "") {
    additionalInfo.value = "-------";
  }
  data = {
    title: title.value,
    description: description.value,
    price: parseFloat(price.value).toFixed(2),
    itemLocation: itemLocation.value,
    imageUrl: imageUrl.value,
    condition: condition.value,
    yearsUsed: yearsUsed.value,
    originalPackaging: originalPackaging.value,
    additionalInfo: additionalInfo.value,
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
      (condition.value = ""),
        (description.value = ""),
        (yearsUsed.value = ""),
        (originalPackaging.value = ""),
        (additionalInfo.value = "");
    }, 1000);
  }
  console.log(data);
};
button.addEventListener("click", (event) => {
  event.preventDefault();
  createRecipes();
});

buttonHome.addEventListener("click", () => {
  window.location.replace("../index.html");
});
