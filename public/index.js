function phase1 () {
  const url = `https://api.thecatapi.com/v1/images/search?size=small`;
const api_key = "live_Pjduceybc0Imt4V1bZKxGWnpJ5Z5t3MN9tJ28wR8aHYXAfDpjG95JmjXuFsmPLa5";

fetch(url, {
  headers: {
    "x-api-key": api_key,
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let imagesData = data;
    imagesData.map(function (imageData) {
      let newElem = document.createElement("div");
      newElem.id = "grid";
      document.body.appendChild(newElem);
      let heading = document.createElement("h1");
      heading.textContent = "Kitten Pic";
      heading.classList.add("heading");
      document.getElementById("grid").appendChild(heading);
      let image = document.createElement("img");
      //use the url from the image object
      image.src = `${imageData.url}`;

      let gridCell = document.createElement("div");
      gridCell.classList.add("col");
      gridCell.classList.add("col-lg");
      gridCell.appendChild(image);

      document.getElementById("grid").appendChild(gridCell);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
}

window.onload = () => {
  phase1();
}
