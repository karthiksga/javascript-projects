// How many times have you lost half a day debugging because one error triggered another, but the connection between them was almost impossible to trace?

const funcA = () => {
    throw new Error('Error in funcA');
}

const funcB = () => {
    try {
        funcA();
    } catch (error) {
        throw new Error('Error in funcB: ' + error.message, { cause: error }); // You can track the full chain of failures instead of guessing.
    }
}

funcB(); // Error in funcB: Error in funcA