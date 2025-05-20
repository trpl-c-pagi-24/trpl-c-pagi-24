document.addEventListener('DOMContentLoaded', function() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate elements with gsap-fade-in class
    gsap.utils.toArray('.gsap-fade-in').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            y: 20,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
    
    // Animate elements with gsap-slide-up class
    gsap.utils.toArray('.gsap-slide-up').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
    
    // Animate elements with gsap-slide-left class
    gsap.utils.toArray('.gsap-slide-left').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            x: -50,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
    
    // Animate elements with gsap-slide-right class
    gsap.utils.toArray('.gsap-slide-right').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            x: 50,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
    
    // Animate elements with gsap-scale-up class
    gsap.utils.toArray('.gsap-scale-up').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
    
    // Hero section animation
    gsap.from("#home h1", {
        opacity: 0,
        y: -30,
        duration: 1,
        delay: 0.3
    });
    
    gsap.from("#home p", {
        opacity: 0,
        y: -20,
        duration: 1,
        delay: 0.6
    });
    
    gsap.from("#home .btn-primary", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.9
    });
    
    gsap.from("#home .btn-secondary", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.1
    });
    
    // Floating animation for elements
    gsap.utils.toArray('.floating').forEach(element => {
        gsap.to(element, {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });
});