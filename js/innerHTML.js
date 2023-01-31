// Используйте свойство elem.innerHTML для добавления только в случае
// когда элемент elem пустой или если надо полностью заменить его содержимое.

// const body = document.querySelector('.body');
// console.log(body);

// body.innerHTML = '<div class="container"><ul class="usernames" > <li>Mango</li></ul ></div > <div class="container"><ul class="usernames"><li>MLKV</li></ul></div>'

//=== прародитель шаблонов ===//

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector(".list");

const markup = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
  .join("");
  
list.innerHTML = markup;


//========insertAdjacentHTML()=======//
// "beforebegin" - перед elem
// "afterbegin" - внутри elem, перед всеми детьми
// "beforeend" - внутри elem, после всех детей
// "afterend" - после elem

// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");




//=========== Слушатель событий =========//

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector('.list');
// list.addEventListener('click', () => {
//     const markup = technologies
//         .map((e) => `<li class="list-item">${e}</li>`)
//         .join("");

//     list.insertAdjacentHTML("afterbegin", markup);

//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.currentTarget);
// });



// //==========  События клавиатуры =========//
// document.addEventListener("keydown", (event) => {
//   console.log("Keydown: ", event);
// });

// // ======= разница между key i code ===== //
// document.addEventListener("keydown", (event) => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });




// скрипт наглядно показывает как работют основные слушатели клавиатуры 

// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }