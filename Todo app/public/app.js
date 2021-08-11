var a = document.getElementById('main');
var b = document.getElementById('btn');

var x = 0;

function inp(){
    
    x++;

    var newElemnt = document.createElement("P");
    var text = x + ': ' + b.value;
    text = document.createTextNode(text);
    newElemnt.appendChild(text);
    a.appendChild(newElemnt);


    b.value = '';




    var editBtn = document.createElement("BUTTON");
    var editBtnText = document.createTextNode('Edit');
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute('onclick','editTodo(this)');
    newElemnt.appendChild(editBtn);

    var deleteBtn = document.createElement("BUTTON");
    var deleteBtnText = document.createTextNode('delete');
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.setAttribute('onclick','delTodo(this)');
    newElemnt.appendChild(deleteBtn);
    return x;
}



function editTodo(e){
    e.parentNode.firstChild.nodeValue = x +': '+prompt('Enter New Value');
    
}

function delTodo(e){
    console.log(x);
    e.parentNode.remove();
}