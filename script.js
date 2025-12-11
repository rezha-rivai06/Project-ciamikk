let clickCount = 0;
let isPlaying = false;

const messages = [
    "Barabarakallah fii umrik de..",
    "Maaf ya de, mas Rezha belum bisa kasih kado",
    "Hanya ini dan doa terbaik",
    "selalu saya sama bunda ayah ya de..",
    "Mas Rezha doakan",
    "Cita cita ade bisa tercapai",
    "Amiin ya allah.."
];

function celebrate() {
    const messageEl = document.getElementById('message');
    const hearts = document.querySelectorAll('.heart');
   
    messageEl.textContent = messages[clickCount % messages.length];
    messageEl.classList.add('show');
   
    setTimeout(() => {
        messageEl.classList.remove('show');
    }, 2000);
    
    hearts.forEach(heart => {
        heart.style.animation = 'none';
        setTimeout(() => {
            heart.style.animation = 'heartFloat 3s ease-in-out infinite';
        }, 10);
    });
    
    clickCount++;
}

function toggleMusic() {
    const music = document.getElementById('birthdayMusic');
    const musicButton = document.getElementById('musicButton');
    const musicIcon = musicButton.querySelector('.music-icon');
    const messageEl = document.getElementById('message');
    
    if (!isPlaying) {
        music.play().then(() => {
            isPlaying = true;
            musicButton.classList.add('playing');
            musicIcon.textContent = '❚❚';

            messageEl.textContent = 'Musik sedang diputar!';
            messageEl.classList.add('show');
            setTimeout(() => {
                messageEl.classList.remove('show');
            }, 1000);
        }).catch(error => {
            console.error("Error playing music:", error);
            messageEl.textContent = 'Tidak dapat memutar musik';
            messageEl.classList.add('show');
            setTimeout(() => {
                messageEl.classList.remove('show');
            }, 1000);
        });
    } else {
        music.pause();
        isPlaying = false;
        musicButton.classList.remove('playing');
        musicIcon.textContent = '►';

        messageEl.textContent = 'Musik dihentikan';
        messageEl.classList.add('show');
        setTimeout(() => {
            messageEl.classList.remove('show');
        }, 1000);
    }
}

document.getElementById('birthdayMusic').onended = function() {
    isPlaying = false;
    document.getElementById('musicButton').classList.remove('playing');
    document.querySelector('.music-icon').textContent = '►';

    const messageEl = document.getElementById('message');
    messageEl.textContent = 'Lagu selesai ♪ Klik lagi untuk putar ulang';
    messageEl.classList.add('show');
    setTimeout(() => messageEl.classList.remove('show'), 4000);
};