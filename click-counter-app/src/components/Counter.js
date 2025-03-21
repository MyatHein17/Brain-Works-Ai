class Counter {
    constructor() {
        this.count = 0;
    }

    incrementCount() {
        this.count += 1;
        this.render();
    }

    render() {
        const counterContainer = document.getElementById('counter');
        counterContainer.innerHTML = `
            <h1>Click Count: ${this.count}</h1>
            <button id="increment-btn">Click Me!</button>
        `;

        const button = document.getElementById('increment-btn');
        button.addEventListener('click', () => this.incrementCount());
    }
}

export default Counter;