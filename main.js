
let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.toggle('active');
};

document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
    contactInfo.classList.remove('active');
}



window.onscroll =  () =>{
navbar.classList.remove('active');
searchForm.classList.remove('active');
contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

//readmore btn starts
  const readMoreBtn = document.getElementById('read-more-btn');
  const fullContent = document.querySelector('.full-content');

  readMoreBtn.addEventListener('click', function() {
    // Toggle the display of full content on button click
    fullContent.style.display = (fullContent.style.display === 'none') ? 'block' : 'none';

    // Update the button text
    readMoreBtn.textContent = (fullContent.style.display === 'none') ? 'Read More' : 'Read Less';
  });
//readmore btn end



//submit to gmail

const form = document.querySelector("form");
const fullname = document.getElementById("")

function emailSend(){

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "gamerbuddy99@gmail.com",
    Password : "C7E6E23A804AD72AAD934D45D7C725586516",
    To : 'karkisaurav069@gmail.com',
    From : "gamerbuddy99@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

}

form.addEventListener("submit", (e) =>{
  e.preventDefault();
  emailSend();
});