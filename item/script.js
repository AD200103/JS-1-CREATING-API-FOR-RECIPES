const url = new URL(window.location.href);
const id = url.searchParams.get("id");
const buttonDelete = document.getElementById("delete-button");
const buttonHome = document.getElementById("button-home");
const contentWrapper = document.getElementById("content-wrapper");

const getItems = async () => {
  const response = await fetch(
    `https://66f0921df2a8bce81be63552.mockapi.io/item/${id}`
  );
  const data = await response.json();
  return data;
};

const createItem = async (itemInfo) => {
  const condition = document.createElement("h2");
  const yearsUsed = document.createElement("h2");
  const originalPackaging = document.createElement("p");
  const additionalInfo = document.createElement("p");
  const title = document.createElement("h1");
  const price = document.createElement("p");
  const image = document.createElement("img");
  image.setAttribute("class", "img-class");
  const infoCard = document.createElement("div");
  infoCard.setAttribute("class", "info-card");
  const infoCardAndImage = document.createElement("div");
  infoCardAndImage.setAttribute("class", "info-card-and-image");
  additionalInfo.setAttribute("class", "additional-info");

  condition.innerText = "Condition: " + itemInfo.condition;
  yearsUsed.innerText = "Years used: " + itemInfo.yearsUsed;
  originalPackaging.innerText =
    "Original packaging: " + itemInfo.originalPackaging;
  additionalInfo.innerText = "Additional info: " + itemInfo.additionalInfo;
  title.textContent = itemInfo.title;
  price.textContent = "Price: " + itemInfo.price + " €";
  image.src = itemInfo.imageUrl;

  infoCard.append(
    price,
    condition,
    yearsUsed,
    originalPackaging,
    additionalInfo
  );
  infoCardAndImage.append(image, infoCard);
  contentWrapper.append(title, infoCardAndImage);
};

const deleteItems = async () => {
  const response = await fetch(
    `https://66f0921df2a8bce81be63552.mockapi.io/item/${id}`,
    { method: "DELETE" }
  );
  return response;
};

const initPage = async () => {
  const itemInfo = await getItems();
  createItem(itemInfo);
  console.log(itemInfo);
};

initPage();

buttonDelete.setAttribute("class", "button-delete");

buttonDelete.addEventListener("click", async () => {
  const response = await deleteItems();
  if (response.status == 200) {
    console.log("Deleted succesfully!");
  }
});
buttonHome.addEventListener("click", () => {
  window.location.replace("../index.html");
});
