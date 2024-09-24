const title = document.getElementById("title");
const description = document.getElementById("description");
const instructions = document.getElementById("instructions");
const ingredients = document.getElementById("ingredients");
const imageUrl = document.getElementById("image-url");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  if (
    title.value == "" ||
    description.value == "" ||
    instructions.value == "" ||
    ingredients.value == "" ||
    imageUrl.value == ""
  ) {
    return console.log("Your input is incomplete");
  } else {
    data = {
      title: title.value,
      description: description.value,
      instructions: instructions.value,
      ingredients: ingredients.value,
      imageUrl: imageUrl.value,
    };
    fetch("https://66f0921df2a8bce81be63552.mockapi.io/Recipe", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(data);
    (title.value = ""),
      (description.value = ""),
      (instructions.value = ""),
      (ingredients.value = ""),
      (imageUrl.value = "");
  }
});
