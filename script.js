var timerBTN = document.getElementById("timer");

function countDown(countStart) {
  timerBTN.classList.add("timer");
  timerBTN.disabled = true;
  timerBTN.textContent =
    String(Math.floor(countStart / 60)) +
    " : " +
    String(countStart % 60).padStart(2, "0");
  var minute = 0;
  var second = 0;
  var countDownTimer = setInterval(function () {
    countStart--;
    minute = Math.floor(countStart / 60);
    second = countStart % 60;
    timerBTN.textContent =
      String(minute) + " : " + String(second).padStart(2, "0");
    if (countStart === 0) {
      timerBTN.textContent = "ارسال پیام";
      timerBTN.classList.remove("timer");
      timerBTN.disabled = false;
      clearInterval(countDownTimer);
    }
  }, 1000);
}
timerBTN.addEventListener("click", function () {
  countDown(120);
});
