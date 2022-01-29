// class without constructor
var user = /** @class */ (function () {
    function user() {
        this.firstName = 'technoelevate';
    }
    user.prototype.object = function () {
        console.log('this class without interface');
    };
    return user;
}());
//for above class we create object
var object = new user();
console.log(object.firstName);
// class with constructor
var person = /** @class */ (function () {
    function person(name, id) {
        this.name = name;
        this.id;
    }
    return person;
}());
var object2 = new person('harish', 25);
console.log(object2.name);
// creating class on above interface
var honda = /** @class */ (function () {
    function honda() {
    }
    honda.prototype.results = function () {
        return 'abcd';
    };
    return honda;
}());
var c = new honda();
var x = c.results();
console.log(x);
// here using interface as datatype
var car2 = {
    brand: 'honda',
    price: 2000,
    results: function () {
        return 'abc';
    }
};
console.log(car2.price);
//  enum used to store the set of constans
var books;
(function (books) {
    books[books["book1"] = 10] = "book1";
    books[books["book2"] = 20] = "book2";
    books[books["book3"] = 30] = "book3";
})(books || (books = {}));
function displaybook() {
    if (true) {
        return books.book2;
    }
}
//genric which used to make retun type dynamic
function displayValue(item, item2) {
    return "".concat(item, "+").concat(item2);
}
console.log(displayValue('techn0elevate', 'testyantra'));
