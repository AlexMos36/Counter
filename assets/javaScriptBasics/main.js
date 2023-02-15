//function to create elements, attribute and text in Html

function createElement (tag, id, content){
    element=document.createElement(tag);
    element.id=id;
    element.innerHTML=content;
    return element
}

//implementation HTML

const containerElement = createElement ('div', 'container', '')
document.body.appendChild(containerElement);

const titleElement = createElement ('h1', 'title', 'Counter');
containerElement.appendChild(titleElement);

const containerNumber = createElement ('div', 'container-number', '')
containerElement.appendChild(containerNumber)

const displayNumber = createElement ('h2', 'number', '0');
containerNumber.appendChild(displayNumber);

const containerButtons = createElement ('div', 'btns', '');
containerElement.appendChild(containerButtons);

const decreaseElement = createElement ('button', 'decrease', '-');
containerButtons.appendChild(decreaseElement);

const resetElement = createElement ('button', 'reset', 'Reset');
containerButtons.appendChild(resetElement);

const increaseElement = createElement ('button', 'increase', '+');
containerButtons.appendChild(increaseElement);

//implementation JavaScript

let count = 0;

containerButtons.addEventListener('click', (event) => {
    const target = event.target;

//return buttons functional

switch (target.id){
    case 'decrease':
        if (count <= 0){
            count--
        }else{
            count--
        }
        break;

    case 'reset':
        count=0
        break;

    case 'increase':
        if (count>=0){
            count++
        }else {
            count++
        }
}
 displayNumber.innerHTML = count;
});