function myFunction() {
  var x = document.getElementById("characterLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const url = "https://www.breakingbadapi.com/api/"

fetch(url)
	.then(res => res.json())
	.then(res => {
		console.log(res)
	})
	.catch(err => console.log(err))

///***///
const url2 = "https://www.breakingbadapi.com/api/characters/1"

fetch(url2)
	.then(res => res.json())
	.then(res => {
		console.log(res)
		let p = document.querySelector(".walterP")
			p.innerText = res[0].name;
		let wh = document.querySelector("#w-home")
			wh.innerText = res[0].nickname;
			console.log(res[0].name);
	})
	.catch(err => console.log(err))

// const url5 = "https://swapi.co/api/planets/1/"

// fetch(url5)
// 	.then(res => res.json())
// 	.then(res => {
// 		console.log(res)
// 		let wh = document.querySelector("#w-home")
// 			wh.innerText = res.name;
// 			console.log(res.name);
// 	})
// 	.catch(err => console.log(err))

///***///
const url3 = "https://www.breakingbadapi.com/api/characters?name=Gustavo+Fring"

fetch(url3)
	.then(res => res.json())
	.then(res => {
		console.log(res)
		let p = document.querySelector(".gusP")
			p.innerText = res[0].name;
		let gh = document.querySelector("#g-home")
			gh.innerText = res[0].nickname
			console.log(res[0].name);
	})
	.catch(err => console.log(err))

// const url6 = "https://swapi.co/api/planets/8/"

// fetch(url6)
// 	.then(res => res.json())
// 	.then(res => {
// 		console.log(res)
// 		let gh =document.querySelector("#g-home")
// 			gh.innerText =res.name;
// 			console.log(res.name);
// 	})
// 	.catch(err => console.log(err))

//**//

const url4 = "https://www.breakingbadapi.com/api/characters?name=Saul+Goodman"

fetch(url4)
	.then(res => res.json())
	.then(res => {
		console.log(res)
		let p = document.querySelector(".saulP")
			p.innerText = res[0].name;
		let sh =document.querySelector("#s-home")
			sh.innerText = res[0].nickname;
			console.log(res[0].name);
	})
	.catch(err => console.log(err))

// const url7 = "https://swapi.co/api/planets/20/"

// fetch(url7)
// 	.then(res => res.json())
// 	.then(res => {
// 		console.log(res)
// 		let sh = document.querySelector("#s-home")
// 			sh.innerText = res.name;
// 			console.log(res.name);
// 	})
// 	.catch(err => console.log(err))

	//**//

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