// script.js
function showEventDetails(eventType) {
    // Data for each event
    const eventData = {
        singers: {
            title: "Singers",
            description: "Our talented singers perform various genres, including classical, pop, and Bollywood.",
            image: "images/singers.jpg"
        },
        dancers: {
            title: "Dancers",
            description: "Professional dancers who bring energy and passion to every performance.",
            image: "images/dancers.jpg"
        },
        "magic-show": {
            title: "Magic Show",
            description: "Magicians who amaze the audience with mind-blowing tricks and illusions.",
            image: "images/magic-show.jpg"
        },
        anchors: {
            title: "Anchors",
            description: "Experienced anchors who keep the event lively and engaging.",
            image: "images/anchors.jpg"
        },
        comedy: {
            title: "Comedy Team",
            description: "The comedy team entertains with humorous skits and performances.",
            image: "images/comedy.jpg"
        },
        karaoke: {
            title: "Track/Karaoke Singers",
            description: "Interactive karaoke sessions with live singing to popular tracks.",
            image: "images/karaoke.jpg"
        }
    };

    // Get the selected event data
    const selectedEvent = eventData[eventType];

    if (selectedEvent) {
        // Update the details section with the selected event's data
        document.getElementById("event-title").textContent = selectedEvent.title;
        document.getElementById("event-description").textContent = selectedEvent.description;
        document.getElementById("event-image").src = selectedEvent.image;
        document.getElementById("event-image").alt = selectedEvent.title;

        // Show the event details section
        document.getElementById("event-details").style.display = "block";
    }
}

// Slideshow functionality
let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll(".slides img");
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
        if (index === slideIndex) {
            slide.classList.add("active");
        }
    });
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000);
}

// Start the slideshow
window.onload = showSlides;
