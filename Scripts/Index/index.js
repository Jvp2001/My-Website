export
{}

export function openNavBar()
{
	main.style.marginLeft = "25%";
	NavBar.style.width="25%";
	NavBar.style.display = "none";
	isOpen = true;
	console.log('true');
}


export function closeNavBar()
{
	main.style.marginLeft = '0%';
	NavBar.style.display = "none";
	isOpen=false;
	console.log('false');
}
console.log("imported index");