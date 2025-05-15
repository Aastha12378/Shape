const wrapper = document.getElementById("wrapper");

let prev = 0;
let next;

// Function to generate a random index different from the previous one
function getRandomIndex(excludeIndex, maxLength) {
    let index;
    do {
        index = Math.floor(Math.random() * maxLength);
    } while (index === excludeIndex);
    return index;
}

setInterval(() => {
    next = getRandomIndex(prev, combinations.length);

    const combination = combinations[next];
    wrapper.dataset.configuration = combination.configuration;
    wrapper.dataset.roundness = combination.roundness;

    prev = next;
}, 2000);

const combinations = [
    { configuration: 1, roundness: 1 },
    { configuration: 1, roundness: 2 },
    { configuration: 1, roundness: 4 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 1 },
    { configuration: 3, roundness: 3 },
    { configuration: 3, roundness: 4 }, // Added new roundness
    { configuration: 2, roundness: 3 }, // Added new combination
];

console.log("Total combinations:", combinations.length);