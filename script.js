function myFunction() {
  var x = document.getElementById("characterLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const url = "https://www.breakingbadapi.com/api/characters"
// const x = document.querySelector("")

fetch(url)
	.then(res => res.json())
	.then(res => {
		console.log(res)
	})
	.catch(err => console.log(err))

	const url2 = "https://www.breakingbadapi.com/api/characters/1"
// const x = document.querySelector("")

fetch(url2)
	.then(res => res.json())
	.then(res => {
		console.log(res)
	})
	.catch(err => console.log(err))

	const walter = document.querySelector("#walter")
	walter.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("Meth Time.")
	})

	const gus = document.querySelector("#gus")
	gus.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("Los Pollos Hermanos.")
	})

	const saul = document.querySelector("#saul")
	saul.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("Better call Saul!")
	})

// const url2 = "https://pokeapi.co/api/v2/berry/"
// const ul = document.querySelector("ul")

// fetch(url2)
// 	.then(res => res.json())
// 	.then(res => {
// 		console.log(res.results)
// 		let berries = res.results
// 		for (let i = 0; i < berries.length; i++ ) {
// 			console.log(berries[i])
// 			let li = document.createElement("li")
// 			li.innerText = berries[i].name
// 			ul.appendChild(li)
// 		}
// 	})
// 	.catch(err => console.log(err))