import {Product} from "../Type_and_data_operations/TypeDataAndOperations.js";

export function AbstractProduct({name, description, price, brand, activeSize, quantity, reviews, images}) {
    Product.call(this, name, description, price, brand, activeSize, quantity, reviews, images);
}

AbstractProduct.prototype = Object.create(Product.prototype);

Object.assign(AbstractProduct.prototype, {
    getFullInformation() {},
    getPriceForQuantity(quantity) {
        return `${quantity * this.price}$`;
    },
    property (key, value) {
        if (arguments.length === 1) {
            return this[key];
        } else if (arguments.length === 2) {
            this[key] = value;
        }
    }
})

export function Clothes({material, color, ...rest}) {
    AbstractProduct.call(this, rest);
    this.material = material;
    this.color = color;
}

Clothes.prototype = Object.create(AbstractProduct.prototype);

Object.assign(Clothes.prototype, {
    getMaterial() {return this.material;},
    getColor() {return this.color;},
    getFullInformation(){
        return `
            ID: ${this.ID}
            Name: ${this.name}
            Description: ${this.description}
            Price: ${this.price}
            Quantity: ${this.quantity}
            Images: ${this.images}
            Date: ${this.date}
            Brand: ${this.brand}
            Material: ${this.material}
            Color: ${this.color}
        `;
    },
    setMaterial(material) {this.material = material;},
    setColor(color) {this.color = color;},
})


export function Electronics({warranty, power, ...rest}) {
    AbstractProduct.call(this, rest);
    this.warranty = warranty;
    this.power = power;
}

Electronics.prototype = Object.create(AbstractProduct.prototype);

Object.assign(Electronics.prototype, {
    getWarranty() {return this.warranty},
    getPower() {return this.power},
    getFullInformation(){
        return `
            ID: ${this.ID}
            Name: ${this.name}
            Description: ${this.description}
            Price: ${this.price}
            Quantity: ${this.quantity}
            Images: ${this.images}
            Date: ${this.date}
            Brand: ${this.brand}
            Warranty: ${this.warranty}
            Power: ${this.power}
        `;
    },
    setWarranty(warranty) {this.warranty = warranty;},
    setPower(power) {this.power = power},
});