
const [yesButton, noButton] = document.querySelectorAll('button');
yesButton.addEventListener('click', displayMessage);
noButton.addEventListener('mouseenter', moveButton);
noButton.addEventListener('mousemove', moveButton);


function moveButton(){
    noButton.style.transform = `translate(${Math.random() * 300}px, ${Math.random() * 50}px)`;
}

function displayMessage(){
    alert('LOVE YOU TOO');
}