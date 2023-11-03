let todolist =[
    {
        item: 'buy milk',
        duedate:'4/10/2023'//at first we created array,then we //
                           // create class it inside//
     },

    {
        item:'fun',
        duedate:'4/10/2023'
    }
];

displayitem();




function addtodo(){
    let inputElement = document.querySelector('#app'); 
    let dateElement = document.querySelector('#todo-date');
    let todoitem =  inputElement.value; //it provides the input in text field//
    let todoDate = dateElement.value; //it provides the date input in the text field//
    todolist.push({item: todoitem, duedate: todoDate});  //it push the value in the array//
    inputElement.value= '';//after adding the task ,the text field (box) should be empty so we use this//
    inputElement.date='';//same after adding the date ,the text field should be empty//


    displayitem(); //it uses to display the item//
}
  

function displayitem(){
    let containerlement  = document.querySelector('.todo-container');

let newHtml='';

for (let i = 0; i < todolist.length; i++){

    let item=todolist[i].item;   //assigning todolist item to variable (item)//
    let duedate=todolist[i].duedate;  //assigning todolist due date to variable (duedate)//
    newHtml += `
   <span>${item}</span>     <!-- this print the item value   -->
    <span>${duedate}</span>    <!-- this print the duedate value -->
    <button  class="btn-delete" onclick="todolist.splice(${i},1);    
    displayitem();">Delete</button>
    
    <!--splice method is used to remove the (i) element from any index...we use there 1 means at once it delete only one element..if we use the 2 element there means if we delete one element it delete 2 element-->

    `;
}
        containerlement.innerHTML = newHtml;  //it uses to get or set the html content of the element ,the containerlement.innerHTML(or)x.innerHTML it use to get the HTML content data//
    
}

    
