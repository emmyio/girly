// Custom script to handle hover functionality for audio playback
document.addEventListener('DOMContentLoaded', () => {
    const volumeControl = document.getElementById('volume');
    const audioElements = document.querySelectorAll('audio');
    let currentAudio = null;

    document.querySelectorAll('.friend-section').forEach(section => {
        section.addEventListener('mouseenter', () => {
            const friend = section.getAttribute('data-friend');
            const audioElement = document.getElementById(`${friend}-audio`);

            if (currentAudio && currentAudio !== audioElement) {
                currentAudio.pause(); // Pause the currently playing audio
                currentAudio.currentTime = 0; // Reset to the beginning
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