/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


/* =========================
   LEARNING TOPICS
========================= */

function showTopic(topic) {

    const content = {

        smartphone: {

            title: "📱 Smartphone Basics",

            text: "Learn the basic features of your smartphone.",

            points: [
                "How to make and receive calls",
                "How to save a contact",
                "How to adjust volume and brightness",
                "How to use the camera",
                "How to open and use applications"
            ]

        },


        whatsapp: {

            title: "💬 WhatsApp",

            text: "Learn how to communicate with family and friends using WhatsApp.",

            points: [
                "How to send a message",
                "How to send photos",
                "How to make voice and video calls",
                "How to use WhatsApp groups",
                "How to identify suspicious messages"
            ]

        },


        payments: {

            title: "💳 Digital Payments",

            text: "Learn the basics of UPI and QR-code payments.",

            points: [
                "What is UPI?",
                "What is a QR code?",
                "How digital payments work",
                "Never share your UPI PIN",
                "Always verify the receiver before paying"
            ]

        },


        internet: {

            title: "🌐 Internet",

            text: "Learn how to find useful information online.",

            points: [
                "How to open a browser",
                "How to search for information",
                "How to identify trustworthy websites",
                "How to use online services safely",
                "Avoid suspicious websites and links"
            ]

        },


        email: {

            title: "📧 Email",

            text: "Learn the basics of electronic mail.",

            points: [
                "How to open an email account",
                "How to read an email",
                "How to send an email",
                "How to attach a file or photo",
                "How to recognize suspicious emails"
            ]

        },


        safety: {

            title: "🔐 Online Safety",

            text: "Protect yourself while using digital services.",

            points: [
                "Never share OTPs",
                "Never share passwords",
                "Never share your UPI PIN",
                "Do not click unknown links",
                "Verify suspicious calls and messages"
            ]

        }

    };


    const selected = content[topic];

    if (!selected) {
        return;
    }


    document.getElementById("modalTitle").textContent =
        selected.title;


    document.getElementById("modalText").textContent =
        selected.text;


    const list =
        document.getElementById("modalList");

    list.innerHTML = "";


    selected.points.forEach(function (point) {

        const li = document.createElement("li");

        li.textContent = point;

        list.appendChild(li);

    });


    document
        .getElementById("topicModal")
        .classList.add("show");

}


/* =========================
   CLOSE MODAL
========================= */

function closeModal() {

    document
        .getElementById("topicModal")
        .classList.remove("show");

}


/* Close modal when clicking outside */

window.addEventListener("click", function (event) {

    const modal =
        document.getElementById("topicModal");

    if (event.target === modal) {

        closeModal();

    }

});


/* =========================
   ESCAPE KEY
========================= */

window.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeModal();

        navLinks.classList.remove("show");

    }

});