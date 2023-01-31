//======== createdElement ========//
const heading = document.createElement("h1");
console.log(heading); // <h1></h1>

heading.textContent = "This is a heading";
console.log(heading); // <h1>This is a heading</h1>

const image = document.createElement("img");
image.src = './img/IM.jpg';
image.alt = "MLKV";
image.width = 50;
console.log(image);


const list = document.querySelector(".usernames");

// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list.prepend(firstItem);

// Adds a title before the list
const title = document.createElement("h2");
title.textContent = "USERNAMES";
list.before(title);

// Adds a paragraph after the list
const text = document.createElement("p");
text.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
list.after(text);

list.append(heading);
list.append(image);


const div = document.createElement('div');
console.log(div);

const test = document.createElement('h2');
test.textContent = 'это динамически созданный заголовок h2 которого нет в html'
console.log(test);

const p = document.createElement('p')
p.textContent = 'это строка создана динамически в js'
console.log(p)
 
div.append(test);
console.log(div);
div.append(p)

const body = document.querySelector('.body');
body.prepend(div)


