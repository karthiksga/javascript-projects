const startQuest = () => {
    userInteraction = Promise.withResolvers();
    console.log("Quest started. Waiting for user interaction...");
    return userInteraction.promise;
}

const buttonClicked = () => {
    if (userInteraction) {
        userInteraction.resolve("Button was clicked!");
    }
}

async function runGame() {
    const questPromise = startQuest();
    // console.log(result); // "Button was clicked!"
    setTimeout(buttonClicked, 3000);
    const result = await questPromise;
    console.log(result); // "Button was clicked!"
}

runGame();
