const title = document.getElementById("title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const itemLocation = document.getElementById("location");
const imageUrl = document.getElementById("image-url");
const warrningMessage = document.getElementById("warning-message");
const buttonAddItem = document.getElementById("button-add-item");
const buttonHome = document.getElementById("button-home");
const condition = document.getElementById("condition");
const yearsUsed = document.getElementById("years-used");
const originalPackaging = document.getElementById("original-packaging");
const additionalInfo = document.getElementById("additional-info");
warrningMessage.style.color = "Maroon";

const ifEmptyOptionalInputs = () => {
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
};

const itemAddedSuccesfully = () => {
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
};

const postingItemsToApi = async () => {
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

  if (response.status === 201) {
    itemAddedSuccesfully();
  }
};

const checkIfRequiredFieldsFilledOutCorrectly = () => {};

const createItems = async () => {
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
    return (warrningMessage.innerText =
      "Please fill out all the required fields");
  }
  if (numberRegex.test(price.value) == false) {
    return (warrningMessage.innerText = "Your price must be numbers only!");
  }
  if (imageUrlRegex.test(imageUrl.value) == false) {
    return (warrningMessage.innerText = "Your image adress is incorrect!");
  }
  if (
    numberRegex.test(yearsUsed.value) == false &&
    yearsUsed.value !== "" &&
    yearsUsed.value !== "-------"
  ) {
    return (warrningMessage.innerText = "Years must be numbers only!");
  }

  ifEmptyOptionalInputs();

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

  postingItemsToApi();
};

buttonAddItem.addEventListener("click", (event) => {
  event.preventDefault();
  createItems();
});

buttonHome.addEventListener("click", () => {
  window.location.replace("../index.html");
});
