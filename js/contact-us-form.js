console.clear(); 

//mask phone number
  var phoneVar = document.querySelector('#phone');
  
  if (phoneVar) {
  
      phoneVar.addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
      });
  
  }
//mask phone number

///////////////time of day///////////////

//just the button variable
let submit = document.getElementById("submit");
submit.addEventListener("click", chckTimeOfDay);

/* extra - checking when a checkbox is clicked */
let timeOfDayFieldClass = document.querySelectorAll(".timeOfDay");

    timeOfDayFieldClass.forEach(checkbox => {
      checkbox.addEventListener('click', function() {
        // Your code to handle the change event
        chckTimeOfDay();
      });
    });




/* extra - checking when a checkbox is clicked */


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()