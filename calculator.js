let currentDisplay = '';

document.querySelector('#display').value = currentDisplay;

function addToNumber(input) {
  if (input === '') {
    // Clear the display
    clearDisplay();
  } else if (input === '()') {
    currentDisplay += '(';
    currentDisplay += ')';
  } else if (input === '.') { // Check if the input is a dot
      if (!currentDisplay.includes('.')) { // Check if dot is already present
        currentDisplay += input;
      }
  } else {
    currentDisplay += input;
  }
  document.querySelector('#display').value = currentDisplay;


  // Check if there's no pending operator or if the input is '='

  
  if (!currentDisplay.includes('+') && !currentDisplay.includes('-') && !currentDisplay.includes('*') && !currentDisplay.includes('/') || input === '=') {
    calculateResult();
  }
}

function deleteLast() {
  if (typeof currentDisplay === 'string') {
    currentDisplay = currentDisplay.slice(0, -1);
    document.querySelector('#display').value = currentDisplay;
  }
}


function calculateResult() {
  currentDisplay = eval(currentDisplay); // Evaluate the expression
  document.querySelector('#display').value = currentDisplay;
}

function clearDisplay() {
  currentDisplay = '';
  document.querySelector('#display').value = currentDisplay;
}

document.querySelector('#display').addEventListener('input', function(event) {
  currentDisplay = event.target.value;
});


const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('hover-effect');
    setTimeout(() => {
      button.classList.remove('hover-effect');
    }, 300); 
  });
});

