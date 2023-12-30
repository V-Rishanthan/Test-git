const getData = () => {
  var btn = document.querySelector(".text");
};

const imageWrapper = document.querySelector(".images");
const searchInput = document.querySelector(".search input");
const loadMoreBtn = document.querySelector(".gallery .load-more");
const lightbox = document.querySelector(".lightbox");
const downloadImgBtn = lightbox.querySelector(".uil-import");
const closeImgBtn = lightbox.querySelector(".close-icon");

// API key, paginations, searchTerm variables
const apiKey = "OZoXF1txv5qnzNbpZ1kOgMCA48SiZ9bECnpgVeu1fcd4Phvx3Wpidjod ";
const perPage = 15;
let currentPage = 1;
let searchTerm = null;

const downloadImg = (imgUrl) => {
  // Converting received img to blob, creating its download link, & downloading it
  fetch(imgUrl)
    .then((res) => res.blob())
    .then((blob) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = new Date().getTime();
      a.click();
    })
    .catch(() => alert("Failed to download image!"));
};
