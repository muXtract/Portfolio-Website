// console.log("test" );   
// document.querySelector('.kross').style.display='none';
// document.querySelector('.hamburger').addEventListener("click",()=>{
//     document.querySelector('.sidebar').classList.toggle('sidebargo');
//     if(document.querySelector('.sidebar').classList.contains('sidebargo')){
//         document.querySelector('.ham').style.display='inline';
//         document.querySelector('.kross').style.display='none';
//     }

//     else
//     {
//         document.querySelector('.kross').style.display='inline';
//         document.querySelector('.ham').style.display='none';
//     }
// });
document.querySelector('.kross').style.display='none';
document.querySelector('.hamburger').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if (document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.kross').style.display='none';

    }
    else{
        document.querySelector('.ham').style.display='none';
        document.querySelector('.kross').style.display='inline';

    }
});


