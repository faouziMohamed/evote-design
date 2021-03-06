const input = document.querySelector(".checkbox-input");
const ul = document.querySelector(".list");
ul.classList.add("hidden");
input.checked = false;
input.addEventListener("change", () => {
  ul.classList.toggle("hidden");
});

const media = window.matchMedia("(min-width: 780px)");
const listenMedia = (x) => {
  input.checked = false;
  if (x.matches) {
    ul.classList.remove("hidden");
  } else {
    ul.classList.add("hidden");
  }
};
media.addEventListener("change", listenMedia);
listenMedia(media);
