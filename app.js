//Event Bubbling
const list = document.querySelector('#book-list ul');
//delete books
list.addEventListener('click',function(e){
    if(e.target.className =='delete'){
        const li =e.target.parentElement;
        li.parentNode.removeChild(li);
        
    }
});

// add to list
const addForm = document.forms['add-book'];

addForm.addEventListener('submit',function(e){
   e.preventDefault();
   const value = addForm.querySelector('input[type ="text"]').value;
  
//create element
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');


//add text content
deleteBtn.textContent ='delete';
bookName.textContent = value;
//append to document
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);

    
    
});