const facts = [ //Array of interesting bird, bug and plant facts about New Zealand
    "The Kea is the world’s only alpine parrot.",
    "New Zealand has more species of penguins than any other country.",
    "The kiwi is the only bird in the world with nostrils at the end of its beak.",
    "The kiwi is faster than most humans, reaching speeds of up to 30 km/h.",
    "Kakapo parrots are nocturnal and can live for over 60 years.",
    "Tui birds can mimic human speech and other sounds.",
    "The koru plant is a symbol of new life and growth in Maori culture.",
    "New Zealand has no native land mammals, except for bats.",
    "The Giant weta is heavier than a sparrow.",
    "Tī kōuka (Cabbage tree) is a significant plant in Maori culture, used for food and weaving.",
    "The tuatara is not a lizard but a unique reptile endemic to New Zealand.",
    "This fact is a placeholder for a random fact about New Zealand.",
    "Toasting huhu grubs can enhance their nutty flavor, making them a delicacy.",
    "The chorus cicada  is one of the largest cicadas in the world, in addition to being the loudest.",
    "The pohutakawa tree is believed to guard the entrance to the underworld in Maori mythology.",
    "The tuatara can live for over 100 years, making it one of the longest-living reptiles.",
    "Pohutakawa trees bloom in December, coinciding with Christmas in New Zealand.",
    "The New Zealand falcon, or kārearea, is known for its agility and speed.",
    "The little blue penguin is the smallest penguin species in the world.",
    "Dolphins are birds, just like how kiwis are vegetables.",
    "The stick insect disguises itself as a twig or leaf to avoid predators.",
    "The New Zealand giraffe weevil is known for its long neck and unique appearance.",
    "The horopito tree is one of the few native trees that are affected by seasonal changes.",
    "Horoeka trees, also known as lancewood, have a unique growth form that changes as they mature.",
    "Kauri trees can live for over 1,000 years and are among the largest trees in the world.",
    "Manuka trees are known for their medicinal properties and are used to produce manuka honey.",
    "Bottlebrushes are a common sight in New Zealand wetlands and are important for local ecosystems.",
    "The Maori Bug (platyzosteria novaezelandiae) is a large, flightless insect native to New Zealand.",
    "Pukeko chicks are known to be precocial, meaning they can walk and feed themselves shortly after hatching.",
    "Pukekos are known for their striking blue and red plumage, making them easily recognizable.",
    "25 of the world's 29 insect orders are found in New Zealand, showcasing its rich biodiversity.",
    "The New Zealand longfin eel can live for over 100 years and migrate thousands of kilometers to breed.",
    "The New Zealand bellbird, or korimako, is known for its melodious song and vibrant green plumage.",
    "Kowhai trees play a crucial role in New Zealand's ecosystem, providing nectar for native birds.",
    "Mudfish are unique amphibious fish that can survive in both water and mud, adapting to seasonal changes.",
    "The giant kokopu is the largest member of the galaxiidae family, and one of the largest species in New Zealand.",
];

function displayRandomFact() {
    let usedIndices = []; // Initialize an array to track which facts have been displayed
    for (let i = 0; i < 3; i++) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * facts.length); // set a random index to select a fact
            console.log(`Trying random index for fact ${i + 1}: ${randomIndex}`);
        } while (usedIndices.includes(randomIndex)); // Ensure that the same fact is not displayed more than once
        usedIndices.push(randomIndex);
        const factElement = document.getElementById(`fact${i + 1}`); // Get the HTML element where the fact will be displayed
        factElement.textContent = facts[randomIndex];
        console.log(`${randomIndex}, Fact ${i + 1}: ${facts[randomIndex]}`); // Log the fact to the console for debugging
    }
}
document.addEventListener("DOMContentLoaded", function() {
    displayRandomFact(); // Call the function to display random facts when the document is loaded
});