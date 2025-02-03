let button = document.getElementById('mainButton');
let arrowIcon = document.querySelector('i');
button.addEventListener('mouseover', function() {
    arrowIcon.style.color = 'var(--textDarkColor)';
})
button.addEventListener('mouseleave', function() {
    arrowIcon.style.color = 'var(--textColor)';
})