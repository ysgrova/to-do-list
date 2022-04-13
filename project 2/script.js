const inputDiv = document.querySelector('.main')
const input = document.getElementById('input')
const button =  document.getElementById('button')
const contentDiv = document.querySelector('.contentDiv')
button.addEventListener('click',go);
const allremove = document.querySelector('.allremove')
checklist()

function go(){
    
    if(input.value == "" || input.value == " "){
        alert("Enter the text!")
    }
    else{
        var paragraf = document.createElement('li')
        var deleteButton = document.createElement('div')
        deleteButton.classList.add('deleteButton')
        paragraf.innerText = input.value
        contentDiv.appendChild(paragraf)
        paragraf.appendChild(deleteButton)
        input.value = ''
        contentDiv.style.display = 'block'
        
        allremove.addEventListener('click', function(){
            contentDiv.innerHTML = ''
            checklist()
        })

        deleteButton.addEventListener('click',function(){
            contentDiv.removeChild(paragraf)
            checklist()
            
        })
        } 
    
}
input.addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        go()
    }
})
function checklist(){
    if(contentDiv.children.length == 0){
        contentDiv.style.display = 'none'
    }
}

function sortListDir() {   
    var list, i, switching, b, shouldSwitch, dir, switchcount = 0;   
    list = document.querySelector(".contentDiv");   
    switching = true;   
    dir = "asc";    
    while (switching) {   
      switching = false;   
      b = list.getElementsByTagName("LI");   
      for (i = 0; i < (b.length - 1); i++) {   
        shouldSwitch = false;   
        if (dir == "asc") {   
          if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {   
            shouldSwitch = true;
            document.querySelector(".sort-button").innerHTML =
            '<button class="sort2" onclick="sortListDir()"></button>';   
            break;   
          }   
        } else if (dir == "desc") {   
          if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {   
            shouldSwitch= true;   
            document.querySelector(".sort-button").innerHTML =
            '<button class="div3" onclick="sortListDir()"></button>'; 
            break;   
          }   
        }   
      }   
      if (shouldSwitch) {    
        b[i].parentNode.insertBefore(b[i + 1], b[i]);   
        switching = true;   
        switchcount ++;   
      } else {   
        if (switchcount == 0 && dir == "asc") {   
          dir = "desc";   
          switching = true;   
        }   
      }   
    }
}

