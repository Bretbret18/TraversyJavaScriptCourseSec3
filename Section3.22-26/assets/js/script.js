// ** WHAT IS THE DOM? ** //
// Document Object Model
// Tree of Nodes, elements created by the browser
// javaScript can be used to read/write/manipuate to the DOM
// Obect Oriented Representation

// ** WHAT IS THE DOM? END ** //
////////////////////////////////////////////////////////

// ** EMANINING THE DOCUMENT OBJECT ** //
// available globally
// let val;

// val = document;
// val = document.all;
// val = document.all[0];
// val = document.all[9];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].className;
// val = document.links[0].classList[2];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// turns our HTML scripts into an Array
// let scripts = document.scripts;

// let scriptsArray = Array.from(scripts);

// scriptsArray.forEach(function(script) {
//     console.log(script.getAttribute('src'));
//     console.log(script);
// });


// console.log(val);

// ** EMANINING THE DOCUMENT OBJECT END ** //
////////////////////////////////////////////////////////

// ** DOM SELECTORS FOR SINGLE ELEMENTS ** //
// Single element and multiple element selectors

// Single element selectors
// document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title')

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // document.getElementById('task-title').style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// // left this way on purpose for reminding of alternative 
// // method
// document.getElementById('task-title').innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color: red">Task List</span>';

// document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// // if more than one h5 on page, gets first one
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// // notice how we grab list childs
// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// // odd single child selector unless you use querySelectorOdd
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

// // ** DOM SELECTORS FOR SINGLE ELEMENTS END ** //
// //////////////////////////////////////////////////////////

// // ** DOM SELECTORS FOR MULTIPLE ELEMENTS ** //
// // grabbing more than one element

// // document.getElementsByClassName

// // const items = document.getElementsByClassName('collection-item');
// // console.log(items);

// // // can treat like an array to grab individual items
// // console.log(items[0]);
// // items[0].style.color = 'red';
// // items[3].textContent = 'Yo';

// // const listItems = document.querySelector('ul')
// // .getElementsByClassName('collection-item');

// // console.log(listItems);

// // document.getElementByTagName
// // let lis = document.getElementsByTagName('li');
// // console.log(lis);

// // // can treat like an array to grab individual items
// // console.log(lis[0]);
// // lis[1].style.color = 'green';
// // lis[4].textContent = 'Ayy';

// // // an HTML collection is NOT an array
// // // Convert HTML collection into an array
// // lis = Array.from(lis)
// // // Reverses index order count
// // lis.reverse();
// // lis.forEach(function(li, index) {
// //     console.log(li.className);
// //     // change all lis inside tasks
// //     li.textContent = `${index}: Hello`;
// // })

// // console.log(lis);

// // document.querySelectorAll
// // can grab elements as well as nodes

// // didn't have to convert to array because this is a node list
// const items = document
// .querySelectorAll('ul.collection li.collection-item');
// // notice node list instead of HTML collection
// console.log(items);

// items.forEach(function(item, index) {
//     console.log(item);
//     item.textContent = `${index}: Heller`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index) {
//     // li.textContent = `${index}: Hello`;
//     li.style.background = '#ccc';
// });

// for (let i = 0; i < liEven.length; i++) {
//     liEven[i].style.background = '#f4f4f4'
//     console.log(liEven[i]);
// };



// console.log(items);










