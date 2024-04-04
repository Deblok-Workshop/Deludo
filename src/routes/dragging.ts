let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let currentDraggable:any = null;

export default () => {
    const draggables = document.querySelectorAll('.draggable');
    function startDragging(e:any) {
        if (isDragging) {return}
        e.target.classList.add("dragging")
        e.preventDefault()
        isDragging = true;
        currentDraggable = e.target;

        if (!currentDraggable) return;

        offsetX = e.clientX - currentDraggable.getBoundingClientRect().left;
        offsetY = e.clientY - currentDraggable.getBoundingClientRect().top;

        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDragging);
    }


    function drag(e:any) {
        if (!isDragging || !currentDraggable)  {
            e.target.classList.remove("dragging")
            return;
        }

        currentDraggable.style.transform = `translate(${e.clientX - offsetX}px, ${e.clientY - offsetY}px)`;
    }

    function stopDragging(e:any) {
        if (!isDragging) {return}
        
        isDragging = false;
        e.target.classList.remove("dragging")
    }

    draggables.forEach(draggable => {
        draggable.addEventListener('mousedown', startDragging);
        draggable.addEventListener('mouseup', stopDragging);
        draggable.addEventListener('mousemove', drag);
    });

}
