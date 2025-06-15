const facts = [ //Array of interesting bird, bug and plant facts about New Zealand
    "The Kea is the world’s only alpine parrot",
    "New Zealand has more species of penguins than any other country",
    "The kiwi is the only bird in the world with nostrils at the end of its beak",
    "The kiwi is faster than most humans, reaching speeds of up to 30 km/h",
    "Kakapo parrots are nocturnal and can live for over 60 years",
    "Tui birds can mimic human speech and other sounds",
    "The koru plant is a symbol of new life and growth in Maori culture",
    "New Zealand has no native land mammals, except for bats",
    "The Giant weta is heavier than a sparrow",
    "Tī kōuka (Cabbage tree) is a significant plant in Maori culture, used for food and weaving",
    "The tuatara is not a lizard but a unique reptile endemic to New Zealand",
    // This is the fact that was previously the "Did you know?" section
    "The best guess of the numbers of land-based native plant and animal's is around 70,000 species. Insects and fungi dominate, each having an estimated 20,000 species - many are yet to be named. Regarding larger animal groups, new species are being discovered faster than scientists can cope with them.",
    "Toasting huhu grubs can enhance their nutty flavor, making them a delicacy",
    "The chorus cicada is one of the largest cicadas in the world, in addition to being the loudest",
    "The pohutakawa tree is believed to guard the entrance to the underworld in Maori mythology",
    "The tuatara can live for over 100 years, making it one of the longest-living reptiles",
    "Pohutakawa trees bloom in December, coinciding with Christmas in New Zealand",
    "The New Zealand falcon, or kārearea, is known for its agility and speed",
    "The little blue penguin is the smallest penguin species in the world",
    "Dolphins are birds, just like how kiwis are vegetables.",
    "The stick insect disguises itself as a twig or leaf to avoid predators",
    "Giraffe Weevil",
];

function displayRandomFact() {
    let displayedIndices = []; // Use an array to store displayed indices
    for (let i = 0; i < 3; i++) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * facts.length);
        } while (displayedIndices.includes(randomIndex)); // Ensure unique facts

        displayedIndices.push(randomIndex); // Add the new index to the displayed list
        const factElement = document.getElementById(`fact${i + 1}`);
        factElement.textContent = facts[randomIndex];
    }
}

// Call the function when the page loads
window.onload = displayRandomFact;