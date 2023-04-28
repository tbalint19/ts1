// variables
// datastructures
// operators
// functions
// loops
// conditional statements

// NO!!!!!! input/output handling

let x: number = 5   // user input 1 - from db, file, ui (html)
let y: number = 6   // user input 2
let z: number = 7


let firstResult = x + y

let c = (num1: number, num2: number, num3: number) => {
  let r = (num1 + num2) * num3
}

let resultToLog = c(x, y, z)
let resultToLog2 = (x + y) * z



let resultToLog3 = c(10, 12, 13)




console.log(resultToLog)   // dummy output handling - write to file/database / to ui (html)
console.log(resultToLog2)   // dummy output handling - write to file/database / to ui (html)
console.log(resultToLog3)   // dummy output handling - write to file/database / to ui (html)



type Account = {
  id: string
  balance: number
  createdAt: number
}

let acc1: Account = {
  id: "jksdbfkjds",
  balance: 200,
  createdAt: 167123423423
}

let acc2: Account = {
  id: "sdfdsfgsd",
  balance: 100,
  createdAt: 1312342348
}
let acc3: Account = {
  id: "8iuztiuz",
  balance: 2000,
  createdAt: 167123423423
}

let acc4: Account = {
  id: "sdgfdgffdg",
  balance: 1003,
  createdAt: 1312342348
}
let acc5: Account = {
  id: "fdsfsd",
  balance: 2003,
  createdAt: 167123423423
}

let acc6: Account = {
  id: "asdsad",
  balance: 1002,
  createdAt: 1312342348
}


let transfer = (sender: Account, receiver: Account, amount: number): void => {
  sender.balance = sender.balance - amount
  receiver.balance = receiver.balance + amount
}

transfer(acc1, acc2, 10)
transfer(acc3, acc1, 30)
transfer(acc6, acc1, 40)
console.log(acc1)


acc1.balance = acc1.balance - 10
acc2.balance = acc2.balance + 10
acc3.balance = acc3.balance - 30
acc1.balance = acc1.balance + 30
acc6.balance = acc6.balance - 40
acc1.balance = acc1.balance + 40

