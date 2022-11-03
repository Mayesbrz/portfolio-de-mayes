var a;

document.getElementById("showjs").style.display="none";
function show_hide()

{

    if(a==1)
    {
         document.getElementById("showjs").style.display="block";
         document.getElementById("showjs").style.transition="0.5s";
       
        
        return a=0;
    }

    else
    {
        document.getElementById("showjs").style.display="none";
        return a=1;
    }
}


var b;

document.getElementById("showjs1").style.display="none";
function show_hide1()
{

    if(b==1)
    {
        document.getElementById("showjs1").style.display="block";
        return b=0;
    }

    else
    {
        document.getElementById("showjs1").style.display="none";
        return b=1;
    }
}








var iut;
document.getElementById("showiut").style.display="none";

function show_iut() {
    if(iut==1) {
        document.getElementById("showiut").style.display="block";
        return iut=0;

    }
    else {
        document.getElementById("showiut").style.display="none";
        return iut=1;
    }
}



var d;

document.getElementById("sneakerscache").style.display="none";



function cachesneakers() {
    if (d==1){
        document.getElementById("sneakerscache").style.display="block";
        return d=0;
    }
    else {
        document.getElementById("sneakerscache").style.display="none";
        return d=1;
    }
}


var e;

document.getElementById("princecache").style.display="none";



function cachesprince() {
    if (e==1){
        document.getElementById("princecache").style.display="block";
        return e=0;
    }
    else {
        document.getElementById("princecache").style.display="none";
        return e=1;
    }
}



var f;

document.getElementById("lucache").style.display="none";



function cacheslu() {
    if (f==1){
        document.getElementById("lucache").style.display="block";
        return f=0;
    }
    else {
        document.getElementById("lucache").style.display="none";
        return f=1;
    }
}






var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
    document.body.appendChild(css);
};




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function hidenav() {
    var navnav = document.getElementsByClassName('nav-link');
    var allnav = document.getElementById('toggleMobileMenu');

    if (navnav.onclick == 1) {
      allnav.style.display = "none";
    } else {
        allnav.style.display = "block";
    }



}

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


