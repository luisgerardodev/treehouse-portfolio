const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUl.children;


// function styleList(li) {
//   if (li === listUl.firstElementChild) {
//     li.style.backgroundColor = 'lightskyblue';
//     li.nextElementSibling.style.backgroundColor = '';
//   }
//   if (li === listUl.lastElementChild) {
//     li.style.backgroundColor = 'lightsteelblue';
//   }
// }

function styleList2() {
  let firstLi = listUl.firstElementChild;
  firstLi.style.backgroundColor = 'lightskyblue';
  firstLi.nextElementSibling.style.backgroundColor = '';
  
  firstLi.querySelector('.up').disabled = true;
  firstLi.nextElementSibling.querySelector('.up').disabled = false;

  let lastLi = listUl.lastElementChild;
  lastLi.style.backgroundColor = 'lightsteelblue';
  lastLi.previousElementSibling.style.backgroundColor = '';

  lastLi.querySelector('.down').disabled = true;
  lastLi.previousElementSibling.querySelector('.down').disabled = false;

}



function attachListItemButtons(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);
  
  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);  
  
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

for (let i = 0; i < lis.length; i += 1) {
  attachListItemButtons(lis[i]);
}

styleList2();

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
      styleList2();
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
        styleList2();
      }
    }  
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
        styleList2();
      }
    } 
  }
});

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  styleList2();
  addItemInput.value = '';
});
  
  
  

  