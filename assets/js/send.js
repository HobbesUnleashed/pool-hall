<script type="text/javascript">
      (function () {
        emailjs.init(
          publicKey: "eU5YT2xKK9cYnRMZf",
        );
      })();
    </script>
    console.log("EmailJS initialised");

document.getElementById('multi-email-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form's default submission behavior
  
    const form = this;
  
    // Collect the data from the form
    const formData = new FormData(form);
  
    // Add static fields directly
    const emailData = {
      firstName: document.querySelector("#firstName").value, // Dynamically collected from the document
      lastName: document.querySelector("#lastName").value,   // Dynamically collected from the document
      clubChoice: document.querySelector("#clubChoice").value, // Dynamically collected from the document
      gameChoice: document.querySelector("#gameChoice").value, // Dynamically collected from the document
      emailAddress: document.querySelector("#emailAddress").value, // Dynamically collected from the document
      phoneNumber: document.querySelector("#phoneNumber").value, // Dynamically collected from the document
      date: document.querySelector("#date").value, // Dynamically collected from the document
      time: document.querySelector("#time").value, // Dynamically collected from the document
      reserveComments: document.querySelector("#reserveComments").value, // Dynamically collected from the document
      email: "sleacy@googlemail.com", // Add static values here
      myname: "Shay"  // Another static value
    };
  
    // Send the email for Template 1
    emailjs.send("googlemail", "Auto-Reply", emailData)
      .then(function(response) {
        console.log('Template 1 Email sent successfully!', response);
      }, function(error) {
        console.error('Failed to send Template 1 email:', error);
      });
  
    // Send the email for Template 2
    emailjs.send("googlemail", "Reserve_request", emailData)
      .then(function(response) {
        console.log('Template 2 Email sent successfully!', response);
      }, function(error) {
        console.error('Failed to send Template 2 email:', error);
      });

      console.log("First name: ", document.getElementById("firstName").value);
      console.log("Club Choice: ", document.getElementById("clubChoice").value);
      console.log("Game Choice: ", document.getElementById("gameChoice").value);
  });
 
 
 /*
 document.getElementById('multi-email-form').addEventListener('submit', function(event) {
    event.preventDefault();

    this.querySelector('input[name="firstName"]').value = this.querySelector('input[id="firstName"]').value || "Default Value 1";
    this.querySelector('input[id="emailAddress"]').value = this.querySelector('input[id="emailAddress"]').value || "Default Value 2";
    this.querySelector('input[id="clubChoice"]').value = this.querySelector('input[id="clubChoice"]').value || "Default Value 3";
    this.querySelector('input[id="gameChoice"]').value = this.querySelector('input[id="gameChoice"]').value || "Default Value 4";
    this.querySelector('input[id="lastName"]').value = this.querySelector('input[id="lastName"]').value || "Default Value 5";
    this.querySelector('input[id="phoneNumber"]').value = this.querySelector('input[id="phoneNumber"]').value || "Default Value 6";
    this.querySelector('input[id="date"]').value = this.querySelector('input[id="date"]').value || "Default Value 7";
    this.querySelector('input[id="timePicker"]').value = this.querySelector('input[id="timePicker"]').value || "Default Value 8";
    this.querySelector('input[id="reserveComments"]').value = this.querySelector('input[id="reserveComments"]').value || "Default Value 9";

    emailjs.sendForm('googlemail', 'Reservation_PH', {
        "firstname": event.firstName.value,
        "emailaddress": event.emailAddress.value,
        "myname": "Shay"
    })
    .then(
        function(response) {
            console.log("Success! confirmation email sent", response);
        },
        function(error) {
            console.log("Failed! confirmation email failed", error);
        }
    );
    

  // Send to the second email template
  emailjs.sendForm('googlemail', 'Reservation_PH', {
    "clubChoice": event.clubChoice.value,
    "gameChoice": event.gameChoice.value,
    "firstname": event.firstName.value,
    "lastname": event.lastName.value,
    "emailAddress": event.emailAddress.value,
    "phoneNumber": event.phoneNumber.value,
    "date": event.date.value,
    "timePicker": event.timePicker.value,
    "reserveComments": event.reserveComments.value,
    "email": "sleacy@googlemail.com"
  })
  .then(
    function(response) {
        console.log("Success! reserve email sent", response);
    },
    function(error) {
        console.log("Failed! reserve email failed", error);
    }
);
    return false;
});
*/

/*
function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("Success!", response);
        },
        function(error) {
            console.log("Failed!", error);
        }
    );
    return false;
}

function autoReply(contactForm) {
    emailjs.send("googlemail", "Reservations_PH", {
        "firstname": contactForm.firstname.value,
        "emailaddress": contactForm.emailaddress.value,
        "myname": "Shay"
    })
    .then(
        function(response) {
            console.log("Success!", response);
        },
        function(error) {
            console.log("Failed!", error);
        }
    );
    return false;
}
*/