document.addEventListener('DOMContentLoaded', () => {
    // Volume Control and Audio Elements
    const volumeControl = document.getElementById('volume');
    const audioElements = document.querySelectorAll('audio');
    let currentAudio = null;

    // ==============================
    // Friend Section Hover Handling
    // ==============================
    document.querySelectorAll('.friend-section').forEach(section => {
        section.addEventListener('mouseenter', () => {
            const friend = section.getAttribute('data-friend');
            const audioElement = document.getElementById(`${friend}-audio`);

            // Pause and reset the currently playing audio if switching to another
            if (currentAudio && currentAudio !== audioElement) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }

            // Play the new audio and set it as the current audio
            audioElement.play();
            currentAudio = audioElement;
        });
    });

    // ==============================
    // Volume Control Input Handling
    // ==============================
    volumeControl.addEventListener('input', (event) => {
        const volume = event.target.value;
        audioElements.forEach(audio => {
            audio.volume = volume;
        });
    });

    // ==============================
    // "come back ho" Feature
    // ==============================
    const originalTitle = document.title; // Store the original title of the document

    document.addEventListener("visibilitychange", () => {
        // Change the title based on visibility state
        if (document.hidden) {
            document.title = "come back ho"; // Title when the user switches tabs or minimizes
        } else {
            document.title = originalTitle; // Restore original title when user returns
        }
    });
});
