const ticket = [];

function highlightCard(selector) {
    var element = document.querySelector(selector);
    
    element.classList.toggle('card-highlight');
}

function addKeyboardEventListeners() {
    document.addEventListener('keydown', (event) => {

        var ticket1 = document.getElementById('quinta');
        var ticket2 = document.getElementById('sexta');
        var ticket3 = document.getElementById('sabado');
        var ticket4 = document.getElementById('domingo');

        var code = event.code;

        if (code == 'Digit1') {
            ticket1.classList.toggle('card-highlight');
            ticket2.classList.remove('card-highlight');
            ticket3.classList.remove('card-highlight');
            ticket4.classList.remove('card-highlight');
        }

        if (code == 'Digit2') {
            ticket1.classList.remove('card-highlight');
            ticket2.classList.toggle('card-highlight');
            ticket3.classList.remove('card-highlight');
            ticket4.classList.remove('card-highlight');
        }

        if (code == 'Digit3') {
            ticket1.classList.remove('card-highlight');
            ticket2.classList.remove('card-highlight');
            ticket3.classList.toggle('card-highlight');
            ticket4.classList.remove('card-highlight');
        }

        if (code == 'Digit4') {
            ticket1.classList.remove('card-highlight');
            ticket2.classList.remove('card-highlight');
            ticket3.classList.remove('card-highlight');
            ticket4.classList.toggle('card-highlight');
        }

    }, false);
}

addKeyboardEventListeners();

selectCard = (selector) => {
    var element = document.querySelector(selector)
    
    element.classList.toggle('card-selected');
    if (ticket.includes(selector)) ingressos.pop(selector);
    else ticket.push(selector);
}

showSelectedCards = () => {
    if (ticket.length > 0) {
        window.location.href = 'confirm.html';
    }
}