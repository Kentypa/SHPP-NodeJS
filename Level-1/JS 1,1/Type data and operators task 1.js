let idCounter = 0;

function Product(name, description, price, brand, activeSize, quantity, reviews = [], images = []) {
    this.ID = `${idCounter++}`;
    this.name = name;
    this.description = description;
    this.price = parseFloat(price);
    this.brand = brand;
    this.sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    this.activeSize = activeSize;
    this.quantity = parseInt(quantity);
    this.date = new Date();
    this.reviews = reviews;
    this.images = images;

    this.getReviewByID = (reviewID) => {
        return this.reviews.find(review => review.ID === reviewID);
    }

    this.getImages = (imgID) => {
        return this.images[imgID] || this.images[0];
    }

    this.addSize = (size) => {
        this.sizes.push(size);
    }

    this.deleteSize = (sizeName) => {
        this.sizes.filter(size => sizeName !== sizeName);
    }

    this.addReview = (newReview) => {
        this.reviews.push(newReview);
    }

    this.deleteReview = (reviewID) => {
        this.reviews = this.reviews.filter(review => review.ID !== reviewID);
    }

    this.getAvarageRating = () => {
        return getAverage(reviews.map((review) => {
            return (review.rating.price + review.rating.quality + review.rating.service + review.rating.value) / 4;
        }));
    }
}

function searchProduct(products = [], search) {
    return products.filter(product => {
        return product.name.includes(search) || product.description.includes(search);
    });
}

function sortProducts(products = [], sortRule) {
    return products.sort((a, b) => {
        if (sortRule === "price") {
            return a.price - b.price;
        }
        if (sortRule === "name") {
            return a.name.localeCompare(b.name);
        }
        if (sortRule === "ID") {
            return a.ID.localeCompare(b.ID);
        }});
}

const getAverage = (array) =>
    array.reduce((sum, currentValue) => sum + currentValue, 0) / array.length;

function Review(ID, author, date, comment, rating) {
    this.ID = ID;
    this.author = author;
    this.date = date;
    this.comment = comment;
    this.rating = rating;
}

function Rating(service, price, value, quality) {
    this.service = service;
    this.price = price;
    this.value = value;
    this.quality = quality;
}

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

console.log(apple.getAvarageRating());
console.log(searchProduct([apple], "PC"));
console.log(sortProducts([apple, apple2], "price"));