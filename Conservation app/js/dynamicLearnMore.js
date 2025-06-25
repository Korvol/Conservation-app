document.addEventListener('DOMContentLoaded', function() {
    const contentItems = [
        // Animals
        { url: 'animals/kea.html', img: 'images/kea.png', title: 'Kea', subtitle: 'Nestor notabilis' },
        { url: 'animals/whio.html', img: 'images/blue.jpg', title: 'Blue Duck / Whio', subtitle: 'Hymenolaimus malacorhynchos' },
        { url: 'animals/kokako.html', img: 'images/kokako.jpg', title: 'Kōkako', subtitle: 'Callaeas cinerea' },
        { url: 'animals/kiwi.html', img: 'images/kiwi.jpg', title: 'Kiwi', subtitle: 'Apteryx mantelli' },
        { url: 'animals/hectors_dolphin.html', img: 'images/dolphin.webp', title: "Hector's Dolphin", subtitle: 'Cephalorhynchus hectori' },
        { url: 'animals/fantail.html', img: 'images/fantail.jpg', title: 'Fantail (Pīwakawaka)', subtitle: 'Rhipidura fuliginosa' },

        // Locations
        { url: 'pages/fiordland_national_park.html', img: 'images/fiordland.jpg', title: 'Fiordland National Park', subtitle: 'Majestic Sounds' },
        { url: 'pages/kapiti_island.html', img: 'images/kapiti.png', title: 'Kapiti Island', subtitle: 'Bird Sanctuary' },
        { url: 'pages/routeburn_track_and_huts.html', img: 'images/routeburn.jpg', title: 'Routeburn Track', subtitle: 'Great Walk' },

        // Pests
        { url: 'pests/stoat.html', img: 'images/stoat.jpg', title: 'Stoat', subtitle: 'Mustela erminea (Introduced Pest)' },

        // Add more items here as you create new detailed pages!
        // Example for a new pest:
        // { url: 'pests/possum.html', img: 'images/possum.jpg', title: 'Possum', subtitle: 'Trichosurus vulpecula (Introduced Pest)' },
        // Example for a new park:
        // { url: 'pages/abel_tasman_national_park.html', img: 'images/abel_tasman.jpg', title: 'Abel Tasman National Park', subtitle: 'Coastal Paradise' },
    ];

    const numCardsToShow = 4; // How many random cards to display
    const learnMoreContainer = document.getElementById('dynamic-learn-more-cards');

    if (learnMoreContainer) {
        // Shuffle the array
        const shuffledItems = [...contentItems].sort(() => 0.5 - Math.random());

        // Get a slice of the shuffled array
        const selectedItems = shuffledItems.slice(0, numCardsToShow);

        // Clear loading text
        learnMoreContainer.innerHTML = '';

        // Create and append cards
        selectedItems.forEach(item => {
            const cardHtml = `
                <a href="${item.url}" class="animal-card">
                    <img src="${item.img}" alt="${item.title}" />
                    <p><strong>${item.title}</strong><br><em>${item.subtitle}</em></p>
                </a>
            `;
            learnMoreContainer.insertAdjacentHTML('beforeend', cardHtml);
        });
    }
});