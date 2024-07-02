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
  	
	const temp=draggedElementParent.childNodes[1].id
	draggedElementParent.childNodes[1].id=droppedOnElementParent.childNodes[1].id
	droppedOnElementParent.childNodes[1].id=temp	
}