// /**
//  * PHP Email Form Validation - v3.6
//  * URL: https://bootstrapmade.com/php-email-form/
//  * Author: BootstrapMade.com
//  */
// (function () {
//     "use strict";
  
//     let forms = document.querySelectorAll('.php-email-form');
  
//     forms.forEach(function (e) {
//       e.addEventListener('submit', function (event) {
//         event.preventDefault();
  
//         let thisForm = this;
  
//         // No need to get action attribute
//         // let action = thisForm.getAttribute('action');
//         let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
  
//         // Rest of the code remains the same
//         if (!recaptcha) {
//           if (typeof grecaptcha !== "undefined") {
//             grecaptcha.ready(function () {
//               try {
//                 grecaptcha.execute(recaptcha, { action: 'php_email_form_submit' })
//                   .then(token => {
//                     formData.set('recaptcha-response', token);
//                     php_email_form_submit(thisForm, formData);
//                   })
//               } catch (error) {
//                 displayError(thisForm, error);
//               }
//             });
//           } else {
//             displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
//           }
//         } else {
//           php_email_form_submit(thisForm, formData);
//         }
//       });
//     });
  
//     function php_email_form_submit(thisForm, formData) {
//       // Update the fetch method to use a local URL or an empty string
//       fetch('', {
//         method: 'POST',
//         body: formData,
//         headers: { 'X-Requested-With': 'XMLHttpRequest' }
//       })
//         .then(response => {
//           if (response.ok) {
//             return response.text();
//           } else {
//             throw new Error(`${response.status} ${response.statusText} ${response.url}`);
//           }
//         })
//         .then(data => {
//           thisForm.querySelector('.loading').classList.remove('d-block');
//           if (data.trim() == 'OK') {
//             thisForm.querySelector('.sent-message').classList.add('d-block');
//             thisForm.reset();
//           } else {
//             throw new Error(data ? data : 'Form submission failed and no error message returned');
//           }
//         })
//         .catch((error) => {
//           displayError(thisForm, error);
//         });
//     }
  
//     function displayError(thisForm, error) {
//       thisForm.querySelector('.loading').classList.remove('d-block');
//       thisForm.querySelector('.error-message').innerHTML = error;
//       thisForm.querySelector('.error-message').classList.add('d-block');
//     }
  
//   })();
  