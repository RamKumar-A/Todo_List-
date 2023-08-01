'use strict';
const todoContainer = document.querySelector('.todoContainer');
const inputBox = document.querySelector('.input__box');
const btn = document.querySelector('.btn');

todoContainer.innerHTML = '';

// const insertHtml = function () {
//   if (inputBox.value !== '') {
//     const html = `<div class="todos ">
//   <input type="checkbox" name="" id="" class="input__checkbox" />
//   <p class="para__text">
//   ${inputBox.value}
//   </p>
//   <button class=${'delete'}>x</button>
//   </div>`;

//     todoContainer.insertAdjacentHTML('afterbegin', html);
//     inputBox.value = '';
//   }
// };

// ----------or-----------//

// Under the rule of DRY principle

const createTodoHTML = function (text) {
  return `<div class="todos ">
  <input type="checkbox" name="" id="" class="input__checkbox" />
  <p class="para__text">
  ${text}
  </p>
  <button class=${'delete'}>x</button>
  </div>`;
};

const insertHtml = function () {
  if (inputBox.value !== '') {
    const html = createTodoHTML(inputBox.value);
    todoContainer.insertAdjacentHTML('afterbegin', html);
    inputBox.value = '';
  }
};

btn.addEventListener('click', insertHtml);

const rmv = function (e) {
  e.target.addEventListener('click', function (e) {
    e.target.parentElement.remove();
  });
};
//

// Event Delegation

todoContainer.addEventListener('click', function (e) {
  // Matching strategy
  // Check if the clicked element is a delete button
  if (e.target.classList.contains('delete')) {
    rmv(e);
  }

  // Check if the clicked element is a checkbox
  if (e.target.classList.contains('input__checkbox')) {
    e.target.parentElement.classList.toggle('bc__toggle');
    // console.log(e.target.NodeList);
  }
});
