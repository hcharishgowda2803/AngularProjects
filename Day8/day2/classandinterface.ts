// class without constructor
class user{
    firstName:string='technoelevate'
    lastName:string
    id:number
    object(){
        console.log('this class without interface');
        
    }
}

//for above class we create object

var object=new user();
console.log(object.firstName);


// class with constructor
class person{
    name:string
    id:number
    constructor(name,id){
        this.name=name
        this.id
    }
}
var object2=new person('harish',25)
console.log(object2.name);



//interface 

interface car{
    brand:string
    price:number
    results():string
}

// creating class on above interface

class honda implements car{
    brand: string;
    price: number;
    results(): string {
        return 'abcd'
    }
}

var c = new honda()
var x=c.results()
console.log(x);

// here using interface as datatype
var car2:car={      
    brand:'honda',
    price:2000,
    results(){
        return 'abc'
    }

}
console.log(car2.price);



//  enum used to store the set of constans

enum books{              // we can assign string value to enum constants
    book1=10,            // if noting will assign to varibale it start with 1
    book2=20,            //if we assing any value to first variable the next variable are not intialize then it eill automatically increased by 1
    book3=30,            // book1=10, then book2 will be 11   and book3 is 12
}

function displaybook():books{
    if(true){
    return books.book2

    }
}


//genric which used to make retun type dynamic


function displayValue<t>(item:t,item2:t){    // both parameters must be same.
    return `${item}+${item2}`
    
}
console.log(displayValue('techn0elevate','testyantra'));
