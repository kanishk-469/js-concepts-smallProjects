const list = []; //Array is an Object in JS

function addList(){
  const inputElement = window.document.querySelector('.js-text-box');
  const name = inputElement.value;
  list.push(name);
  console.log(list);
  inputElement.value = '';
}
function addEnter(event){
  if(event.key === 'Enter'){
    addList();
  }
}

// const todoList = []; or 

const todoList = [{
  name:'make dinner',
  dueDate: '2023-09-27',
},{
  name:'wash clothes',
  dueDate:'2023-09-24',
}];
// create the render funtion, it means to display something on a web page (or on screen)
 function renderTodoList(){
  let todoListHtml = '';  // Accumulator Variable
  // const todoList = ['make dinner','clean clothes','watch TV']; Logic hai ye pehle data daal ke socho array main
  const divElement = document.querySelector('.js-todo');

  todoList.forEach((todoObject,index,todoList) =>{
      const {name,dueDate} = todoObject; // object destructuring
      // Separate 3 html elements needed for grid
      const html = `
      <div>${name}</div>    
      <div> ${dueDate}</div>    
      <button class='del-btn js-todo-delete-btn'>
          Delete
      </button>
      `; // Generating the HTML using JS
      todoListHtml = todoListHtml + html;
      divElement.innerHTML = `${todoListHtml}`;

      document.querySelectorAll('.js-todo-delete-btn').forEach((deleteBtn,index)=>{
        deleteBtn.addEventListener('click',()=>{
        todoList.splice(index,1);
        renderTodoList();
        })
      })

  });

 }
document.querySelector('.js-todo-add-btn').addEventListener('click',()=>{
  addList2();
})


function addList2(){
  const inputElement = document.querySelector('.js-todo-box');
  const dueDateInputElement =document.querySelector('.js-due-date-box');

  const name = inputElement.value;
  const dueDate = dueDateInputElement.value;
  
 todoList.push({
  name,       // shorthand of name:name ->property:variable
  dueDate
});
 inputElement.value = '';
 renderTodoList();

}
 renderTodoList();
