document.addEventListener('DOMContentLoaded', function() {
    const mainElement = document.querySelector('main');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'JavaScript is working!';
    mainElement.appendChild(newParagraph);
});