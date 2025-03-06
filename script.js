document.querySelector('.logo').addEventListener('click', function () {
  let body = document.querySelector('.body-container');
  body.classList.toggle('theme2');
});

document.querySelector('.expand-icon').addEventListener('click', function () {
  let chatbot = document.querySelector('.chatbot-container');
  chatbot.classList.toggle('expanded');
});
