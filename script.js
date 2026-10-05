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
/* =========================
   SURVEY RESULTS CHARTS
========================= */

document.addEventListener("DOMContentLoaded", function () {

    /* AGE GROUP CHART */

    const ageChart = document.getElementById("ageChart");

    if (ageChart) {

        new Chart(ageChart, {
            type: "doughnut",

            data: {
                labels: [
                    "60–65 years",
                    "66–70 years",
                    "Above 75 years"
                ],

                datasets: [{
                    data: [7, 2, 1]
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                    legend: {
                        position: "bottom"
                    }
                }
            }
        });

    }


    /* DIGITAL LEARNING OUTCOMES */

    const learningChart =
        document.getElementById("learningChart");

    if (learningChart) {

        new Chart(learningChart, {
            type: "bar",

            data: {
                labels: [
                    "Smartphone Features",
                    "WhatsApp",
                    "Google Search",
                    "UPI / QR Payments",
                    "OTP & UPI PIN Safety",
                    "Suspicious Links / Calls",
                    "Digital Confidence"
                ],

                datasets: [{
                    label: "Participants (%)",
                    data: [100, 90, 100, 100, 100, 100, 90]
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,

                indexAxis: "y",

                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,

                        ticks: {
                            callback: function(value) {
                                return value + "%";
                            }
                        }
                    }
                },

                plugins: {
                    legend: {
                        display: false
                    },

                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.raw +
                                    "% of participants";
                            }
                        }
                    }
                }
            }
        });

    }


    /* MOST USEFUL TOPICS */

    const topicsChart =
        document.getElementById("topicsChart");

    if (topicsChart) {

        new Chart(topicsChart, {
            type: "bar",

            data: {
                labels: [
                    "Smartphone Basics",
                    "UPI / Payments",
                    "Google / Internet",
                    "Video Calling",
                    "Online Services",
                    "Cyber Safety"
                ],

                datasets: [{
                    label: "Participants",
                    data: [3, 2, 2, 1, 1, 1]
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,

                scales: {
                    y: {
                        beginAtZero: true,

                        ticks: {
                            stepSize: 1
                        }
                    }
                },

                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });

    }


    /* ACTIVITIES PARTICIPANTS ENJOYED */

    const activitiesChart =
        document.getElementById("activitiesChart");

    if (activitiesChart) {

        new Chart(activitiesChart, {
            type: "doughnut",

            data: {
                labels: [
                    "Practical Smartphone Demonstration",
                    "WhatsApp Activity",
                    "UPI / QR Demonstration",
                    "Cyber-Safety Example"
                ],

                datasets: [{
                    data: [5, 3, 1, 1]
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                    legend: {
                        position: "bottom"
                    }
                }
            }
        });

    }


    /* TRAINING & TRAINER RATINGS */

    const ratingsChart =
        document.getElementById("ratingsChart");

    if (ratingsChart) {

        new Chart(ratingsChart, {
            type: "bar",

            data: {
                labels: [
                    "3 Stars",
                    "4 Stars",
                    "5 Stars"
                ],

                datasets: [
                    {
                        label: "Overall Training",
                        data: [1, 3, 6]
                    },

                    {
                        label: "Trainer Explanation",
                        data: [1, 4, 5]
                    }
                ]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,

                scales: {
                    y: {
                        beginAtZero: true,

                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });

    }

});
