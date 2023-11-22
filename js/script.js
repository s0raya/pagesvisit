const button = document.getElementById('btnReestablecer');
let numCount = document.getElementById('contadorVisitas');


//localStorage.clear();

const createCounter = (counter) => localStorage.setItem('count', counter);
let count = parseInt(localStorage.getItem('count')) || 0; // valor por defecto el 0

const updateCounter = () => {
    console.log(localStorage.getItem('count'));
    if(localStorage.getItem('count') !== undefined){
        numCount.textContent = count;
        createCounter(count)
    }
}
count++;
updateCounter();


button.addEventListener('click', () => {
    localStorage.setItem('count', 0);
    numCount.textContent = localStorage.getItem('count');
})



/******************************* OTRA MANERA DE HACERLO ************************/
/*count = 0;

if (localStorage.count == undefined) {
    localStorage.count = 1;
} else {
    localStorage.count++;
}
console.log(localStorage);
numCount.textContent = localStorage.count;



button.addEventListener('click', () => {
    localStorage.count = -1;
    location.reload();
});*/
