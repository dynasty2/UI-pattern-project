function myFunction() {
  var x = document.getElementById("characterLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const url = "https://swapi.co/api/people/"

fetch(url)
	.then(res => res.json())
	.then(res => {
		console.log(res)
	})
	.catch(err => console.log(err))

const url2 = "https://swapi.co/api/people/1/"

fetch(url2)
	.then(res => res.json())
	.then(res => {
		console.log(res)
		let p = document.querySelector(".walterP")
			p.innerText = res.name;
			console.log(res.name);
	})
	.catch(err => console.log(err))

const url3 = "https://swapi.co/api/people/2/"

fetch(url3)
	.then(res => res.json())
	.then(res => {
		console.log(res)
		let p = document.querySelector(".gusP")
			p.innerText = res.name;
			console.log(res.name);
	})
	.catch(err => console.log(err))

const url4 = "https://swapi.co/api/people/10/"

fetch(url4)
	.then(res => res.json())
	.then(res => {
		console.log(res)
		let p = document.querySelector(".saulP")
			p.innerText = res.name;
			console.log(res.name);
	})
	.catch(err => console.log(err))


	const walter = document.querySelector(".walter")
	walter.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("Meth Time.")
		const walterInfo = document.querySelector(".walter-info");
		walterInfo.style.opacity = 1;

	})

	const gus = document.querySelector(".gus")
	gus.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("Los Pollos Hermanos.")
		const gusInfo = document.querySelector(".gus-info");
		gusInfo.style.opacity = 1;
	})

	const saul = document.querySelector(".saul")
	saul.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("Better call Saul!")
		const saulInfo = document.querySelector(".saul-info");
		saulInfo.style.opacity = 1;
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