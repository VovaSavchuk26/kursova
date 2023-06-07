function updateCounter() {
  var targetDate = new Date("2023-06-20"); // Встановіть вашу цільову дату тут
  var currentDate = new Date();
  var timeDifference = targetDate.getTime() - currentDate.getTime();

  if (timeDifference > 0) {
    var minutes = Math.floor(timeDifference / (1000 * 60));
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    minutes %= 60;
    hours %= 24;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;

    setTimeout(updateCounter, 1000); // Оновлення лічильника кожну секунду
  } else {
    // Досягнуто цільової дати
    document.getElementById("counter").textContent = "Час вийшов!";
  }
}

window.onload = updateCounter;