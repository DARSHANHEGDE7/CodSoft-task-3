document.addEventListener('DOMContentLoaded', function () {
  var resultInput = document.getElementById('result');
  var buttons = document.querySelectorAll('input[type="button"]');

  buttons.forEach(function (button) {
      button.addEventListener('click', function () {
          handleButtonClick(button.value);
      });
  });

  function handleButtonClick(value) {
      if (value === '=') {
          try {
              resultInput.value = eval(resultInput.value);
          } catch (error) {
              resultInput.value = 'Error';
          }
      } else if (value === 'c') {
          resultInput.value = '';
      } else {
          resultInput.value += value;
      }
  }
});
