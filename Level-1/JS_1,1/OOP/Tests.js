import {Clothes, Electronics} from "./OOP.js";
import {searchProduct, sortProducts} from "../Type_and_data_operations/TypeDataAndOperations.js";

const clothes1 = new Clothes({
    name: "T-Shirt",
    description: "A comfortable cotton T-shirt.",
    price: 15.99,
    brand: "BrandA",
    quantity: 50,
    material: "Cotton",
    color: "Blue",
    activeSize: "M"
});

const clothes2 = new Clothes({
    name: "Jeans",
    description: "Stylish denim jeans.",
    price: 45.99,
    brand: "BrandB",
    quantity: 30,
    material: "Denim",
    color: "Black",
    activeSize: "L"
});

const electronics1 = new Electronics({
    name: "Smartphone",
    description: "Latest model smartphone.",
    price: 699.99,
    brand: "TechCorp",
    quantity: 10,
    warranty: 24,
    power: 10
});

const electronics2 = new Electronics({
    name: "Laptop",
    description: "High-performance laptop.",
    price: 1299.99,
    brand: "CompuTech",
    quantity: 5,
    warranty: 36,
    power: 85
});



console.log(clothes1.getFullInformation());
console.log(electronics1.getFullInformation());

console.log(clothes1.getMaterial());
clothes1.setMaterial("Polyester");
console.log(clothes1.getMaterial());

console.log(clothes1.getColor());
clothes1.setColor("Black");
console.log(clothes1.getColor());

console.log(electronics1.getWarranty());
electronics1.setWarranty(12);
console.log(electronics1.getWarranty());

console.log(electronics1.getPower());
electronics1.setPower(100);
console.log(electronics1.getPower());

console.log(electronics1.property("name"));
electronics1.property("name", "Phone");
console.log(electronics1.property("name"));

console.log(electronics1.getFullInformation())
console.log(clothes1.getFullInformation())

console.log(electronics1.getPriceForQuantity(10));

const products = [clothes1, clothes2, electronics1, electronics2];

console.log("Sorting by price:");
console.log(sortProducts(products, "price"));

console.log("Sorting by ID:");
console.log(sortProducts(products, "ID"));

console.log("Searching by using name:");
console.log(searchProduct(products, "Jeans"));

console.log("Searching by using description:");
console.log(searchProduct(products, "laptop"));