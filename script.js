let counter = 60;
let timer = setInterval(() => {
  counter--;
  document.getElementById("countdown").innerText = counter;

  if (counter <= 0) {
    clearInterval(timer);
    document.getElementById("joinBtn").click(); // Auto redirect
  }
}, 1000);
