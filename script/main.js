// const languages=["php", "php", "css", "css", "script", "script", "html", "html", "java"];
// const result=[];
// languages.forEach((item)=>{
//     if (!result.find(value=>item===value)){
//         result.push(item);
//     }
// });
// console.log(result);

// const falsyArray=[NaN, 0, 77, false, -17, '', undefined, 99, null];
// const filteredResult=falsyArray.filter(item=>!!item);
// console.log(filteredResult);
// const sum1=1+2*2;
// const sum2=6+7*2;
// const sum3=3+4*8;
// const total=sum1+sum2+sum3;

// function sum(a,b,c){
//     return a+b*c;
// }
// const totalByFun=sum(6,2,3)+sum(6,7,4)+sum(3,4,8);
// console.log(totalByFun); функции

// let a = 10;
// function foo (a) {
// a = 7;
// console.log(a);
// };
// foo(a)
// console.log(a); 

// function sayHello (name){
//     alert('hello '+name);
// };
// sayHello('Alex');


// function getMinMax(mass) {
//     let min, max;
//     mass.forEach((item) => {
//         if (min === undefined) {
//             min = item;
//         }
//         if (max === undefined) {
//             max = item;
//         }
//         if (min > item) {
//             min = item;
//         }
//         if (max < item) {
//             max = item;
//         }
//     })
//     return {
//         min: min,
//         max: max
//     };
// }
// function getMinMax(mass) {
// return {
//     max: Math.max.apply(null, mass),
//     min: Math.min.apply(null, mass)
//     }
// }
// console.log(getMinMax([1, 7, 9, -8, 16, 4, 22, -10, 44]))

// let obj = {
//     name: 'biba',
//     lastName: 'bibas',
//     getFullName: function () {
//         return this.name + ' ' + this.lastName
//     }
// }
// console.log(obj.getFullName());
// console.log(Object.keys(obj));
// console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.values(obj));
// console.log(obj.hasOwnProperty('text'));

// const user={
//     name:'text'
// }
// const test={...user};
// test.name="new"
// console.log(user.name);
// console.log(test.name);

// const obj={a:1,
//             b:2, 
//             c:3};
// console.log(obj.c);
// console.log(obj['c']);

// const obj={
//     Den: 1000,
//     Matt: 5000,
//     Steve: 2000
// }
// console.log(obj.Matt)
// console.log(obj.Steve)

let obj={
    1:'понедельник',
    2:'вторник',
    3:'среда',
    4:'четверг',
    5:'пятница',
    6:'суббота',
    7:'воскресенье'
}
let day=5;
console.log(obj[day])