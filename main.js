function updateTimer() {
  document.getElementById('timer-text').textContent = moment(JSON.parse(window.localStorage.getItem('startDate'))).fromNow(true);
}

function showTimer() {
  document.getElementById('start-timer').hidden = true;
  document.getElementById('stop-timer').hidden = false;
  document.getElementById('title-text').textContent = "It's Been..."
  document.getElementById('motivation-text').textContent = "...You're doing great!";
  updateTimer();
  var refresh = setInterval(showTimer, 60 * 1000);
  document
    .getElementById('stop-timer')
    .addEventListener('click', function (event) { 
      clearInterval(refresh);
      document.getElementById('start-timer').hidden = false;
      document.getElementById('stop-timer').hidden = true;
      document.getElementById('title-text').textContent = "You Lasted..."
      document.getElementById('motivation-text').textContent = "...You can do this!";
    });
}

function startTimer() {
  var startDate = new Date();
  window.localStorage.setItem('startDate', JSON.stringify(startDate));
  showTimer();
}

(function () {

  if (window.localStorage.getItem('startDate')) {
    showTimer();
  }

  document
  .getElementById('start-timer')
  .addEventListener('click', function (event) { 
    startTimer(); 
  });

  document.querySelector('body').hidden = false;

})();



