var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// concrete component
var simpleCoffee = /** @class */ (function () {
    function simpleCoffee() {
    }
    simpleCoffee.prototype.getCost = function () {
        return 6000;
    };
    simpleCoffee.prototype.getIngredients = function () {
        return "Water & Coffee";
    };
    return simpleCoffee;
}());
// base decorator
var CoffeeDecorator = /** @class */ (function () {
    function CoffeeDecorator(decoratedCoffee) {
        this.decoratedCoffee = decoratedCoffee;
    }
    CoffeeDecorator.prototype.getCost = function () {
        return this.decoratedCoffee.getCost();
    };
    CoffeeDecorator.prototype.getIngredients = function () {
        return this.decoratedCoffee.getIngredients();
    };
    return CoffeeDecorator;
}());
// concrete decorator
var Latte = /** @class */ (function (_super) {
    __extends(Latte, _super);
    function Latte() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Latte.prototype.getCost = function () {
        return this.decoratedCoffee.getCost() + 4000;
    };
    Latte.prototype.getIngredients = function () {
        return this.decoratedCoffee.getIngredients() + 'plus form gives us latte';
    };
    return Latte;
}(CoffeeDecorator));
var Capuccino = /** @class */ (function (_super) {
    __extends(Capuccino, _super);
    function Capuccino() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Capuccino.prototype.getCost = function () {
        return this.decoratedCoffee.getCost() + 6000;
    };
    Capuccino.prototype.getIngredients = function () {
        return this.decoratedCoffee.getIngredients() + 'chocolate milk to make a capuccino';
    };
    return Capuccino;
}(CoffeeDecorator));
var coffee = new simpleCoffee();
console.log(coffee.getCost());
console.log(coffee.getIngredients());
