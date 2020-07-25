class Param {
    constructor(element) {
        this.name = element.value;
        this.price = +element.dataset['price'];
        this.calories = +element.dataset['calories'];
    }
}

class Burger {
    constructor(size, structure, topping) {
        this.size = new Param(this.select(size));
        this.structure = new Param(this.select(structure));
        this.toppings = this.getToppings(topping);
    }

    select(name) {
        return document.querySelector(`input[name=${name}]:checked`);
    }

    selectAll(name) {
        return [...document.querySelectorAll(`input[name=${name}]:checked`)];
    }

    getToppings(name) {
        let result = [];
        this.selectAll(name).forEach(el => result.push(new Param(el)))
        return result;
    }

    sumPrice() {
        let result = this.size.price + this.structure.price;
        this.toppings.forEach(el => result += el.price);
        return result;
    }

    sumCalories() {
        let result = this.size.calories + this.structure.calories;
        this.toppings.forEach(el => result += el.calories);
        return result;
    }

    showSum(price, calories) {
        document.querySelector(price).textContent = this.sumPrice();
        document.querySelector(calories).textContent = this.sumCalories();
    }
}

window.onload = () => {
    document.querySelector("#check").addEventListener('click', () => {
        let burger = new Burger('size', 'structure', 'topings');
        console.log(burger);
        burger.showSum("#price", "#calories");
    });

}