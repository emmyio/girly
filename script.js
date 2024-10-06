document.addEventListener('DOMContentLoaded', () => {
    // Volume Control and Audio Elements
    const volumeControl = document.getElementById('volume');
    const audioElements = document.querySelectorAll('audio');
    let currentAudio = null;

    // Set initial volume for all audio elements to be quieter
    audioElements.forEach(audio => {
        audio.volume = 0.2; // Set a lower volume, e.g., 20% of full volume
    });

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
            audio.volume = volume; // Set all audio elements to the input volume
        });
    });

    // ==============================
    // "Come Back Now!" Feature
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
