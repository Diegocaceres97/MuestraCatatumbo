$(document).ready(function(){

    //variables
    $surface = $('.surface');
    $car=$('.car');

    //Keypress event
    $(document).on('keypress',function(e){
 if(e.which==13){
     $($surface).toggleClass('moveRight');
 }
    });
           
});


    const element = document.querySelector('.texto');
    let start = Date.now();
    const mov = setInterval(() => {
        element.classList.add('animate__animated','animate__shakeX');
// how much time passed from the start?
let timePassed = Date.now() - start;

if (timePassed % 2 !=0) {
  element.classList.remove('animate__animated','animate__shakeX');
 // alert(timePassed);
  return;
}
    }, 2000);
    
    //element.classList.remove('animate__animated','animate__shakeX');