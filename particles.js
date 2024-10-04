particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#FFB6C1"
        },
        shape: {
            type: "circle", 
            stroke: {
                width: 0,
                color: "#FFB6C1"
            }
        },
        opacity: {
            value: 0.7, 
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 4,
            random: true, 
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false, 
            distance: 150,
            color: "#FFB6C1",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true, 
            speed: 0.6,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce", 
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
                mode: "repulse" 
            },
            onclick: {
                enable: true,
                mode: "push" 
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
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true // Enable retina display support
});
