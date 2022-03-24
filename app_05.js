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

// const title = document.querySelector('.hello:nth-child(2) h1');
const title = document.querySelector('.hello:first-child h1');
console.log(title);

function handleTitleClick() {
    console.log('타이틀 클릭함.');

    //내용 변경
    title.innerText = '클릭했어요!!';

    //색상변경
    title.style.color = 'blue';
}

function handleTitleMouseEnter() {
    console.log('타이틀에 마우스 올림.');
    title.innerText = '마우스가 올라왔어 !!';
    title.style.color = 'black';
}

function handleTitleMouseLeave() {
    console.log('타이틀에서 마우스가 떠나갔음.');
    title.innerText = '마우스가 떠났어 !!';
    title.style.color = 'red';
}

title.addEventListener('click', handleTitleClick);
// ㄴ title.onclick = handleTitleClick; // 이런식으로 호출도 가능한데, 비추..
title.addEventListener('mouseenter', handleTitleMouseEnter);
title.addEventListener('mouseleave', handleTitleMouseLeave);

////////////////윈도우 변경 이벤트 (창 사이즈조절)
function handleWindowResize() {
    //document.body.style.backgroundColor = 'tomato';
    console.log('리사이즈 되면서 배경색 변경됐음.');
    if (document.body.style.backgroundColor === 'tomato') {
        document.body.style.backgroundColor = 'skyblue';
    } else {
        document.body.style.backgroundColor = 'tomato';
    }
}

window.addEventListener('resize', handleWindowResize);

////////////// copy 관련 이벤트 조작 /////////////
//복사 금지 알림과 함께, 클립보드 초기화 조작해야하나, 여기서는 그냥 알림만...
//나중에 추가해보자.
function handleWindowCopy() {
    alert('복사금지!!');
}
window.addEventListener('copy', handleWindowCopy);

// 인터넷 연결 관련 이벤트 처리.

function handleWindowOnline() {
    alert('인터넷 연결됨!');
}
function handleWindowOffline() {
    alert('인터넷에 연결되어 있지 않음.');
}

window.addEventListener('online', handleWindowOnline);
window.addEventListener('offline', handleWindowOffline);
