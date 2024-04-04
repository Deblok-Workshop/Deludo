import dotted from "$lib/dotted.svg"

let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let currentDraggable:any = null;
console.log(dotted)
export default () => {
    document.querySelector(".bgDotContainer").style.backgroundImage = `url(${dotted})`;
    const draggables = document.querySelectorAll('.draggable');
    function startDragging(e:any) {

        console.log(e.target.classList)
        if (isDragging) {return}
        if (!e.target.classList.contains("draggable")) {return}
        e.target.classList.add("dragging")
        e.preventDefault()
        
        isDragging = true;
        currentDraggable = e.target;

        if (!currentDraggable) return;
// @ts-ignore
document.querySelector(".bgDotContainer").style.opacity = "0.5";
        offsetX = e.clientX - currentDraggable.getBoundingClientRect().left;
        offsetY = e.clientY - currentDraggable.getBoundingClientRect().top;
    }


    function drag(e:any) {
        
        if (!isDragging || !currentDraggable)  {
            try {
            e.target.classList.remove("dragging")
            if (e.target.classList.contains("draggable") ) {
                document.querySelector(".bgDotContainer").style.opacity = "0.12";
            }
            } catch {return;}
            return;
        }
        if (isDragging) {
            document.querySelector(".bgDotContainer").style.opacity = "0.5";
        }
        currentDraggable.style.transform = `translate(${e.clientX - offsetX}px, ${e.clientY - offsetY}px)`;
    }

    function stopDragging(e:any) {
        // if (!e.target.classList.contains("draggable")) {return}
// @ts-ignore
document.querySelector(".bgDotContainer").style.opacity = "0"
        if (!isDragging) {return}
        
        isDragging = false;
        e.target.classList.remove("dragging")
    }

    draggables.forEach(draggable => {
        draggable.addEventListener('mousedown', startDragging);
        draggable.addEventListener('mouseup', stopDragging);
        draggable.addEventListener('mousemove', drag);
    });
    setInterval(()=>{
        if (!isDragging){
        document.querySelector(".bgDotContainer").style.opacity = "0";
        } else {
            document.querySelector(".bgDotContainer").style.opacity = "0.5";
        }
    },500)
}
