//your code here
function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
	// console.log(e.target.backgroundImage)
  e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  // e.target.appendChild(document.getElementById(data));
	const ele=e.target
	e.target=document.getElementById(data)
	// document.getElementById(data)=ele
}