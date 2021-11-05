let SlideIndex = 1;
showSlides(SlideIndex);


function plusSlide(n) {
    showSlides(SlideIndex += n);
};

function currentSlide(n) {
    showSlides(SlideIndex = n);
};

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("product1");
    if (n > slides.length) (SlideIndex = 1);
    if (n < 1) (SlideIndex = slides.length);

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
     
    slides[SlideIndex - 1].style.display = "block";
}

let SlideIndex2 = 1;
showSlides2(SlideIndex2);


function plusSlide2(n) {
    showSlides2(SlideIndex2 += n);
};

function currentSlide2(n) {
    showSlides2(SlideIndex2 = n);
};

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("product2");
  if (n > slides2.length) SlideIndex2 = 1;
  if (n < 1) SlideIndex2 = slides2.length;

  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }

  slides2[SlideIndex2 - 1].style.display = "block";
}