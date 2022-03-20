const age = 96;

function calculaterKrAge(ageOfForeigner) {
    ageOfForeigner + 2;
    return 'hello';

    // return 을 추가하면 펑션에서 결과값을 반환함.. 리턴없으면 결과값을 가져올 수 없음. !! 내부에서 로그를 찍는게 아닌이상..?
}

const krAge = calculaterKrAge(age);

console.log(krAge);

//----------------------------------
//저번에 만든 계산기 가져다가, return하는 것으로 변경해보기 !!
const makeCalcMachine = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    modify: function (a, b) {
        return a % b;
    },
    power: function (a, b) {
        return a ** b;
        //return 이후에는 동작하지않아...!
        console.log('hi'); //<<<< 회색깔로 뒤져있음.. !
    },
};

const plusResult = makeCalcMachine.plus(2, 3);
const minusResult = makeCalcMachine.minus(plusResult, 3);
const multiflyResult = makeCalcMachine.multiply(10, minusResult);
const divideResult = makeCalcMachine.divide(multiflyResult, plusResult);
const powerResult = makeCalcMachine.power(divideResult, minusResult);
console.log(plusResult);
console.log(minusResult);
console.log(multiflyResult);
console.log(divideResult);
console.log(powerResult);
