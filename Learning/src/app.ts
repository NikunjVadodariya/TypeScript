
type combineble = number | string
type com = "number" | "test"
function add(n1: combineble, n2: number, r: com)

 {   let result;
     if(typeof n1 === 'number' && typeof n2 === "number"){
     result =  n1 + n2
 }
 else{
     result =  n1.toString() + n2.toString()
 }
  
 if (r === "number"){
     result = + result
 }
    return result
    
}

function additional(n1: number, n2:number){
    console.log('Hello')
    return n1 + n2
}


function print1(){
    console.log('Hello')
}

console.log(print1())



console.log(add(1, 2, "number"))
console.log(add('num', 5, 'number'))

const n1= 5
const n2=10
enum roles {ADMIN=5, AUTHOR};
console.log(roles.ADMIN)
const str: string = "Nikunj"
const o
// {
//     name: string;
//     type: string,
//     hobbies: any[],
//     role: [number,string],
//     roles: any
// }
 = {
    "type": "ello",
    "name": "Nikunj",
    hobbies: ["s", "C"],
    role: [2, 'authurs'],
    roles: 1
}

var as: string []

var anytyoe: any []
for(const h of o.hobbies){
    console.log(h)
}

o.role[1]= 'hello'

console.log(o.type)
console.log(add(n1, n2, "number"))

// fixed lengtht arry fixead type == tuple
// Enum


let any_var: Function;
any_var = print1
any_var()

let any_funcction: (a: number, b: number) => number

let user: unknown
user = 5;
user = "Helllo"

let st: string
// Error   st = user

// void means ignore thr return type 

// function err(message: string): void{
//     throw {message: message}
// }

function err(message: string){
    return "Hello"
}
err("err orocured")

// void = retuen undefined


function test(data: string){

console.log(data)

}

test("hello")


let result;
console.log(result)
result = "Hello"
console.log(result)
result = 5
console.log(result)


const b = document.querySelector('button')!

// b.addEventListener('click', test.bind(null))  --> Error as not given the first argument
b.addEventListener('click', test.bind(null, "Hello"))


function dd(a: number){
    if (a == 5){
        return 6
    }
    return
}

dd(7)