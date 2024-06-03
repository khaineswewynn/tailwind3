// class Developer {
//     constructor(name, salary, position) {
//         this.name = name;
//         this.salary = salary;
//         this.position = position;
//     }

//     calculateSalary() {
//         let netSalary = 0;
//         if (this.position === 'Developer') {
//             netSalary = this.salary * 0.8;
//         } else if (this.position === 'Manager') {
//             netSalary = this.salary * 0.9;
//         }
//         console.log(netSalary);
//     }
// }

// let developer = new Developer('John', 1000, 'Developer');
// developer.calculateSalary();

// let manager = new Developer('Jane', 2000, 'Manager');
// manager.calculateSalary();

// console.log(typeof(developer));
// console.log(typeof(manager));
// console.log(typeof(Developer));

//function object
function Hotel(name, address, contact){
    this.name = name;
    this.address = address;
    this.contact = contact;  
}

// console.log(hotel1.name);
// console.log(hotel1.address);
// console.log(hotel1.contact);

Hotel.prototype.display = function(){
    console.log(this.name + '___' + this.address + '___' + this.contact);
}


let hotel1 = new Hotel('Hilton', '26th x 66th St', '+959 999 999 999');
hotel1.display()
let hotel2 = new Hotel('Marriot', '26th x 66th St', '+959 999 999 999');
hotel2.display()

console.log(typeof(Hotel.prototype.display));
account.transfer = function(account2, cash) {
    console.log(`${this.name} has ${cash} transferred to ${account2.name}`);
    this.amount -= cash;
};

let account1 = {
    name: 'John',
    address: '26th x 66th St',
    contact: '+959 999 999 999',
    amount: 800000,
    transfer: account.transfer
};

let account2 = {
    name: 'Jane',
    address: '26th x 66th St',
    contact: '+959 999 999 999',
    amount: 800000,
    transfer: account.transfer
};

console.log('Account 1 balance', account1.amount);
account1.transfer(account2, 100000);
console.log('Account 1 balance', account1.amount);
account1.transfer(account2, 100000);
