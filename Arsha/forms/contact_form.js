

const btn = document.getElementById('button');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
  
    

   btn.value = 'Sending...';


const form = document.getElementById('contact-form');
   const serviceID = 'service_k03i43w';
   const templateID = 'template_x7ky46f';
   

   emailjs.sendForm(serviceID, templateID,form)
    .then(() => {
      btn.value = 'Send Email';
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});








const subBtn = document.getElementById('sub-btn');


document.getElementById('sub-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
  
   setTimeout(()=>{
      subBtn.value = 'Subscribed';
   },1500)

const subform = document.getElementById('sub-form');
   const serviceID = 'service_k03i43w';
   const templateID = 'template_bt4o6f9';
   

   emailjs.sendForm(serviceID, templateID,subform)
   .then(function(response) {
      document.getElementById('sub-email').value=""
    console.log('SUCCESS!', response.status, response.text);
 }, function(error) {
    console.log('FAILED...', error);
 });
});



























//    function validateForm(){

//     let templateParams ={
//         name:document.getElementById("name").value,
//         email:document.getElementById("email").value,
//         subject:document.getElementById("subject").value,
//         message:document.getElementById("message").value,

//     }

//     emailjs.send("service_k03i43w", "template_x7ky46f", templateParams)
//     .then(function(response) {
//         console.log('SUCCESS!', response.status, response.text);
//      }, function(error) {
//         console.log('FAILED...', error);
//      }); 
//    }
//    .then((res)=>{
//     document.getElementById("name").value ="",
//     document.getElementById("email").value ="",
//     document.getElementById("subject").value ="",
//     document.getElementById("message").value ="",
// })

   

