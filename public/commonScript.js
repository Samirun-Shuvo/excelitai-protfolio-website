document.addEventListener('scroll', function (e) { 
    if (window.scrollY > 100) {
        document.getElementById('top-navbar').classList.add('sticky-navbar');
    }
    else {
        document.getElementById('top-navbar').classList.remove('sticky-navbar');
    }
});
