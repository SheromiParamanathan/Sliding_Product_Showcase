document.addEventListener('DOMContentLoaded', function() {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const slide = document.querySelector('.slide');

    next.addEventListener('click', function() {
        const product = document.querySelector('.product');
        slide.appendChild(product);
    });

    prev.addEventListener('click', function() {
        const product = document.querySelectorAll('.product');
        slide.prepend(product[product.length - 1]);
    });
});


