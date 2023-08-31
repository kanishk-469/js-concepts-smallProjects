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





// const todoList = [
//   {
//   name:'Wash clothes',
//   dueDate:'2023/07/26'
// },
//   {
//   name:'Make dinner',
//   dueDate:'2023/07/26'
// }
// ];
const todoList = [];
// create the render funtion, it means to display something on a web page (or on screen)
 function renderTodoList(){
  let todoListHtml = '';  // Accumulator Variable
  // const todoList = ['make dinner','clean clothes','watch TV']; Logic hai ye pehle data daal ke socho array main
  const divElement = document.querySelector('.js-todo');
    for(let i=0;i<todoList.length;i++){
      const todoObject = todoList[i];
      const {name,dueDate} = todoObject; // object destructuring
      // Separate 3 html elements needed for grid
      const html = `
      <div>${name}</div>    
      <div> ${dueDate}</div>    
      <button class='del-btn'
        onclick="todoList.splice(${i},1);
        renderTodoList();">
          Delete
      </button>
      `; // Generating the HTML using JS
      todoListHtml = todoListHtml + html;
      divElement.innerHTML = `${todoListHtml}`;
    }
  // console.log(todoListHtml);
 }

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