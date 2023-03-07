function createText(){
    const article = document.querySelector('.wrapper');
    const p = document.createElement('p');
    p.textContent='hello World';
    article.appendChild(p);
}


// console.log("this is calle from OUTSIDE a function")

function myFirstFunciton(){
    console.log("this is calle from inside a function")
}

// myFirstFunciton();

function changeBodyColor() {
    console.log("Body color changed");
    document.body.style.setProperty('background-color', 'blue');
}

function addImage(){
    console.log("image added");
    const figure = document.querySelector('figure');
    const img = document.createElement('img');
    img.src='https://picsum.photos/id/1074/300';
    img.width=300;
    img.setAttribute('alt','some image alt');
    figure.appendChild(img);
}

function addClassToBody(){
    console.log('class added to body');
    document.body.classList.add('dark');

}

function dblClicked(){
    console.log('you double clicked this button');

}

function lastButtonAction(){
    console.log('last button action triggered');

}


//Adding event lister to and element (have the body change color when the button is pressed)
document.querySelector('[data-btn]').addEventListener('click',changeBodyColor);


document.querySelector('#fake-button').addEventListener('click', addClassToBody)

// document.querySelector('[data-last-button').addEventListener('dblclick', lastButtonAction) //only activate the function when there is a double click on the element

document.querySelector('[data-last-button').addEventListener('mouseover', lastButtonAction)