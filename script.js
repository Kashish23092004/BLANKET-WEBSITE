
document.querySelector('.best').addEventListener('click', function() {
    document.write('Best Sellers clicked');
});


document.querySelector('.today').addEventListener('click', function() {
   document.write ("Today's Deals clicked");
});

document.querySelector('.cust').addEventListener('click', function() {
document.write('Customer Service clicked');
});

document.querySelector('.sort').addEventListener('click', function() {
    document.write('FILTER clicked');
});

document.querySelector('.sign').addEventListener('click', function() {
    document.write('SIGN UP clicked');
});
function makeButtonsResponsive() {
    const buttons = document.querySelectorAll('button');
    const screenWidth = window.innerWidth;

    buttons.forEach(button => {
        if (screenWidth < 768) {
            button.style.fontSize = '14px';
            button.style.padding = '8px 12px';
        } else {
            button.style.fontSize = '16px';
            button.style.padding = '10px 15px';
        }
    });
}

// Function to open images in new tabs
function openImageInNewTab(event) {
    const imageUrl = event.target.src;
    if (imageUrl) {
        window.open(imageUrl, '_blank');
    }
}

// Add event listeners to all images
function addImageClickListeners() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('click', openImageInNewTab);
    });
}

// Call functions on page load and resize
window.addEventListener('load', () => {
    makeButtonsResponsive();
    addImageClickListeners();
});

window.addEventListener('resize', makeButtonsResponsive);
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add event listeners to navigation items
function addNavigationListeners() {
    const newReleasesButton = document.querySelector('.new');

    if (newReleasesButton) {
        newReleasesButton.addEventListener('click', () => {
            scrollToSection('new-releases');
        });
    }
}

// Initialize event listeners on page load
window.addEventListener('load', () => {
    makeButtonsResponsive();
    addImageClickListeners();
    addNavigationListeners();
});

window.addEventListener('resize', makeButtonsResponsive);