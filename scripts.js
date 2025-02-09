// Include jQuery
const jQuery = document.createElement('script');
jQuery.src = "https://code.jquery.com/jquery-3.3.1.slim.min.js";
jQuery.integrity = "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo";
jQuery.crossOrigin = "anonymous";
document.head.appendChild(jQuery);

// Include Popper.js
const popper = document.createElement('script');
popper.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js";
popper.integrity = "sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49";
popper.crossOrigin = "anonymous";
document.head.appendChild(popper);

// Include Bootstrap JS
const bootstrap = document.createElement('script');
bootstrap.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js";
bootstrap.integrity = "sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy";
bootstrap.crossOrigin = "anonymous";
document.head.appendChild(bootstrap);

// Fetch modals.html and insert it into the document body
fetch("modals.html")
  .then((response) => response.text())
  .then((data) => {
    document.body.insertAdjacentHTML("beforeend", data);
  })
  .catch((error) => console.error("Error fetching modals HTML:", error));

const datecalendar = document.createElement('script');
datecalendar.src = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js";
document.head.appendChild(datecalendar);

$(document).ready(function () {
$("#date").datepicker({
    format: "dd/mm/yyyy",
    autoclose: true,
    todayHighlight: true,
});
});