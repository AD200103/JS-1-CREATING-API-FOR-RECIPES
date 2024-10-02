const url = new URL(window.location.href);
const id = url.searchParams.get("id");
const buttonDelete = document.getElementById("delete-button");
const buttonHome = document.getElementById("button-home");

const getItems = async () => {
  const response = await fetch(
    `https://66f0921df2a8bce81be63552.mockapi.io/item/${id}`
  );
  const data = await response.json();
  console.log(data);
};

const deleteItems = async () => {
  const response = await fetch(
    `https://66f0921df2a8bce81be63552.mockapi.io/item/${id}`,
    { method: "DELETE" }
  );
  return response;
};

const initPage = () => {
  getItems();
};

initPage();

buttonDelete.addEventListener("click", async () => {
  const response = await deleteItems();
  if (response.status == 200) {
    console.log("Deleted succesfully!");
  }
});
buttonHome.addEventListener("click", () => {
  window.location.replace("../index.html");
});
