window.onload = function() {
    // Hide welcome screen after 5 seconds or when the button is clicked
    setTimeout(hideWelcomeScreen, 5000);
    const startBtn = document.querySelector('.start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', hideWelcomeScreen);
    }
};

function showDishDetail(item) {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'flex';  // Show loading animation
    }

    // Extract data attributes
    const title = item.getAttribute('data-name');
    const price = item.getAttribute('data-price');
    const description = item.getAttribute('data-description');

    // Populate dish detail
    document.getElementById('dish-title').innerText = title || "Dish Title Not Available";
    document.getElementById('dish-price').innerText = price || "Price Not Available";
    document.getElementById('dish-description').innerText = description || "Description Not Available";

    // Clear previous images
    const imagesContainer = document.getElementById('dish-images');
    if (imagesContainer) {
        imagesContainer.innerHTML = '';
    }

    // Add images for dish detail
    for (let i = 1; i <= 3; i++) {
        const img = document.createElement('img');
        img.src = "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Fish-Tacos-1337495.jpg?resize=768,574"; // Placeholder image
        img.alt = `${title || "Dish"} Detail Image ${i}`;
        imagesContainer.appendChild(img);
    }

    // Hide the menu and show the detail section
    const homePage = document.getElementById('home-page');
    const dishDetail = document.getElementById('dish-detail');

    if (homePage) homePage.style.display = 'none';
    if (dishDetail) dishDetail.style.display = 'block';

    // Hide loading animation
    if (loading) loading.style.display = 'none';
}

function hideWelcomeScreen() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const homePage = document.getElementById('home-page');
    const loading = document.getElementById('loading');
    
    if (welcomeScreen) welcomeScreen.style.display = 'none';
    if (homePage) {
        homePage.style.display = 'block';
        loading.style.display = 'none';  // Ensure loading animation is hidden
    }
}

// Add event listeners to dish items
document.querySelectorAll('.dish-item').forEach(item => {
    item.addEventListener('click', function() {
        showDishDetail(this);
    });
});



function goBack() {
    const dishDetail = document.getElementById('dish-detail');
    const homePage = document.getElementById('home-page');
    
    if (dishDetail) dishDetail.style.display = 'none';
    if (homePage) homePage.style.display = 'block';
}