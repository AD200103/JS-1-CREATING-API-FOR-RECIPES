const divWrapper = document.getElementById("card-wrapper");
const buttonform = document.getElementById("button-form");

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
    const itemCard = document.createElement("div");
    itemCard.setAttribute("class", "created-cards");
    const textCard = document.createElement("div");
    textCard.setAttribute("class", "text-cards");
    const imageTextCard = document.createElement("div");
    imageTextCard.setAttribute("class", "image-text-card");

    const moreBtn = document.createElement("a");
    moreBtn.innerText = "More info >>";
    moreBtn.href = `./item/index.html?id=${item.id}`;
    moreBtn.setAttribute("class", "more-btn");

    const title = document.createElement("h2");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const itemLocation = document.createElement("p");
    const image = document.createElement("img");
    image.setAttribute("class", "img-class");

    title.textContent = item.title;
    description.textContent = item.description;
    price.textContent = "Price: " + item.price + " €";
    itemLocation.textContent = "Location: " + item.itemLocation;
    image.src = item.imageUrl;

    textCard.append(title, description, price, itemLocation);
    imageTextCard.append(image, textCard);
    itemCard.append(imageTextCard, moreBtn);
    divWrapper.append(itemCard);
  });
};

const startApp = async () => {
  const generatedCards = await gettingCards();
  console.log(generatedCards);
  createCards(generatedCards);
};
startApp();

buttonform.addEventListener("click", () => {
  window.location.replace("./input-form/index.html");
});
