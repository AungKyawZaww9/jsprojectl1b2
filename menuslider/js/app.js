// UI
const toggle = document.getElementById('toggle');
const openbtn = document.getElementById('open');

const modal = document.getElementById('modal');
const closebtn = document.getElementById('close');

// Event Listener
toggle.addEventListener('click',()=>{
    // console.log('hey');
    document.body.classList.toggle('shownav');
});


openbtn.addEventListener('click',()=>{
   // console.log("hey");
   //  modal.style.display = "block";

    modal.classList.add('showmodal');
});

closebtn.addEventListener('click',()=>{
   // console.log("hey");
   //  modal.style.display = "none";

    modal.classList.remove('showmodal');
});


// Hide Modal on outside click

// window.addEventListener('click',(e)=>{
//     // console.log(e.target);
//
//     if(e.target === modal){
//         modal.classList.remove('showmodal');
//     }
// });

//ternary Operator
window.addEventListener('click',(e)=>e.target === modal ? modal.classList.remove('showmodal') : false);


