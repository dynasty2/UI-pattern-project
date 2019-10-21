function myFunction() {
  var x = document.getElementById("characterLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  // const saulInfo = document.querySelector(".saul-info");
		// const walterInfo = document.querySelector(".walter-info");
		// const gusInfo = document.querySelector(".gus-info");
		// saulInfo.style.opacity = 0;
		// walterInfo.style.opacity = 0;
		// gusInfo.style.opacity = 0;
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
		let wl = document.querySelector("#w-life")
			wl.innerText = res[0].status
		let wi = document.querySelector("#w-image")
			wi.setAttribute("src", res[0].img);
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
		let gl = document.querySelector("#g-life")
			gl.innerText = res[0].status
		let gi = document.querySelector("#g-image")
			gi.setAttribute("src", res[0].img);
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
		let sl = document.querySelector("#s-life")
			sl.innerText = res[0].status
		let si = document.querySelector("#s-image")
			si.setAttribute("src", res[0].img);
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
		const gusInfo = document.querySelector(".gus-info");
		const saulInfo = document.querySelector(".saul-info");
		walterInfo.style.opacity = 1;
		gusInfo.style.opacity = 0;
		saulInfo.style.opacity = 0;

	})

	const gus = document.querySelector(".gus")
	gus.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("Los Pollos Hermanos.")
		const gusInfo = document.querySelector(".gus-info");
		const walterInfo = document.querySelector(".walter-info");
		const saulInfo = document.querySelector(".saul-info");
		gusInfo.style.opacity = 1;
		walterInfo.style.opacity = 0;
		saulInfo.style.opacity = 0;
	})

	const saul = document.querySelector(".saul")
	saul.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("Better call Saul!")
		const saulInfo = document.querySelector(".saul-info");
		const walterInfo = document.querySelector(".walter-info");
		const gusInfo = document.querySelector(".gus-info");
		saulInfo.style.opacity = 1;
		walterInfo.style.opacity = 0;
		gusInfo.style.opacity = 0;
	})

	const home = document.querySelector(".active")
	home.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("home")
		const walterInfo = document.querySelector(".walter-info");
		const gusInfo = document.querySelector(".gus-info");
		const saulInfo = document.querySelector(".saul-info");
		walterInfo.style.opacity = 0;
		gusInfo.style.opacity = 0;
		saulInfo.style.opacity = 0;

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