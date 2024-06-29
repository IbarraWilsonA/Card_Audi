const card = document.querySelector('.card-container');
const audio = document.querySelector('.audio');

card.addEventListener('mouseenter', () => {
    audio.play();
});

card.addEventListener('mouseleave', () => {
    audio.pause();
    audio.currentTime = 48.29;
});