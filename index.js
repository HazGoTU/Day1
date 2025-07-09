const container = document.getElementsByClassName("container")[0];
const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

container.style.display = "flex";
container.style.flexDirection = "column";

function toggleDirection() {
  if (container.style.flexDirection === "column") {
    container.style.flexDirection = "row";
    container.style.width = "1140px";
    container.style.height = "800px";
    container.style.gap = "150px";
    container.style.padding = "0 100px 0 100px";
    container.style.alignItems = "center";
    document.getElementsByClassName("Text")[0].style.margin = "0";
    document.getElementsByClassName("imgProfile")[0].style.width = "300px";
    document.getElementsByClassName("imgProfile")[0].style.height = "350px";
    document.getElementsByClassName("Social")[0].style.transform = "translate(0,0)";
    document.getElementsByClassName("container2")[0].style.flexDirection = "row";
    toggleBtn.textContent = "Switch to Row";
  } else {
    container.style.flexDirection = "column";
    container.style.width = "1020px";
    container.style.height = "800px";
    container.style.gap = "10px";
    container.style.padding = "0";
    container.style.alignItems = initialStyles.alignItems;
    document.getElementsByClassName("Text")[0].style.margin = initialStyles.textMargin;
    document.getElementsByClassName("imgProfile")[0].style.width = "250px";
    document.getElementsByClassName("imgProfile")[0].style.height = "300px";
    document.getElementsByClassName("Social")[0].style.transform = initialStyles.socialTransform;
    document.getElementsByClassName("container2")[0].style.flexDirection = initialStyles.container2FlexDirection;
    toggleBtn.textContent = "Switch to Column";
  }
}
