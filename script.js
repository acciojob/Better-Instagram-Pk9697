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
	const data = e.dataTransfer.getData("text");
	const draggedElement=document.getElementById(data)
	const droppedOnElement=e.target
  
	console.log(draggedElement,droppedOnElement)
	  
	// Save the sibling of the element we dragged because we need this for the insertBefore() method
	  const draggedElementSibling = draggedElement.nextSibling === droppedOnElement ? draggedElement : draggedElement.nextSibling;
	 
	  // Swap elements 
	  droppedOnElement.parentNode.insertBefore(draggedElement, droppedOnElement.nextSibling);
	  droppedOnElement.parentNode.insertBefore(droppedOnElement, draggedElementSibling);
	
	
}