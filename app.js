//menu tab control
let openicon = document.getElementById("menuopen")
let closeicon = document.getElementById("menuclose")
let navbar = document.getElementById("navbar")

openicon.addEventListener("click", () => {
    navbar.style.display = "block"
})
closeicon.addEventListener("click", ()=>{
    navbar.style.display = "none"
})
// destination nav
let openicon2 = document.getElementById("menuopen2")
let closeicon2 = document.getElementById("menuclose2")
let navbar2 = document.getElementById("navbar2")

openicon2.addEventListener("click", () => {
    navbar2.style.display = "block"
})
closeicon2.addEventListener("click", ()=>{
    navbar2.style.display = "none"
})
//crew nav
let openicon3 = document.getElementById("menuopen3")
let closeicon3 = document.getElementById("menuclose3")
let navbar3 = document.getElementById("navbar3")

openicon3.addEventListener("click", () => {
    navbar3.style.display = "block"
})
closeicon3.addEventListener("click", ()=>{
    navbar3.style.display = "none"
})

// changing destinations
let moon = document.getElementById("moon")
let mars = document.getElementById("mars")
let europa = document.getElementById("europa")
let titan = document.getElementById("titan")

let destination_moon_div = document.getElementById("destination_moon_div")
let destination_mars_div = document.getElementById("destination_mars_div")
let destination_europa_div = document.getElementById("destination_europa_div")
let destination_titan_div = document.getElementById("destination_titan_div")

let moonimg = document.getElementById("moonimg")
let marsimg = document.getElementById("marsimg")
let europaimg = document.getElementById("europaimg")
let titanimg = document.getElementById("titanimg")

moon.addEventListener("click", () => {
    moon.classList.add("active_destination")
    mars.classList.remove("active_destination")
    europa.classList.remove("active_destination")
    titan.classList.remove("active_destination")

    destination_moon_div.style.display = "block"
    destination_mars_div.style.display = "none"
    destination_europa_div.style.display = "none"
    destination_titan_div.style.display = "none"

    moonimg.style.display = "block"
    marsimg.style.display = "none"
    europaimg.style.display = "none"
    titanimg.style.display = "none"
})

mars.addEventListener("click", () => {
    moon.classList.remove("active_destination")
    mars.classList.add("active_destination")
    europa.classList.remove("active_destination")
    titan.classList.remove("active_destination")

    destination_moon_div.style.display = "none"
    destination_mars_div.style.display = "block"
    destination_europa_div.style.display = "none"
    destination_titan_div.style.display = "none"

    moonimg.style.display = "none"
    marsimg.style.display = "block"
    europaimg.style.display = "none"
    titanimg.style.display = "none"
})

europa.addEventListener("click", () => {
    moon.classList.remove("active_destination")
    mars.classList.remove("active_destination")
    europa.classList.add("active_destination")
    titan.classList.remove("active_destination")

    destination_moon_div.style.display = "none"
    destination_mars_div.style.display = "none"
    destination_europa_div.style.display = "block"
    destination_titan_div.style.display = "none"

    moonimg.style.display = "none"
    marsimg.style.display = "none"
    europaimg.style.display = "block"
    titanimg.style.display = "none"
})
titan.addEventListener("click", () => {
    moon.classList.remove("active_destination")
    mars.classList.remove("active_destination")
    europa.classList.remove("active_destination")
    titan.classList.add("active_destination")

    destination_moon_div.style.display = "none"
    destination_mars_div.style.display = "none"
    destination_europa_div.style.display = "none"
    destination_titan_div.style.display = "block"

    moonimg.style.display = "none"
    marsimg.style.display = "none"
    europaimg.style.display = "none"
    titanimg.style.display = "block"
})

//CREW PAGE
let crewinfo1 = document.getElementById("crewinfo1")
let crewinfo2 = document.getElementById("crewinfo2")
let crewinfo3 = document.getElementById("crewinfo3")
let crewinfo4 = document.getElementById("crewinfo4")

let douglas_text = document.getElementById("douglas_text")
let mark_text = document.getElementById("mark_text")
let victor_text = document.getElementById("victor_text")
let ansari_text = document.getElementById("ansari_text")

let crewimg1 = document.getElementById("crewimg1")
let crewimg2 = document.getElementById("crewimg2")
let crewimg3 = document.getElementById("crewimg3")
let crewimg4 = document.getElementById("crewimg4")


crewinfo1.addEventListener("click", () => {
    crewinfo1.style.backgroundColor = "white"
    crewinfo2.style.backgroundColor = "grey"
    crewinfo3.style.backgroundColor = "grey"
    crewinfo4.style.backgroundColor = "grey"

    douglas_text.style.display = "block"
    mark_text.style.display = "none"
    victor_text.style.display = "none"
    ansari_text.style.display = "none"

    crewimg4.style.display = "block"
    crewimg1.style.display = "none"
    crewimg2.style.display = "none"
    crewimg3.style.display = "none"
})
crewinfo2.addEventListener("click", () => {
    crewinfo1.style.backgroundColor = "grey"
    crewinfo2.style.backgroundColor = "white"
    crewinfo3.style.backgroundColor = "grey"
    crewinfo4.style.backgroundColor = "grey"
    

    douglas_text.style.display = "none"
    mark_text.style.display = "block"
    victor_text.style.display = "none"
    ansari_text.style.display = "none"

    crewimg4.style.display = "none"
    crewimg1.style.display = "block"
    crewimg2.style.display = "none"
    crewimg3.style.display = "none"
})
crewinfo3.addEventListener("click", () => {
    crewinfo1.style.backgroundColor = "grey"
    crewinfo2.style.backgroundColor = "grey"
    crewinfo3.style.backgroundColor = "white"
    crewinfo4.style.backgroundColor = "grey"

    douglas_text.style.display = "none"
    mark_text.style.display = "none"
    victor_text.style.display = "block"
    ansari_text.style.display = "none"

    crewimg4.style.display = "none"
    crewimg1.style.display = "none"
    crewimg2.style.display = "block"
    crewimg3.style.display = "none"
})
crewinfo4.addEventListener("click", () => {
    crewinfo1.style.backgroundColor = "grey"
    crewinfo2.style.backgroundColor = "grey"
    crewinfo3.style.backgroundColor = "grey"
    crewinfo4.style.backgroundColor = "white"

    douglas_text.style.display = "none"
    mark_text.style.display = "none"
    victor_text.style.display = "none"
    ansari_text.style.display = "block"

    crewimg4.style.display = "none"
    crewimg1.style.display = "none"
    crewimg2.style.display = "none"
    crewimg3.style.display = "block"
})