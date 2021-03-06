const moon=document.getElementById('moon');

moon.addEventListener('click',()=>{
    if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark');
        moon.classList.remove('fa-sun');
        moon.classList.add('fa-moon');
    }
    else{
        document.body.classList.add('dark');
        moon.classList.add('fa-sun');
        moon.classList.remove('fa-moon');
    }
})

const star=document.querySelectorAll('.star');
for(let i=0;i<star.length;i++){
    star[i].onclick=function(){
        if(star[i].classList.contains('highlighted')){
            star[i].style.color='#000';              
            star[i].classList.remove('highlighted');
        }
        else{
            star[i].style.color='orange';
            star[i].classList.add('highlighted');
        }
    }
}
console.log(window.screen.width);

const list=document.getElementById('list');
const grid=document.getElementById('grid');
const proj_disp=document.getElementById('projects-display');
const cards=document.querySelectorAll('.projects-display .project-box');
list.addEventListener('click',()=>{
    for(let i=0;i<cards.length;++i){
        cards[i].style.width='100%';
    }
})
grid.addEventListener('click',()=>{
    for(let i=0;i<cards.length;++i){
        if(window.screen.width > 790){
            cards[i].style.width='48%';
        }
        if(window.screen.width > 1100){
            cards[i].style.width='30%';
        }
        // if(window.screen.width >590){
        //     cards[i].style.width='10%';
        // }
    }
})
