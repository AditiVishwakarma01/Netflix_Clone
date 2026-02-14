function validateEmail() {
    let email = document.getElementById("email").value;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        alert("Please enter email");
    }
    else if (!email.match(pattern)) {
        alert("Enter a valid email address");
    }
    else {
        alert("Welcome to 🌸 Aditi's Netflix Clone 🌸!");
    }
}
function changeLanguage() {
    let lang = document.getElementById("language").value;

    if (lang === "hi") {

        document.getElementById("title").innerText = "अनलिमिटेड फिल्में, टीवी शो और बहुत कुछ";
        document.getElementById("subtitle").innerText = "कहीं भी देखें। कभी भी रद्द करें।";
        document.getElementById("desc").innerText = "देखने के लिए तैयार? अपनी सदस्यता शुरू या फिर से शुरू करने के लिए ईमेल दर्ज करें।";
        document.getElementById("email").placeholder = "ईमेल पता";

        document.getElementById("tv-title").innerText = "अपने टीवी पर आनंद लें";
        document.getElementById("tv-desc").innerText = "स्मार्ट टीवी, प्लेस्टेशन, एक्सबॉक्स, क्रोमकास्ट, एप्पल टीवी और अन्य पर देखें।";

        document.getElementById("mobile-title").innerText = "अपने शो डाउनलोड करें और ऑफलाइन देखें";
        document.getElementById("mobile-desc").innerText = "अपने पसंदीदा शो आसानी से सेव करें और कभी भी देखें।";

        document.getElementById("kids-title").innerText = "बच्चों के लिए प्रोफाइल बनाएं";
        document.getElementById("kids-desc").innerText = "बच्चों को उनके पसंदीदा किरदारों के साथ रोमांचक दुनिया में भेजें।";
    }
    else {

        document.getElementById("title").innerText = "Unlimited movies, TV shows and more";
        document.getElementById("subtitle").innerText = "Watch anywhere. Cancel anytime.";
        document.getElementById("desc").innerText = "Ready to watch? Enter your email to create or restart your membership.";
        document.getElementById("email").placeholder = "Email address";

        document.getElementById("tv-title").innerText = "Enjoy on your TV";
        document.getElementById("tv-desc").innerText = "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.";

        document.getElementById("mobile-title").innerText = "Download your shows to watch offline";
        document.getElementById("mobile-desc").innerText = "Save your favourites easily and always have something to watch.";

        document.getElementById("kids-title").innerText = "Create profiles for kids";
        document.getElementById("kids-desc").innerText = "Send children on adventures with their favourite characters in a space made just for them.";
    }

}

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;
        const icon = question.querySelector("span");

        // close all others
        document.querySelectorAll(".faq-answer").forEach(a => {
            if (a !== answer) {
                a.style.maxHeight = null;
            }
        });

        document.querySelectorAll(".faq-question span").forEach(i => {
            if (i !== icon) {
                i.textContent = "+";
            }
        });

        // toggle current
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            icon.textContent = "+";
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "✕";
        }
    });
});
