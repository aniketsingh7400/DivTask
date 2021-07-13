let addDiv = document.createElement("button");
addDiv.id = "btn";
addDiv.innerHTML = "Click to add div in center"
document.body.appendChild(addDiv);

document.getElementById("btn").addEventListener('click', function() {
    let firstDiv = document.getElementsByTagName('div')[0];
    firstDiv.insertAdjacentHTML('afterend','<div>Div 2</div>');
    let button = document.getElementById("btn");
    button.parentNode.removeChild(button);
});