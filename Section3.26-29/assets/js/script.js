// ** TRAVERSING THE DOM ** //
// Dealing with parent and chilren nodes
// let val;

// const list = document.querySelector('ul.collection');
// // listItem gets first item
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// get child nodes
// text nodes in this case are simply line breaks
// returns nodeList

// List pertains to what type of nodes these are
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document Itself
// 10 - Doctype

// val = list.childNodes;
// 0 is textNode, which gives us 3

// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// // element node gives us 1
// val = list.childNodes[1].nodeType;
// // Here we selected the 3rd node type, and we get 8 because
// // this nodeType is a comment
// val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document Itself
// 10 - Doctype

// Get children element nodes
// returns HTML collection
// val = list.children;
// val = list.children[1];
// // Changed 2nd child to Hello from list item
// val = list.children[1].textContent = 'Hello';
// // Children of children
// // notice in console that we get list item as well as delete
// // button icon
// val = list.children[3].children;
// // if we wanted to access that specific delete item icon:
// val = list.children[3].children[0]; 
// // if we wanted to add id
// val = list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];

// // first child gives us first node
// val = list.firstChild;
// // if you don't want to deal with text nodes
// val = list.firstElementChild; 

// // last child
// val = list.lastChild;
// val = list.lastElementChild;

// // count child elements
// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement; 

// // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// You can move up or down Siblings, Elements, Nodes...
// That's what traversing the DOM means!


// console.log(val);

// ** TRAVERSING THE DOM END ** //
///////////////////////////////////////////////////////////

// ** CREATING ELEMENTS ** //

// **** // I manipulated the icons so that they all line up
// according to where they should be. 
// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const icons = document.querySelectorAll('i');
// console.log(icons);

// icons.forEach(function(icon) {
//     console.log(icon);
//     icon.style.paddingLeft = '79%'
// });

// **** // ///////////////////////////////////// // **** //


// add list item to end of list items 
// Create element

// const li = document.createElement('li');

// // Add class
// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // Add attribute 
// li.setAttribute('title', 'New Item');

// // Create text node and append
// li.appendChild(document.createTextNode('Hello World'));

// // Create new link element
// const link = document.createElement('a');
// // Add Classes
// link.className = 'delete-item secondary-content';
// // Add icon HTML
// link.innerHTML = '<i class="fa fa-remove"></i>';
// // link.style.paddingRight = '74.5%'

// // Append link into li
// li.appendChild(link);

// // console.log(link);


// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

// ** CREATING ELEMENTS END ** //
///////////////////////////////////////////////////////////

// ** REMOVING AND REPLACING ELEMENTS ** //
// REPLACE ELEMENT

// Create Element
// const newHeading = document.createElement('h2');
// // Add id
// newHeading.id = 'task-title';
// // add new text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // Get the old heading
// const oldHeading = document.getElementById('task-title');
// // Parent 
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);


// console.log(newHeading);

// // REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // Remove 1st list item
// lis[0].remove();

// // Remove 4th child element
// list.removeChild(lis[3]);

// // CLASSES AND ATTRIBUTES
// const firstLi = document.querySelector('li:first-child');
// // grab the a tag within the li element
// const link = firstLi.children[0];

// let val;

// // Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// // Attributes
// val = link.getAttribute('href');
// // set icon in first list item to google
// val = link.setAttribute('href', 'http://google.com');
// // check for certain attribute: true
// val = link.hasAttribute('href');

// link.setAttribute('title', 'Google');
// val = link.hasAttribute('title');
// link.removeAttribute('title');
// val = link;


// console.log(val);

// ** REMOVING AND REPLACING ELEMENTS END ** //
//////////////////////////////////////////////////////////

// ** EVENT LISTENERS AND THE EVENT OBJECT ** //
// document.querySelector('.clear-tasks').addEventListener('click',
// function(e) {
//     // e.preventDefault() stops automatic reload of page
//     // e.preventDefault();
//     console.log('Hello gang');
// });

// alternate click event listener
// document.querySelector('.clear-tasks').addEventListener('click',
// onClick);

// function onCLick(e){
//     console.log('clicked');
// }

// we can change whatever we want when firing off an event
// just like we were doing when grabbing elements to manipulate
// them
document.querySelector('.clear-tasks').addEventListener('click',
function(e) {
    let val;

    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    // Event type
    val = e.type;

    // timestamp
    val = e.timeStamp;

    // coordinates of event relative to the window
    val = e.clientY;
    val = e.clientX;

      // coordinates of event relative to the element
      val = e.offsetY;
      val = e.offsetX;

    // change the innerText of the button upon click
    e.target.innerText = 'helloish';

    console.log(val);
});

// logging the event, target is the most important thing to 
// take notice of; this is where the event happened on the page














