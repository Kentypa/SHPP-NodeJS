class abstractProduct {
    constructor(key, name, shortDescription, price, quantity, reviews, image, date, brand) {
        this.key = key;
        this.name = name;
        this.shortDescription = shortDescription;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
        this.date = date;
        this.brand = brand;
    }

    getFullInformation() {}

    getPriceForQuantity(int) {}
}

