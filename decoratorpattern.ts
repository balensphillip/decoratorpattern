interface Coffee{
    getCost(): number;
    getIngredients(): string;
}

// concrete component
class simpleCoffee implements Coffee {
    getCost(): number{
        return 6000;
    }
    getIngredients(): string {
        return "Water & Coffee"
    }
}

// base decorator
abstract class CoffeeDecorator implements Coffee {
    protected decoratedCoffee: Coffee;
    constructor(decoratedCoffee: Coffee){
        this.decoratedCoffee = decoratedCoffee;
    }
    getCost(): number {
        return this.decoratedCoffee.getCost();
    }
    getIngredients(): string {
        return this.decoratedCoffee.getIngredients();
    }
}

// concrete decorator
class Latte extends CoffeeDecorator{
    getCost(): number {
        return this.decoratedCoffee.getCost() + 4000;
    }
    getIngredients(): string {
        return this.decoratedCoffee.getIngredients() + 'plus form gives us latte';
    }
}

class Capuccino extends CoffeeDecorator{
    getCost(): number {
        return this.decoratedCoffee.getCost() + 6000;
    }
    getIngredients(): string {
        return this.decoratedCoffee.getIngredients() + 'chocolate milk to make a capuccino';
    }
}

let coffee:Coffee = new simpleCoffee();
console.log(coffee.getCost());
console.log(coffee.getIngredients());
