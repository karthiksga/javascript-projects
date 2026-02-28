class User {
    #id;

    constructor(id) {
        this.#id = id;
    }
}

const user = new User(123);
console.log(user.#id); // SyntaxError: Private field '#id' must be declared in an enclosing class