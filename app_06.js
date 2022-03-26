const h1 = document.querySelector('.hello:first-child h1');
console.log(h1);

function handleTitleClick() {
    console.log(h1.style.color);
    const currentColor = h1.style.color;
    let newColor;

    //조건문으로 색상 변경되도록?
    if (currentColor === 'blue') {
        newColor = 'tomato';
    } else {
        newColor = 'blue';
    }
    h1.style.color = newColor;
}

h1.addEventListener('click', handleTitleClick);
