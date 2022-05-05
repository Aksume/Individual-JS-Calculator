let display = document.getElementById("display");

// let newcoppiedarray = document.getElementsByClassName("btn");
// console.log(newcoppiedarray);
// console.log(newcoppiedarray); //here we got it looks like an array but html collection so we convert to array
let newcoppiedarray = Array.from(document.getElementsByClassName("btn")); //our html collection to convert an array

// console.log(newcoppiedarray)
newcoppiedarray.map((btn) =>{
	
	btn.addEventListener("click", (e) => {
		switch (e.target.innerText) {
			case "AC":
				display.innerText = "";
				break;
			case "=":
				try {
					display.innerText = eval(display.innerText);
				} catch {
					display.innerText = "Error"; // we can handel the error is here
				}
				break;

			default:
				display.innerText += e.target.innerText;
		}
	});
});


function adding(num1, num2) { 
let answer; 
	return a + b
}
let x = adding(5, 3);
	 console.log(x)





