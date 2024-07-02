//your code here
function allowDrop(e) {
	e.preventDefault();
} 
 
function drag(e) {
	e.dataTransfer.setData("text", e.target.id);
} 
  
function drop(e) {
	e.preventDefault();
	const data = e.dataTransfer.getData("text");
	const draggedElementParent=document.getElementById(data)
	const droppedOnElement=e.target
	const droppedOnElementParent=e.target.parentNode
  	
	const tempId=draggedElementParent.childNodes[1].id
	draggedElementParent.childNodes[1].id=droppedOnElementParent.childNodes[1].id
	droppedOnElementParent.childNodes[1].id=tempId	
	
	const tempSrc=draggedElementParent.childNodes[1].src
	draggedElementParent.childNodes[1].src=droppedOnElementParent.childNodes[1].src
	droppedOnElementParent.childNodes[1].src=tempSrc	

	// console.log(draggedElementParent.childNodes[1],droppedOnElementParent)
	
	
}