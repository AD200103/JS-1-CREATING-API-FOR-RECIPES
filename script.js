const itemCardWrapper = document.getElementById("item-card-wrapper");
const buttonForm = document.getElementById("add-item-btn");

const gettingCards = async () => {
  const response = await fetch(
    "https://66f0921df2a8bce81be63552.mockapi.io/item"
  );
  const data = await response.json();
  return data;
};

const createCards = (generatedCards) => {
  generatedCards.sort((a, b) => a.price - b.price);
  generatedCards.forEach((item) => {
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const price = document.createElement("h2");
    const moreBtn = document.createElement("a");
    const itemLocation = document.createElement("p");
    const image = document.createElement("img");
    const textCard = document.createElement("div");
    const imageTextCard = document.createElement("div");
    const itemCard = document.createElement("div");

    title.textContent = item.title;
    description.textContent = item.description;
    price.textContent = "Price: " + item.price + " €";
    itemLocation.textContent = "Location: " + item.itemLocation;
    image.src = item.imageUrl;
    moreBtn.textContent = "More info >>";
    moreBtn.href = `./item/index.html?id=${item.id}`;

    imageTextCard.setAttribute("class", "image-text-card");
    itemCard.setAttribute("class", "item-card");
    textCard.setAttribute("class", "text-cards");
    moreBtn.setAttribute("class", "more-btn");
    image.setAttribute("class", "item-img");

    textCard.append(title, description, price, itemLocation);
    imageTextCard.append(image, textCard);
    itemCard.append(imageTextCard, moreBtn);
    itemCardWrapper.append(itemCard);
  });
};

const startApp = async () => {
  const generatedCards = await gettingCards();
  createCards(generatedCards);
};
startApp();

buttonForm.addEventListener("click", () => {
  window.location.replace("./input-form/index.html");
});
