const exitButton = document.querySelector('.btn-exit');
const overlay = document.querySelector('.overlay');

window.addEventListener('load', function() {
    setTimeout(function() {
        overlay.classList.remove('hidden');
    }, 2000); //nastavené 2 sekundy, pre prezentačné účely, aby sa nemuselo dlho čakať
});

exitButton.addEventListener('click', function() {
    overlay.classList.add('hidden');
});