const count = document.getElementById('count');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const reset = document.getElementById('reset');

add.addEventListener('click', () => {
    count.innerHTML++;
    applyyColor();
})

sub.addEventListener('click', () => {
    count.innerHTML--;
    applyyColor();
})

reset.addEventListener('click', () => {
    count.innerHTML=0;
    applyyColor();
})


function applyyColor(){
    if(count.innerHTML > 0 ) {
        count.style.color = 'green';
    }
    else if (count.innerHTML < 0 )
    {
        count.style.color = 'orangered';
    }
    else 
    {
        count.style.color = 'black';  
    }
}