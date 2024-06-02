import dotted from "$lib/dotted.svg";

let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let currentDraggable: any = null;
console.log(dotted);
export default () => {
  // @ts-ignore
  document.querySelector(".bgDotContainer").style.backgroundImage =
    `url(${dotted})`;
  const draggables = document.querySelectorAll(".draggable");
  function startDragging(e: any) {
    console.log(e.target.classList);
    if (isDragging) {
      return;
    }
    if (!e.target.classList.contains("draggable")) {
      return;
    }
    e.target.classList.add("dragging");
    e.preventDefault();

    isDragging = true;
    currentDraggable = e.target;

    if (!currentDraggable) return;
    // @ts-ignore
    document.querySelector(".bgDotContainer").style.opacity = "0.5";
    offsetX = e.clientX - currentDraggable.getBoundingClientRect().left - 60;
    offsetY = e.clientY - currentDraggable.getBoundingClientRect().top + 60;
  }

  function drag(e: any) {
    if (!isDragging || !currentDraggable) {
      try {
        e.target.classList.remove("dragging");
        if (e.target.classList.contains("draggable")) {
          // @ts-ignore
          document.querySelector(".bgDotContainer").style.opacity = "0.12";
        }
      } catch {
        return;
      }
      return;
    }
    if (isDragging) {
      // @ts-ignore
      document.querySelector(".bgDotContainer").style.opacity = "0.5";
    }
    currentDraggable.style.transform = `translate(${e.clientX - offsetX}px, ${e.clientY - offsetY}px)`;
  }

  function stopDragging(e: any) {
    // if (!e.target.classList.contains("draggable")) {return}
    // @ts-ignore
    document.querySelector(".bgDotContainer").style.opacity = "0";
    if (!isDragging) {
      return;
    }

    isDragging = false;
    offsetX = e.clientX - currentDraggable.getBoundingClientRect().left + 10;
    offsetY = e.clientY - currentDraggable.getBoundingClientRect().top;
    e.target.classList.remove("dragging");
  }

  draggables.forEach((draggable) => {
    draggable.addEventListener("mousedown", startDragging);
    draggable.addEventListener("mouseup", stopDragging);
    draggable.addEventListener("mouseleave", stopDragging);
    //  draggable.addEventListener('mouseout', stopDragging);
    draggable.addEventListener("mousemove", drag);
  });
  setInterval(() => {
    if (!isDragging) {
      // @ts-ignore
      document.querySelector(".bgDotContainer").style.opacity = "0";
    } else {
      // @ts-ignore
      document.querySelector(".bgDotContainer").style.opacity = "0.5";
    }
  }, 500);
};
