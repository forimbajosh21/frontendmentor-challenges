var button = document.getElementById("share");
var shareContent = document.getElementById("share-content");

button.addEventListener("click", function (self) {
  if (
    button.classList.contains("active") &&
    shareContent.classList.contains("visible")
  ) {
    button.classList.remove("active");
    shareContent.classList.remove("visible");
  } else {
    button.classList.add("active");
    shareContent.classList.add("visible");
  }
});
