document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('nav.left ul');

    // Toggle the menu on small devices
    menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Close the menu when a menu item is clicked
    navMenu.querySelectorAll('li a').forEach(item => {
        item.addEventListener('click', function() {
            navMenu.classList.remove('show');
        });
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('show');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const sliderButton = document.querySelector('.slider-button.right');
    const genresContainer = document.querySelector('.genres');
    const loadMoreButton = document.querySelector('.load-more-button');
    const cardWidth = document.querySelector('.genres-card').offsetWidth;
    let scrollAmount = 0;
    let numCardsLoaded = 4; // Initial number of cards loaded

    if (sliderButton) {
        sliderButton.addEventListener('click', function() {
            const maxScroll = genresContainer.scrollWidth - genresContainer.clientWidth;
            scrollAmount += cardWidth + 20; // 20px is the gap between cards
            if (scrollAmount > maxScroll) {
                scrollAmount = maxScroll;
            }
            genresContainer.style.transform = `translateX(-${scrollAmount}px)`;
        });
    }

    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function() {
            // Simulate fetching more data (new genres cards)
            const newCards = [
                {
                    imageSrc: 'images/genres-racing-500x281.jpg',
                    title: 'Racing',
                    text: '32 Games'
                },
                {
                    imageSrc: 'images/genres-strategy-500x281.jpg',
                    title: 'Strategy',
                    text: '50 Games'
                }
                // Add more cards as needed
            ];

            // Create HTML for new genres cards
            newCards.forEach(card => {
                const cardHtml = `
                    <div class="genres-card">
                        <img src="${card.imageSrc}" alt="">
                        <h3 class="card-title">${card.title}</h3>
                        <p class="card-text">${card.text}</p>
                    </div>
                `;
                genresContainer.innerHTML += cardHtml;
            });

            // Update number of cards loaded and adjust container width
            numCardsLoaded += newCards.length;
            const newContainerWidth = numCardsLoaded * (cardWidth + 20); // 20px gap between cards
            genresContainer.style.width = `${newContainerWidth}px`;
        });
    }
});
