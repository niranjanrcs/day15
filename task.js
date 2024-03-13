
function startCountdown() {
    var countdownElement = document.getElementById('countdown');
    var messageElement = document.getElementById('message');

    var count = 10;

    function updateCountdown() {
        countdownElement.textContent = `Count ${count}`;
        count--;

        if (count < 0) {
            clearInterval(intervalId);
            countdownElement.style.display = 'none';
            messageElement.style.display = 'block';
        }
    }

    updateCountdown();
    var intervalId = setInterval(updateCountdown, 1000);
}

window.onload = startCountdown;