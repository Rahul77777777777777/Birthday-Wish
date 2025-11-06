
let highestZ = 1;

document.querySelectorAll(".paper").forEach(paper => {
  let offsetX, offsetY;

  // Mouse Events
  paper.addEventListener("mousedown", dragStart);
  document.addEventListener("mousemove", dragMove);
  document.addEventListener("mouseup", dragEnd);

  // Touch Events (for Android & iPhone)
  paper.addEventListener("touchstart", dragStart, { passive: false });
  document.addEventListener("touchmove", dragMove, { passive: false });
  document.addEventListener("touchend", dragEnd, { passive: false });

  function dragStart(e) {
    e.preventDefault();
    highestZ++;
    paper.style.zIndex = highestZ;

    const rect = paper.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    offsetX = clientX - rect.left;
    offsetY = clientY - rect.top;

    paper.dataset.dragging = "true";
  }

  function dragMove(e) {
    if (paper.dataset.dragging !== "true") return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    paper.style.left = clientX - offsetX + "px";
    paper.style.top = clientY - offsetY + "px";
  }

  function dragEnd() {
    paper.dataset.dragging = "false";
  }
});
