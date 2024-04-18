document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    //Fixed Bug
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID
                //Fixed Bug
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting']);
        // 🪲 Bug: What's missing from JS concepts? 
        // Fixed Bug
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🪲 Bug: Incorrect function call
        //Fixed Bug
        const commonConcepts = findIntersection(jsConcepts, reactConcepts); // Typo fixed
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function?
    // Fixed Bug
    //Added async
    document.getElementById("solveRoom3").addEventListener("click",async () => {
        fetch('directions.json') 
            .then(response => response.json())
            //Added async
            .then(async directions => {
                //Added await
                await navigateLabyrinth(directions)
                        // 🪲 Bug: Incorrect method
                        document.getElementById("room3Result").innerHTML = "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";                        ;
            });
    });
});

function findMostRecentBook(books) {
    // 🪲 Bug: Logic error
    // Fixed Bug
    //Logic correct
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent); // Logic corrected
}

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    // Fixed Bug
    //Logic correct
    const intersection = new Set([...setA].filter(x => setB.has(x))); // Logic corrected
    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay
        // Fixed Bug
        //Logic correct
        await new Promise(resolve => setTimeout(resolve, 1000)); // Await added
        console.log(`Navigating: ${direction.step}`);
    }
}