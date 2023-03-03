const menu = document.querySelector("#ramen-menu");

const addRamen = (ramens) => {
  const image = document.createElement("img");
  image.alt = ramens.name
  image.src = ramens.image
  menu.append(image)
  image.addEventListener("click", (e) => {
    const detailImg = document.querySelector(".detail-image");
    const detailName = document.querySelector(".name");
    const detailRest = document.querySelector(".restaurant");
    const detailRating = document.querySelector("#rating-display");
    const detailComment = document.querySelector("#comment-display");
    detailImg.src = ramens.image;
    detailImg.alt = ramens.name;
    detailName.innerText = ramens.name;
    detailRest.innerText = ramens.restaurant;
    detailRating.innerText = ramens.rating;
    detailComment.innerText = ramens.comment;
  })
};

fetch("http://localhost:3000/ramens")
  .then((r) => r.json())
  .then((data) => {
    data.forEach(addRamen);
  })

document.querySelector("#new-ramen").addEventListener("submit", (e) => {
  e.preventDefault();
  const ramens = {
    name: e.target.name.value,
    image: e.target.image.value,
    restaurant: e.target.restaurant.value,
    rating: document.querySelector("#new-rating").value,
    comment: e.target["new-comment"].value,
  };

  addRamen(ramens)

  e.target.reset()
});