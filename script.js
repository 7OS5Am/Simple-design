let products =document.querySelectorAll('.card');


function offers(){
    for(let i = 0; i <= 5 ; i++){
    products[i].classList.add('hide');
    if(i == 0 || i == 1 || i == 2){
        products[i].classList.remove('hide');
    }
} 
}
function discounts(){
    for(let i = 0; i <= 5 ; i++){
    products[i].classList.add('hide');
    if(i == 4 || i == 5|| i == 1){
        products[i].classList.remove('hide');
    }
} 
}
function new_products(){
    for(let i = 0; i <= 5 ; i++){
    products[i].classList.add('hide');
    if(i == 4 || i == 3){
        products[i].classList.remove('hide');
    }
} 
}
function all_products(){
    for(let i = 0; i <= 5 ; i++){
    products[i].classList.remove('hide');
} 
}



