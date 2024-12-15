import {searchProduct, sortProducts, Product, Review, Rating} from "./TypeDataAndOperations.js";

let apple = new Product(
    "MacM4",
    "Ultra powered PC",
    1240.99,
    "Apple",
    'M',
    5,
    [
        new Review('1', 'kent', new Date(), 'something', new Rating(5, 3, 4 ,5)),
        new Review('2', 'kentik', new Date(), 'something2', new Rating(3, 5, 5 ,3))
    ],
    ["img1.jpg", "img2.png"]
);

let apple2 = new Product(
    "MacM3",
    "Less Ultra powered PC",
    1000.99,
    "Apple",
    'M',
    4,
    [
        new Review('1', 'kent', new Date(), 'something', new Rating(5, 3, 4 ,5)),
        new Review('2', 'kentik', new Date(), 'something2', new Rating(3, 5, 5 ,3))
    ],
    ["img1.jpg", "img2.png"]
);

console.log(apple.getAverageRating());
console.log(searchProduct([apple], "PC"));
console.log(sortProducts([apple, apple2], "price"));