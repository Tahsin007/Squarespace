// Function to filter gallery items based on the selected category
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    const chips = document.querySelectorAll('.chip');

    // Remove 'active' class from all chips
    chips.forEach(chip => chip.classList.remove('active'));

    // Add 'active' class to the clicked chip
    event.target.classList.add('active');

    // Show/Hide items based on category
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initialize the gallery to show all items by default
window.onload = () => filterGallery('all');

