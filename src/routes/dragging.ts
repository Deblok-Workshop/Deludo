let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let currentDraggable:any = null;
console.log("hai")
export default () => {
    const draggables = document.querySelectorAll('.draggable');

    console.log("hai 2")
    function startDragging(e:any) {
        isDragging = true;
        currentDraggable = e.target;

        if (!currentDraggable) return;

        offsetX = e.clientX - currentDraggable.getBoundingClientRect().left;
        offsetY = e.clientY - currentDraggable.getBoundingClientRect().top;

        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDragging);
    }


    function drag(e:any) {
        if (!isDragging || !currentDraggable) return;

        currentDraggable.style.transform = `translate(${e.clientX - offsetX}px, ${e.clientY - offsetY}px)`;
    }

    function stopDragging() {
        isDragging = false;

        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDragging);
    }

    draggables.forEach(draggable => {
        draggable.addEventListener('mousedown', startDragging);
    });

    return () => {
        draggables.forEach(draggable => {
            draggable.removeEventListener('mousedown', startDragging);
        });
    };
}
