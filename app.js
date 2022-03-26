const h1 = document.querySelector('.hello:first-child h1');
console.log(h1);

function handleTitleClick() {
    // h1.className = 'active';
    console.log(h1.className);
    //변수 선언해서 오류를 줄여보자 .
    // const activeClass = 'active';
    // if (h1.className === activeClass) {
    //     h1.className = '';
    // } else {
    //     h1.className = activeClass;
    // }
    // //위 처리는, 기존 h1 개체에 클래스가 지정되어있을 경우,
    // //기존 클래스를 지워버리는 오류가 발생할 수 있음.

    // const activeClass = 'active';
    // if (h1.classList.contains(activeClass)) {
    //     h1.classList.remove(activeClass);
    // } else {
    //     h1.classList.add(activeClass);
    // }

    // //위와 같이 조치하면, class를 넣었다 뺏다 자유롭게 가능함.
    // // 하지만,, 위 코딩을 펑션 하나로도 추가 가능함.

    h1.classList.toggle('active');
    //이것처럼
    //toggle()은 클래스명이 있는지 판단해서 넣었다 뺏다 해주는 펑션임
    //정말 자주쓰게 될 듯..[2022-03-27]
}

h1.addEventListener('click', handleTitleClick);
