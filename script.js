let todoList = [];
displayItems();
function addTodo(){
     let inputElement = document.querySelector('#input-todo');
    let todoItem = inputElement.value;
     let dateElement = document.querySelector('#todo-date');
    let todoDate = dateElement.value;
    console.log(todoItem)
    todoList.push({item: todoItem , dueDate: todoDate});
    inputElement.value='';
    dateElement.value='';
    displayItems();
}
function displayItems(){
    let containerElemets = document.querySelector('.todo-container');
    let newHTML='';




    
    for(let i=0 ; i<todoList.length ; i++){
        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;
        let{item,dueDate}=todoList[i];
        newHTML += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="todoList.splice(${i},1);
        displayItems();">Delete</button>`;

    }
    containerElemets.innerHTML = newHTML;
}   