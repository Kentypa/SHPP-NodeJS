let idCounter = 0;

export function Product(name, description, price, brand, activeSize, quantity, reviews = [], images = []) {
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

    this.getID = () => {return this.ID;}
    this.getName = () => {return this.name;}
    this.getDescription = () => {return this.description;}
    this.getPrice = () => {return this.price;}
    this.getBrand = () => {return this.brand;}
    this.getActiveSize = () => {return this.activeSize;}
    this.getQuantity = () => {return this.quantity;}
    this.getDate = () => {return this.date;}
    this.getReviews = () => {return this.reviews;}
    this.getImages = () => {return this.images;}

    this.setName = (name) => {this.name = name;}
    this.setDescription = (description) => {this.description = description;}
    this.setPrice = (price) => {this.price = price;}
    this.setBrand = (brand) => {this.brand = brand;}
    this.setActiveSize = (activeSize) => {this.activeSize = activeSize;}
    this.setQuantity = (quantity) => {this.quantity = quantity;}
    this.setDate = (date) => {this.date = date;}
    this.setReviews = () => {this.reviews = reviews;}
    this.setImages = () => {this.images = images;}

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

    this.getAverageRating = () => {
        return getAverage(reviews.map((review) => {
            return (review.rating.price + review.rating.quality + review.rating.service + review.rating.value) / 4;
        }));
    }
}

export function searchProduct(products = [], search) {
    return products.filter(product => {
        return product.name.includes(search) || product.description.includes(search);
    });
}

export function sortProducts(products = [], sortRule) {
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

export const getAverage = (array) =>
    array.reduce((sum, currentValue) => sum + currentValue, 0) / array.length;

export function Review(ID, author, date, comment, rating) {
    this.ID = ID;
    this.author = author;
    this.date = date;
    this.comment = comment;
    this.rating = rating;
}

export function Rating(service, price, value, quality) {
    this.service = service;
    this.price = price;
    this.value = value;
    this.quality = quality;
}