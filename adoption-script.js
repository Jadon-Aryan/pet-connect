document.addEventListener('DOMContentLoaded', () => {
    // --- STATE MANAGEMENT (FAVORITES) ---
    let favorites = JSON.parse(localStorage.getItem('dogFavorites')) || [];
    const favCounters = document.querySelectorAll('.fav-counter');

    const updateFavorites = () => {
        localStorage.setItem('dogFavorites', JSON.stringify(favorites));
        favCounters.forEach(counter => {
            counter.textContent = favorites.length;
        });

        document.querySelectorAll('.favorite-icon').forEach(icon => {
            const dogId = icon.dataset.dogId;
            if (favorites.includes(dogId)) {
                icon.classList.add('favorited');
                icon.innerHTML = '<i class="fas fa-heart"></i>';
            } else {
                icon.classList.remove('favorited');
                icon.innerHTML = '<i class="far fa-heart"></i>';
            }
        });
    };

    // --- INITIALIZE PAGE ---
    updateFavorites();

    // --- EVENT LISTENERS ---
    document.body.addEventListener('click', event => {
        const icon = event.target.closest('.favorite-icon');
        if (icon) {
            const dogId = icon.dataset.dogId;
            if (favorites.includes(dogId)) {
                favorites = favorites.filter(id => id !== dogId);
            } else {
                favorites.push(dogId);
            }
            updateFavorites();

            if (document.body.contains(document.getElementById('favorites-grid'))) {
                const cardToRemove = icon.closest('.dog-card');
                if (cardToRemove) {
                    cardToRemove.remove();
                    if (favorites.length === 0) {
                        document.getElementById('no-favorites-message').style.display = 'block';
                    }
                }
            }
        }
    });

    // Filtering Logic
    const ageFilter = document.getElementById('age-filter');
    const sizeFilter = document.getElementById('size-filter');
    const genderFilter = document.getElementById('gender-filter');
    const statusFilter = document.getElementById('status-filter');
    const dogGrid = document.getElementById('dog-grid');
    const allDogCards = dogGrid ? Array.from(dogGrid.querySelectorAll('.dog-card')) : [];

    function filterDogs() {
        const selectedAge = ageFilter.value;
        const selectedSize = sizeFilter.value;
        const selectedGender = genderFilter.value;
        const selectedStatus = statusFilter.value;

        allDogCards.forEach(card => {
            const isAgeMatch = selectedAge === 'all' || card.dataset.age === selectedAge;
            const isSizeMatch = selectedSize === 'all' || card.dataset.size === selectedSize;
            const isGenderMatch = selectedGender === 'all' || card.dataset.gender === selectedGender;
            const isStatusMatch = selectedStatus === 'all' || card.dataset.status === selectedStatus;

            if (isAgeMatch && isSizeMatch && isGenderMatch && isStatusMatch) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (ageFilter) {
        [ageFilter, sizeFilter, genderFilter, statusFilter].forEach(filter => {
            filter.addEventListener('change', filterDogs);
        });
    }

    // Favorites Page Logic
    const favoritesGrid = document.getElementById('favorites-grid');
    if (favoritesGrid) {
        const noFavoritesMessage = document.getElementById('no-favorites-message');
        const dogCardHtml = JSON.parse(localStorage.getItem('allDogCardsHtml')) || {};

        if (favorites.length > 0) {
            noFavoritesMessage.style.display = 'none';
            favorites.forEach(dogId => {
                if (dogCardHtml[dogId]) {
                    favoritesGrid.insertAdjacentHTML('beforeend', dogCardHtml[dogId]);
                }
            });
            updateFavorites();
        } else {
            noFavoritesMessage.style.display = 'block';
        }
    }

    if (dogGrid) {
        const dogCardData = {};
        allDogCards.forEach(card => {
            dogCardData[card.dataset.dogId] = card.outerHTML;
        });
        localStorage.setItem('allDogCardsHtml', JSON.stringify(dogCardData));
    }

    // Inquiry Modal Logic
    const inquiryModal = document.getElementById('inquiry-modal');
    if (inquiryModal) {
        // ... same modal logic as before ...
    }
});