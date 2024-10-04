// Custom configuration for particles.js
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80, // Number of particles
            density: {
                enable: true,
                value_area: 800 // Density area
            }
        },
        color: {
            value: "#FFB6C1" // Light pink color for particles
        },
        shape: {
            type: "circle", // Shape of the particles
            stroke: {
                width: 0,
                color: "#FFB6C1" // Light pink color for the border
            }
        },
        opacity: {
            value: 0.7, // Opacity of particles
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 4, // Size of particles
            random: true, // Randomize size
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false, // Disable line links between particles
            distance: 150,
            color: "#FFB6C1",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true, // Enable particle movement
            speed: 0.6, // Speed of particle movement
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce", // Particles bounce when hitting edges
            bounce: true,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse" // Particles repulse away when hovered
            },
            onclick: {
                enable: true,
                mode: "push" // Add more particles on click
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 200,
                size: 6,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4 // Number of particles to add on click
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true // Enable retina display support
});