//=../../../node_modules/bootstrap/js/dist/util.js
//=../../../node_modules/bootstrap/js/dist/modal.js
//=../../../node_modules/slick-carousel/slick/slick.js

$(function () {
    //= components/slick.js
});


let blocks = document.querySelectorAll(".nav__link");
for (let i = 0; i < blocks.length; i++) {
    if (window.location.href == blocks[i].href) {
        blocks[i].classList.toggle("active");
    }
}


// sending email
function send_email(e) {
    let name = this.elements['name'].value;
    let email = this.elements['email'].value;
    let phone = this.elements['phone'].value;
    let message = this.elements['message'].value;
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'https://api.dev.readyforsky.com/notification-center/v1/send_email/',
      headers: {"X-API-Key": "test"},
      data: JSON.stringify({
          "from": email,
          "to": "arty-a.2017@mail.ru",
          "subject": "Сообщение из формы для портфолио",
          "text": name + '\n' + email + '\n' + phone + '\n\n' + message
        }),
        success: function(){
              alert('Спасибо!');
              document.location.reload();
            },
        error: function(){
                alert('Извините, сообщение не отправилось, попробуйте позже');
            }
     }).done(function(response) {
         console.log(response);
     });
}

var form = document.getElementById("emailForm");
form.addEventListener("submit", send_email, true);
