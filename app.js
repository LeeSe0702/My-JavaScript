// const title = document.getElementById('title');
// console.log(title);

// title.innerText = '잡았다 !!';
// title.className =  '클래스네임 !!';
// console.log(title.id);
// console.log(title.className);

//getElementById 는 가끔가다 쓸거고 95% 이상은 querySelector 사용할것..! 펑션에서 사용하는 값은 css형식임
// ID : ABC = > #ABC
// Class : BBC = > .BBC
//이렇게 사용.. !

//제목바꿔보기!!
const mainTitle = document.querySelector('title');
console.log(mainTitle.innerText);
mainTitle.innerText = '원래 제목에서 변경된 제목입니다.';
console.log(mainTitle.innerText);

const title = document.querySelector('.hello h1');
title.innerText = '안녕하세요 !!';
