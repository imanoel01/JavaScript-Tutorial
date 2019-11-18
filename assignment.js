// const Person={
//     firstname:"emma",
//     lastname:"malieze",
//     age:24,
//     Biodata(){
//         console.log(this.firstname+this.firstname)

//     }
// }

// Person.Biodata();

class Person{
    constructor(firstname, lastname,middlename,age,stateOfOrigin){
        this.name={firstname,lastname,middlename};
        this.age=age;
        this.stateOfOrigin=stateOfOrigin;
    };

     Biodata () {
console.log( "My names is " + this.name.lastname+" " +this.name.firstname  +". I am " + this.age +" years old." );
    }

}

const person=new Person("Emmanuel","Malieze","O",12,"Delta")
person.Biodata();