"use strict";
function add(n1, n2, r) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    if (r === "number") {
        result = +result;
    }
    return result;
}
function additional(n1, n2) {
    console.log('Hello');
    return n1 + n2;
}
function print1() {
    console.log('Hello');
}
console.log(print1());
console.log(add(1, 2, "number"));
console.log(add('num', 5, 'number'));
var n1 = 5;
var n2 = 10;
var roles;
(function (roles) {
    roles[roles["ADMIN"] = 5] = "ADMIN";
    roles[roles["AUTHOR"] = 6] = "AUTHOR";
})(roles || (roles = {}));
;
console.log(roles.ADMIN);
var str = "Nikunj";
var o 
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
};
var as;
var anytyoe;
for (var _i = 0, _a = o.hobbies; _i < _a.length; _i++) {
    var h = _a[_i];
    console.log(h);
}
o.role[1] = 'hello';
console.log(o.type);
console.log(add(n1, n2, "number"));
// fixed lengtht arry fixead type == tuple
// Enum
var any_var;
any_var = print1;
any_var();
var any_funcction;
var user;
user = 5;
user = "Helllo";
var st;
// Error   st = user
// void means ignore thr return type 
// function err(message: string): void{
//     throw {message: message}
// }
function err(message) {
    return "Hello";
}
err("err orocured");
// void = retuen undefined
function test(data) {
    console.log(data);
}
test("hello");
var result;
console.log(result);
result = "Hello";
console.log(result);
result = 5;
console.log(result);
var b = document.querySelector('button');
// b.addEventListener('click', test.bind(null))  --> Error as not given the first argument
b.addEventListener('click', test.bind(null, "Hello"));
function dd(a) {
    if (a == 5) {
        return 6;
    }
    return;
}
dd(7);
//# sourceMappingURL=app.js.map