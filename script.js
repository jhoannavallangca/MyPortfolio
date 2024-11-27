// Function to open a modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close a modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Close modals when clicking outside the modal content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

// Function to open any modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close any modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

//this is for portfolio design 
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#js-splide", {
    type: "loop",
    perPage: 4, // Show 4 slides per page
    perMove: 1,
    focus: "center",
    gap: "1rem", // Space between slides
    breakpoints: {
      1200: {
        perPage: 3, // Show 3 slides on smaller screens
      },
      800: {
        perPage: 2, // Show 2 slides on tablets
      },
      600: {
        perPage: 1, // Show 1 slide on small devices
      },
    },
  }).mount();
});

