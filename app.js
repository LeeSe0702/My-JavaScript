//배열만들기

const testArray = [1, undefined, null, "Test",'likeYou'];
console.log(testArray);
console.log(testArray[2]);


const mon = "Monday";
const tue = "Thuesday";
const wed = "Wednsday";
const thu = "Thuseday";
const fri = "Friday";
const sat = "Satuerday";
const sun = "Sunday";

const dayOfWeeks  = [mon,tue,wed,thu,fri,sat];
//배열 값 가져오기
console.log(dayOfWeeks);
console.log(dayOfWeeks[5]);


//배열 값 추가해보기
dayOfWeeks.push(sun);
console.log(dayOfWeeks);



//쇼핑몰에 이런식으로 배열이 쓰인다
const BuyThing = ['potato','tomato','Mango'];
BuyThing.push('Ghost');
console.log(BuyThing);

console.log(BuyThing[2]); //세번째 배열
console.log(BuyThing[124968498]); //Undefine