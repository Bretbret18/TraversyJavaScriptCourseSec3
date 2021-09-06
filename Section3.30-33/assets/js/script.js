// ** MOUSE EVENTS ** //
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// // Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
// clearBtn.addEventListener('mouseup', runEvent)
// Mouseenter // fires as soon as mouse hovers over btn
// card.addEventListener('mouseenter', runEvent)
// // Mouseleave
// card.addEventListener('mouseleave', runEvent)
// // Mouseover // fires off after going over additional element
// // within ex: mouse in card and then mouse over btn
// card.addEventListener('mouseover', runEvent)
// // Mouseout
// card.addEventListener('mouseout', runEvent)
// Mousemove // whenever mouse moves within the element
// card.addEventListener('mousemove', runEvent)



// Event Handler 
// function runEvent(e) {
// console.log(`EVENT TYPE: ${e.type}`);
// MouseX and MouseY offset can be used for games. ex: knowing
// where your player is in the game.
// heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
// here we use MouseX and MouseY as parameters
// move of mouse changes color of background
// document.body.style.backgroundColor = `rgb(${e.offsetX},
//      ${e.offsetY}, 40)`;
// };

// ** MOUSE EVENTS END ** //
/////////////////////////////////////////////////////////////

// ** KEYBOARD AND INPUT EVENTS ** //
// usually want to be more specific about grabbing whole 
// elements, but in this case it works because we only have
// a single form element
// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// clear input
// taskInput.value = '';


// form.addEventListener('submit', runEvent);

// Keydown
// fires when key (from keyboard) is pressed down down
// taskInput.addEventListener('keydown', runEvent);
// Keyup // fires when key lifts back up
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keydown', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut // When user cuts text
// taskInput.addEventListener('cut', runEvent);
// Paste // user pastes text
// taskInput.addEventListener('paste', runEvent);
// Input // fires off on any input from user
// taskInput.addEventListener('input', runEvent);
// Change
// NOTE: commented out Materialize stylesheet to be able to
// see the newly added select element for the sake of seeing
// how change event operates
// select.addEventListener('change', runEvent);


// function runEvent(e) {
//     console.log(`EVENT TYPE: ${e.type}`);

//     console.log(e.target.value);
// what is typed in newTask is directly put into heading
// heading.innerText = e.target.value;


// usually will want to use event.preventDefault() when
// using a submit event
// Get input value
// console.log(taskInput.value);
// e.preventDefault();
// };

// ** MOUSE EVENTS END ** //
////////////////////////////////////////////////////////////

// ** EVENT BUBBLING AND DELEGATION ** //

// Event Bubbling refers to, for example, a click event bubbling
// upwards to parent elements

// Event Delegation is almostthe opposite
//  where we put event listener on one of the parent elements
// and put logic inside the event handler to target the element
// that we want that click for or whatever type of event it is,
// it could be any parent

// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click',

// function() {
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click',
// function() {
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click',
// function() {
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click',
// function() {
//     console.log('col');
// });

// EVENT DELEGATION
// This is a situation where we would need to use Event delegation
// Another situation would be if you dynamically insert something
// using javaScript, then you would also need to use event
// delegation

// Use if you are trying to get a specific element that doesn't
// already fire and do what you want. When we click the X icon,
// we are getting the i tag, but if we want the a tag that
// the i tag is wrapped in, use event delegation to capture it

// Third and final explanation in more simple terms
// Event delegation
// putting listener on parent element of what youre looking for
// and then putting a condition in here to find the target
// (using e.target)
// and then doing your functionality 


// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);


// function deleteItem(e) {
//     e.preventDefault()
//     if(e.target.parentElement.classList.contains('delete-item')){
//             console.log('delete item');
//             // delete whole list item
//             e.target.parentElement.parentElement.remove();
//         }
// };

// ** EVENT BUBBLING AND DELEGATION END ** //
/////////////////////////////////////////////////////////////

// ** LOCAL AND SESSION STORAGE ** //

// Set local storage item
// (setting data in browser)
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear
// localStorage.clear()

// console.log(name, age);

// set event to local storage
// document.querySelector('form').addEventListener('submit',
//  function(e) {
//     const task = document.getElementById('task').value;

//     let tasks;
//     // check if something is already in localstorage
//     if(localStorage.getItem('tasks') === null) {
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.push(task);


//     console.log(task);
//     // Each new task will be replaced.
//     // To add additional tasks, can create an array formated 
//     // as a string
//     localStorage.setItem('tasks', JSON.stringify(tasks));

//     alert('Task saved');

//     e.preventDefault();
// })

// const tasks = JSON.parse(localStorage.getItem('tasks'));
// // loop through array
// tasks.forEach(function(task) {
//     console.log(task);
// });




















