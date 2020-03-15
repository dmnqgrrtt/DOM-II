// Your code goes here
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('mouseenter', (event) => {
        link.style.fontWeight = 'bold';
    })
    link.addEventListener('mouseleave', (event) => {
        link.style.fontWeight = 'normal';
    })
})

const titleImg = document.querySelector('.intro img');
titleImg.addEventListener('dblclick', () => {
    titleImg.src = "https://archive.nerdist.com/wp-content/uploads/2017/02/Magic-School-Bus-Featured-02092017.jpg"
} )



const body = document.querySelector('body');
body.addEventListener('keydown', () => {
    body.style.backgroundColor = '#A3DDF2';
})
body.addEventListener('keyup', () => {
    body.style.backgroundColor = 'white';
})