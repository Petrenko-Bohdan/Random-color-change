buttonChangeColor.addEventListener('click', ()=>{
	let color = getRandomColor();
	document.body.style.backgroundColor = color;
	colorName.textContent = color;
})

function getRandomColor(){
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return "rgb("+r+","+g+","+b+")";
}