//Event Bubbling
const btns = document.querySelectorAll('#book-list ul li');

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click',function(e){
        
        const li =e.target.parentElement;
        console.log('child element to remove',li);
        console.log('parent element to remove child from:',li.parentElement);
        li.parentNode.removeChild(li);
        
    });
});

