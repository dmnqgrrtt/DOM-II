// Your code goes here

// make nav link bold when hovering over
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('mouseenter', (event) => {
        link.style.fontWeight = 'bold';
    })
    link.addEventListener('mouseleave', (event) => {
        link.style.fontWeight = 'normal';
    })
})

//changes title image when double clicked and changed back when single clicked
const titleImg = document.querySelector('.intro img');
titleImg.addEventListener('dblclick', () => {
    titleImg.src = "https://archive.nerdist.com/wp-content/uploads/2017/02/Magic-School-Bus-Featured-02092017.jpg"
} )
titleImg.addEventListener('click', () => {
    titleImg.src = "http://127.0.0.1:5500/img/fun-bus.jpg"
} )


// changed body background to light blue when a key is press and changed back to white when key is released
const body = document.querySelector('body');
body.addEventListener('keydown', () => {
    body.style.backgroundColor = '#A3DDF2';
})
body.addEventListener('keyup', () => {
    body.style.backgroundColor = 'white';
})

//adds a dashed underline and overline to titles when they are hovered over
const titles2 = document.querySelectorAll('h2');
titles2.forEach(title => {
    title.addEventListener('mouseenter', (event) => {
        event.target.style.textDecoration = 'underline overline dashed';
    })
    title.addEventListener('mouseleave', (event) => {
        event.target.style.textDecoration = 'none';
    })
} )

const titles4 = document.querySelectorAll('h4');
titles4.forEach(title => {
    title.addEventListener('mouseenter', (event) => {
        event.target.style.textDecoration = 'underline overline dashed';
    })
    title.addEventListener('mouseleave', (event) => {
        event.target.style.textDecoration = 'none';
    })
} )


//changes paragraph text to gold when clicked
const pText = document.querySelectorAll('p');
pText.forEach(text => {
    text.addEventListener('mousedown', (event) => {
        event.target.style.color = '#EFB71C';
    })
    text.addEventListener('mouseup', (event) => {
        event.target.style.color = 'black';
    })
})