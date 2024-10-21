console.log("Event handling file is loaded");

const savebtn = document.getElementById('btnSave');
savebtn.addEventListener('click',handleClick);

function handleClick(){
    alert('save button click');    
}

savebtn.removeEventListener('click',handleClick);