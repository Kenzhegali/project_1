// timeline
document.addEventListener('DOMContentLoaded', function () {
    function reveal() {
        var entries = document.querySelectorAll('.timeline-entry');
        for (var i = 0; i < entries.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = entries[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                entries[i].classList.add('visible');
            }
        }
    }

    window.addEventListener('scroll', reveal);
    reveal(); // Call reveal to show entries that are already in view
});



const countDownDate = new Date("2025-04-29T01:14:00").getTime();

const x = setInterval(function () {
    const now = new Date().getTime();
    let distance = countDownDate - now;

    if (distance <= 0) {
        clearInterval(x);
        distance = 0;

        // Скрыть таймер
        const countdownWrap = document.getElementsByClassName("countdown_wrap")[0];
        if (countdownWrap) {
            countdownWrap.style.display = "none";
        }
        document.getElementsByClassName("count_end")[0].style.display = "block";
        document.getElementsByClassName("count_end")[0].style.fontSize = "35px";

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);
}, 1000);

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}





// Функция для отображения модального окна
function showModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Функция для скрытия модального окна
function hideModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
// Функция для отправки формы

document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var text = document.getElementById("text").value;
    sendTelegramMessage(firstName, lastName, text);
});

function sendTelegramMessage(firstName, lastName, text) {
    var chatId = "-4105734949";
    var message = firstName + " " + lastName + " " + "тойға келеді!" + " " + "Тілегі:" + " " + text;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            showAlert(firstName + ", жауап бергеніңізге рахмет!");
        }
    };
    xhttp.open("GET", "https://api.telegram.org/bot7093568711:AAE5jKslj4IYpPypXESGrafORm78qASZIU0/sendMessage?chat_id=" +
        chatId + "&text=" + message, true);
    xhttp.send();
}


document.getElementById("form2").addEventListener("submit", function (event) {
    event.preventDefault();
    var firstName2 = document.getElementById("firstName2").value;
    var lastName2 = document.getElementById("lastName2").value;
    var text2 = document.getElementById("text2").value;
    sendTelegramMessageForDecline(firstName2, lastName2, text2);
});

function sendTelegramMessageForDecline(firstName2, lastName2, text2) {
    var chatId = "-4105734949";
    var message = firstName2 + " " + lastName2 + " " + "" + "\nтойға келмейді. \n Тілегі:" + " " + text2;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            showAlert2(firstName2 + ", жауап бергеніңізге рахмет!");
        }
    };
    xhttp.open("GET", "https://api.telegram.org/bot7093568711:AAE5jKslj4IYpPypXESGrafORm78qASZIU0/sendMessage?chat_id=" +
        chatId + "&text=" + message, true);
    xhttp.send();
}



function showAlert(message) {
    var alertDiv = document.getElementById("customAlert");
    alertDiv.textContent = message;
    alertDiv.style.display = "block";
    setTimeout(function () {
        alertDiv.style.display = "none";
    }, 3000);
}

function showAlert2(message) {
    var alertDiv = document.getElementById("customAlert");
    alertDiv.textContent = message;
    alertDiv.style.display = "block";
    setTimeout(function () {
        alertDiv.style.display = "none";
    }, 3000);
}


//timeline

window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;
    var timeline = document.querySelector('.line');
    var windowHeight = window.innerHeight;
    var timelineHeight = timeline.offsetHeight - windowHeight;
    var scrollPercentage = (scrollTop / timelineHeight) * 100;

    var maxLineTop = timelineHeight; // Максимальное значение top для черной линии

    // Ограничиваем значение scrollPercentage от 0 до 100
    scrollPercentage = Math.max(0, Math.min(scrollPercentage, 100));

    var newLineTop = (scrollPercentage / 100) * maxLineTop;

    timeline.style.setProperty('--line-top', newLineTop + 'px');
});

// JavaScript для управления аудио
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playPauseIcon = document.getElementById('play-pause-icon');

    function setPlayIcon() {
        playPauseIcon.innerHTML = '<path d="M6 4l12 8-12 8z"></path>'; // Play Icon
    }

    function setPauseIcon() {
        playPauseIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>'; // Pause Icon
    }


    function initAudio() {
        if (audio.paused) {
            audio.play().then(() => {
                setPauseIcon();
            }).catch(error => {
                console.log('Автоматическое воспроизведение было заблокировано: ', error);
            });
        }
    }

    initAudio();

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            setPauseIcon();
        } else {
            audio.pause();
            setPlayIcon();
        }
    });
});
