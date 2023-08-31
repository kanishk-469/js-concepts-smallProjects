let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
    calculation += value;
    displayCalculationOnPage();
    // console.log(calculation);
    localStorage.setItem('calculation', calculation);
  }


   // Optional: you can also create a function in order
  // to reuse this code.
  function saveCalculation() {
    localStorage.setItem('calculation', calculation);
  }

  function displayCalculationOnPage(){
    window.document.querySelector('.js-display-calculation')
    .innerHTML = calculation;
  }