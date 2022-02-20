const clock = document.querySelector(".clock");

function handleClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hour}:${minute}:${sec}`;
}

setInterval(handleClock, 1000);