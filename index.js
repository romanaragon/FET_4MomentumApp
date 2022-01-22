let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let loggedDate = new Date();
    let table = document.getElementById('runlist');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-run-date').value;                                        
    row.insertCell(1).innerHTML = document.getElementById('new-run-dist').value;                                        
    row.insertCell(2).innerHTML = document.getElementById('run-time').value;                                                                                         
    let actions = row.insertCell(3);                                                                                    
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-run').value = '';
});

function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Delete row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}

    