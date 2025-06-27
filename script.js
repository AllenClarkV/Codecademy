const cursor = document.querySelector(".glowing-cursor");

// Check if the user is on a mobile device
const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// If mobile, hide the custom cursor
if (isMobile) {
  cursor.style.display = "none";
} else {
  // Otherwise, show the cursor and track mouse movement
  window.addEventListener("mousemove", (e) => {
    cursor.style.display = "block";
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
}
