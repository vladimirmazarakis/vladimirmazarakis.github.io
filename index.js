function fibonacci(startNumberOne, startNumberTwo, count){
    let result = [startNumberOne, startNumberTwo];
    for(var i = 0; i < count; i++){
        let curr = result[i];
        let next = result[i + 1];
        result.push(curr + next);   
    }       
    return result;
}

const fibonacciForm = document.querySelector('.fibonacci-block__inputs-container__inputs__form');
fibonacciForm.addEventListener('submit', onFibonacciFormSubmit);

function onFibonacciFormSubmit(event){
    event.preventDefault();
    let numberOneField = parseInt(event.target.querySelector('#number-one').value);
    let numberTwoField = parseInt(event.target.querySelector('#number-two').value);
    let count = parseInt(event.target.querySelector('#count').value);
    let fibonacciArray = fibonacci(numberOneField, numberTwoField, count);
    let fibonacciBlocksContainer = document.querySelector('.fibonacci-block__blocks__row');
    fibonacciBlocksContainer.innerHTML = '';
    for(let i = 0; i < fibonacciArray.length; i++){
        let number = fibonacciArray[i];
        let fibonacciBlockElement = document.createElement('div');
        fibonacciBlockElement.classList.add('fibonacci-block__blocks__row__block'); 
        let fibonnaciBlockNumberElement = document.createTextNode(number.toString());
        fibonacciBlockElement.appendChild(fibonnaciBlockNumberElement);
        fibonacciBlocksContainer.append(fibonacciBlockElement);
    }
}