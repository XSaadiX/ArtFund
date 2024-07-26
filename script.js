document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('.form-check-input');
    
    radios.forEach(radio => {
      radio.addEventListener('change', function() {
        // Clear all backgrounds first
        radios.forEach(r => r.closest('.form-check').classList.remove('selected-bg'));
  
        // Add background to the selected radio's parent div
        if (radio.checked) {
          radio.closest('.form-check').classList.add('selected-bg');
        }
      });
    });
  });
//donate button selected color
  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.donationAmountBtn');
    
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove the selected class from all buttons
        buttons.forEach(btn => btn.classList.remove('selected-btn'));
  
        // Add the selected class to the clicked button
        this.classList.add('selected-btn');
      });
    });
  });
  