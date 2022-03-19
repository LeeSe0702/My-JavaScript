//////////////// Always const !!
//////////////// Sometimes let !!
//////////////// Never var !!
//변수 선언 국룰이다.. !!!!!

// //배열만들기

// const testArray = [1, undefined, null, "Test",'likeYou'];
// console.log(testArray);
// console.log(testArray[2]);

// const mon = "Monday";
// const tue = "Thuesday";
// const wed = "Wednsday";
// const thu = "Thuseday";
// const fri = "Friday";
// const sat = "Satuerday";
// const sun = "Sunday";

// const dayOfWeeks  = [mon,tue,wed,thu,fri,sat];
// //배열 값 가져오기
// console.log(dayOfWeeks);
// console.log(dayOfWeeks[5]);

// //배열 값 추가해보기
// dayOfWeeks.push(sun);
// console.log(dayOfWeeks);

// //쇼핑몰에 이런식으로 배열이 쓰인다
// const BuyThing = ['potato','tomato','Mango'];
// BuyThing.push('Ghost');
// console.log(BuyThing);

// console.log(BuyThing[2]); //세번째 배열
// console.log(BuyThing[124968498]); //Undefine

// //이번엔 Object
// const playerName = "abc9407";
// const playerPoint = 1211212;

// //////////////////////
// //Player[0] == Name
// //Player[1] == Have Point
// //개발자에게 명시해줘서 사용하는 방식.

// const Player_Array = ['abc9407',121212];
// // 위 처럼 Variable 이나, Array 로는 게이머의 정보를 담기에는 부적절하다.. 이럴땐 Object를 사용하는거임.
// //시작
// const playerObject  = {
//     myName : "Se Hyeong",
//     myPoint : 10,
//     myFatYN : true, //쉼표는 항상 붙히면 됨. 마지막줄 상관x

// };

// console.log(playerObject);
// console.log(playerObject.myPoint);
// console.log(playerObject["myName"]);
// //////////////////////////////////////////////////////////

// //Object 가 Constant로 선언되었어도, 그 안의 값들은 수정이 가능함.. !
// //constant 로 선언되었을 경우, 막히는건,
// //playerObject = false;
// // 이런 식으로 처리되었을 때 오류 반환함
// console.log(playerObject);
// playerObject.myName = "세형킹";
// playerObject.myPoint = playerObject.myPoint  + 15;
// console.log(playerObject);

// /////////////
// // function 만들기

// function sayHello(getName, getAge){
//     console.log("hello my Name is " + getName + ". and I'm "+ getAge);
// }

// sayHello("이세형", 29);
// sayHello("안재성", 29);
// sayHello("이운형", 28);
// sayHello("이정욱", 29);

///////////////
// function 으로 계산기만들자
console.log('----------------------------------------------------');
console.log('계산기 만들기');
console.log('----------------------------------------------------');
function plus(firstNumber, secondNumber) {
    console.log(firstNumber + ' 와 ' + secondNumber + ' 를 더하면?');
    console.log(firstNumber + secondNumber);
}
plus(8, 61);

console.log('----------------------------------------------------');

function divide(firstNumber, secondNumber) {
    console.log(firstNumber + ' 와 ' + secondNumber + ' 를 나누면?');
    console.log(firstNumber / secondNumber);
}

divide(1, 2);

console.log('----------------------------------------------------');

const player = {
    name: 'seHyeong',
    sayHello: function (otherPersonsName) {
        console.log('hello bye bye ' + otherPersonsName + ' nice to meet you ! ');
    },
};

console.log(player.name);
player.sayHello('Rain');
player.sayHello('Nico');

// 계산기 오브젝트를 만들어서 펑션을 생성 후, 해당 프로퍼티를 호출해보자 !!

const makeCalcMachine = {
    plus: function (a, b) {
        alert(a + ' And ' + b + ' ...두 수의 합은 ? ' + (a + b));
    },
    minus: function (a, b) {
        alert(a + ' And ' + b + ' ...두 수의 차는 ? ' + (a - b));
    },
    multiply: function (a, b) {
        alert(a + ' And ' + b + ' ...두 수의 곱은 ? ' + a * b);
    },
    divide: function (a, b) {
        alert(a + ' And ' + b + ' ...두 수의 나눈 값은 ? ' + a / b);
    },
    modify: function (a, b) {
        alert(a + ' And ' + b + ' ...두 수를 나눈 후의 나머지는? ? ' + (a % b));
    },
    power: function (a, b) {
        alert(a + ' And ' + b + ' ...a를 b재곱했을 경우의 값은?? ? ' + a ** b);
    },
};

makeCalcMachine.plus(1, 2);
makeCalcMachine.minus(1, 2);
makeCalcMachine.multiply(1, 2);
makeCalcMachine.divide(1, 2);
makeCalcMachine.modify(3, 5);
makeCalcMachine.power(3, 5);
