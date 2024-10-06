document.addEventListener('DOMContentLoaded', () => {
    const volumeControl = document.getElementById('volume');
    const audioElements = document.querySelectorAll('audio');
    let currentAudio = null;

    // Event listener for hovering over each friend section
    document.querySelectorAll('.friend-section').forEach(section => {
        section.addEventListener('mouseenter', () => {
            const friend = section.getAttribute('data-friend');
            const audioElement = document.getElementById(`${friend}-audio`);

            // Pause and reset the currently playing audio if switching to another
            if (currentAudio && currentAudio !== audioElement) {
                currentAudio.pause(); 
                currentAudio.currentTime = 0;
            }

            audioElement.play();
            currentAudio = audioElement;
        });
    });

    // Event listener for volume control input changes
    volumeControl.addEventListener('input', (event) => {
        const volume = event.target.value;
        audioElements.forEach(audio => {
            audio.volume = volume;
        });
    });

    // ==============================
    // "Come back now!" Feature
    // ==============================

    // Store the original title of the document
    const originalTitle = document.title;

    // Function to change the title based on visibility
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            document.title = "come back ho"; // Title when user switches tabs or minimizes
        } else {
            document.title = originalTitle; // Restore original title when user returns
        }
    });
});

