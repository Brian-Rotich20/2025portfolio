 const toggleBtn = document.querySelector('.toggle_btn');
 const toggleBtnIcon = document.querySelector('.toggle_btn i');
 const dropDownMenu = document.querySelector('.dropdown_menu');

 toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    :'fa-solid fa-bars'
 }

 

//  ==========================SERVICE PAGE======================//
document.addEventListener('DOMContentLoaded', () => {
  const serviceTitles = document.querySelectorAll('.service_Title');
  
  serviceTitles.forEach((title) => {
    title.addEventListener('click', () => {
      const parentService = title.closest('.service2');
      const description = parentService.querySelector('.service_description');
      const icon = title.querySelector('.ri-add-fill');
      
      // Toggle active state
      description.classList.toggle('ActiveDesc');
      icon.classList.toggle('ri-subtract-line');
      title.querySelector('h2').classList.toggle('ActiveHeading');
      
      // Close other service descriptions
      serviceTitles.forEach((otherTitle) => {
        if (otherTitle !== title) {
          const otherParentService = otherTitle.closest('.service2');
          const otherDescription = otherParentService.querySelector('.service_description');
          const otherIcon = otherTitle.querySelector('.ri-add-fill');
          
          otherDescription.classList.remove('ActiveDesc');
          otherIcon.classList.remove('ri-subtract-line');
          otherTitle.querySelector('h2').classList.remove('ActiveHeading');
        }
      });
    });
  });
});

// ============================Disable Right-Click and Developer Tools=====================================//

  document.addEventListener('contextmenu', (e) => e.preventDefault());
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'i')) {
      e.preventDefault();
    }
  });



  // hnadling form submisions using emailjs

  function sendMail() {
    // Initialize EmailJS (Add your actual User ID)
    emailjs.init("EoFJ8oMCYrzMDckIx");

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_lixqs22", "template_ak9vyks", parms)
        .then(function(response) {
            alert("Email Sent Successfully!");
            console.log("Success:", response);
        })
        .catch(function(error) {
            alert("Failed to send email. Please try again.");
            console.error("Error:", error);
        });
}
