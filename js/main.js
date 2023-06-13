'use strict'

{
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const boxes = document.querySelectorAll('.review-box');
    const reviewWrapper = document.querySelector('.review-box-wrapper');
    const slides = reviewWrapper.children;
    let currentIndex = 0;



    function slidePrev() {
        reviewWrapper.style.transform = `translateX(345px)`;
    }
    
    function slideNext() {
        reviewWrapper.style.transform = `translateX(-345px)`;
    }

    function addActive() {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].classList.remove('active');
        }
    }

    

    prev.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = boxes.length - 1;
        }

        slidePrev();
        addActive();
        boxes[currentIndex].classList.add('active');
    });

    next.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex > boxes.length - 1) {
            currentIndex = 0;
        }

        slideNext();
        addActive();
        boxes[currentIndex].classList.add('active');
    });

}