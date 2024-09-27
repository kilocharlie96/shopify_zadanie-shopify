const exitButton = document.querySelector('.btn-exit');
const overlay = document.querySelector('.overlay');

window.addEventListener('load', function() {
    if (!sessionStorage.getItem('overlayDisplayed')) {
        setTimeout(function() {
            overlay.classList.remove('hidden');
            sessionStorage.setItem('overlayDisplayed', 'true');
        }, 2000); // 2 sekundy, pre prezentačné účely
    }
});

exitButton.addEventListener('click', function() {
    overlay.classList.add('hidden');
});

document.querySelector('.btn-success').addEventListener('click', function() {
    document.querySelector('.overlay').classList.add('hidden');
});