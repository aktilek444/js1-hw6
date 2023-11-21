class Person {
    static #retiremenAge = 76;
    #password;
    #name;
    
    constructor (name,age, password){
        this.name = name;
        this.age = age;
        this.#password = password;
    }
    print (password){
        if(password == this.#password) console.log(this.#name);
    }
    #checkName (name){
        if (name.length > 1){
            return name
        } else {
            return 'default name'
        }
    }

    get name() {
    return this.#name
    }
    set name (name){
        if (name.length > 1){
           this.#name = name;
        } else {
            return 'default name'
        }
    }

    static classInfo (age){
       if(Person.#retiremenAge > age){
        console.log('пока рано на пенсию.Работай');
       } else{
        console.log('ты на пенсии старик');
       }
    }

}

class Employee extends Person{
    constructor (name, age, password, company){
        super(name, age, password);
        this.company = company;
    }

    print(password){
        super.print(password);
        console.log('Hello Topor!');
    }
}


let user = new Person('Baltabay', 76, 1234);
let user2 = new Employee('topor', 76, 1234, 'yfyf');



user2.print(1234);
console.log(user.name);




