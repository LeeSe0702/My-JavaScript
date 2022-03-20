// const age = prompt('How Old Are You?');
// console.log(age, typeof age);
// // typeof 변수 하면 데이터타입을 알 수 있어.. !

// // Data Type 변환하기
// console.log(parseInt(age), typeof parseInt(age));
// console.log(age, parseInt(age));

const age = parseInt(prompt('How old are you???'));
console.log(age, typeof age);

//여기서 입력된 문자가 숫자가 아닐경우, if문 추가 (처음해보지)

console.log(isNaN(age));

if (isNaN(age) || age < 0) {
    //or 연산자 사용..!
    alert('나이로 사용할 수 있는 값을 입력해 주세요.');
} else if (age < 18) {
    alert('어리시군요');
} else if (age >= 18 && age <= 50) {
    alert('적당한 나이시군요 환영합니다.');
} else if (age > 50 && age <= 80) {
    alert('운동하세요');
} else if (age > 80) {
    alert('언제오시든 환영합니다.');
} else {
    //else 없으면 작성 안하면 됨.
    alert('나이가 많은 분. 환영합니다.');
}

// AND(&&) OR(||) 비교
// true || true = true
// true || false = true
// false || true = true
// false || false = false

// true && true = true
// true && false = false
// false && true = false
// false && false = false
