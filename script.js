//your JS code here. If required.
cosnt target = document.getElementById("level")
if(target){
let level = 1;
	let parent = target.parentElement;
	while (parent){
		level++;
		parent = parent.parentElement;
		}
	alert("The level of the element is: " + level);
} else {
    alert("Element with id 'level' not found.");
}
