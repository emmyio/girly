document.addEventListener('DOMContentLoaded', () => {
    const volumeControl = document.getElementById('volume');
    const audioElements = document.querySelectorAll('audio');
    let currentAudio = null;
    document.querySelectorAll('.friend-section').forEach(section => {
        section.addEventListener('mouseenter', () => {
            const friend = section.getAttribute('data-friend');
            const audioElement = document.getElementById(`${friend}-audio`);

            if (currentAudio && currentAudio !== audioElement) {
                currentAudio.pause(); 
                currentAudio.currentTime = 0;
            }

            audioElement.play();
            currentAudio = audioElement;
        });
    });
    volumeControl.addEventListener('input', (event) => {
        const volume = event.target.value;
        audioElements.forEach(audio => {
            audio.volume = volume;
        });
    });
});
