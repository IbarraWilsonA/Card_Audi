const cards = document.querySelectorAll('.card-container');
const audios = document.querySelectorAll('.audio');

cards.forEach((card, index) => {

    const audio = audios[index];

    card.addEventListener('mouseenter', () => {
        audio.play();
    });

    card.addEventListener('mouseleave', () => {
        audio.pause();
        audio.currentTime = 0;
    });
});