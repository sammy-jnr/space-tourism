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
//crewpage nav
let openicon3 = document.getElementById("menuopen3")
let closeicon3 = document.getElementById("menuclose3")
let navbar3 = document.getElementById("navbar3")

openicon3.addEventListener("click", () => {
    navbar3.style.display = "block"
})
closeicon3.addEventListener("click", ()=>{
    navbar3.style.display = "none"
})
//technology nav
let openicon4 = document.getElementById("menuopen4")
let closeicon4 = document.getElementById("menuclose4")
let navbar4 = document.getElementById("navbar4")

openicon4.addEventListener("click", () => {
    navbar4.style.display = "block"
})
closeicon4.addEventListener("click", ()=>{
    navbar4.style.display = "none"
})

const homepage = document.getElementById("Homepage")
const destinationpage = document.getElementById("destinationpage")
const crewpage = document.getElementById("crewpage")
const technologypage = document.getElementById("technologypage")



//page1

let home = document.getElementById("home")
let destinations = document.getElementById("destinations")
let crew = document.getElementById("crew")
let technology = document.getElementById("technology")

home.addEventListener("click", ()=>{
    navbar.style.display = "none"
    homepage.style.display = "block"
    destinationpage.style.display = "none"
    crewpage.style.display = "none"
    technologypage.style.display = "none"
})
destinations.addEventListener("click", ()=>{
    navbar.style.display = "none"
    homepage.style.display = "none"
    destinationpage.style.display = "block"
    crewpage.style.display = "none"
    technologypage.style.display = "none"
})
crew.addEventListener("click", ()=>{
    navbar.style.display = "none"
    homepage.style.display = "none"
    destinationpage.style.display = "none"
    crewpage.style.display = "block"
    technologypage.style.display = "none"
})
technology.addEventListener("click", ()=>{
    navbar.style.display = "none"
    homepage.style.display = "none"
    destinationpage.style.display = "none"
    crewpage.style.display = "none"
    technologypage.style.display = "block"
})

//page 2 nav items
let home2 = document.getElementById("home2")
let destination2 = document.getElementById("destinations2")
let crew2 = document.getElementById("crew2")
let technology2 = document.getElementById("technology2")

home2.addEventListener("click", ()=>{
    navbar2.style.display = "none"
    homepage.style.display = "block"
    destinationpage.style.display = "none"
    crewpage.style.display = "none"
    technologypage.style.display = "none"
})
destination2.addEventListener("click", ()=>{
    navbar2.style.display = "none"
    homepage.style.display = "none"
    destinationpage.style.display = "block"
    crewpage.style.display = "none"
    technologypage.style.display = "none"
})
crew2.addEventListener("click", ()=>{
    navbar2.style.display = "none"
    homepage.style.display = "none"
    destinationpage.style.display = "none"
    crewpage.style.display = "block"
    technologypage.style.display = "none"
})
technology2.addEventListener("click", ()=>{
    navbar2.style.display = "none"
    homepage.style.display = "none"
    destinationpage.style.display = "none"
    crewpage.style.display = "none"
    technologypage.style.display = "block"
})


// page 3 nav items
let home3 = document.getElementById("home3")
let destinations3 = document.getElementById("destinations3")
let crew3 = document.getElementById("crew3")
let technology3 = document.getElementById("technology3")

home3.addEventListener("click", ()=>{
    navbar3.style.display = "none"
    homepage.style.display = "block"
    destinationpage.style.display = "none"
    crewpage.style.display = "none"
    technologypage.style.display = "none"
})
destinations3.addEventListener("click", ()=>{
    navbar3.style.display = "none"
    homepage.style.display = "none"
    destinationpage.style.display = "block"
    crewpage.style.display = "none"
    technologypage.style.display = "none"
})
crew3.addEventListener("click", ()=>{
    navbar3.style.display = "none"
    homepage.style.display = "none"
    destinationpage.style.display = "none"
    crewpage.style.display = "block"
    technologypage.style.display = "none"
})
technology3.addEventListener("click", ()=>{
    navbar3.style.display = "none"
    homepage.style.display = "none"
    destinationpage.style.display = "none"
    crewpage.style.display = "none"
    technologypage.style.display = "block"
})


//page 4 nav items

let home4 = document.getElementById("home4")
let destinations4 = document.getElementById("destinations4")
let crew4 = document.getElementById("crew4")
let technology4 = document.getElementById("technology4")

home4.addEventListener("click", ()=>{
    navbar4.style.display = "none"
    homepage.style.display = "block"
    destinationpage.style.display = "none"
    crewpage.style.display = "none"
    technologypage.style.display = "none"
})
destinations4.addEventListener("click", ()=>{
    navbar4.style.display = "none"
    homepage.style.display = "none"
    destinationpage.style.display = "block"
    crewpage.style.display = "none"
    technologypage.style.display = "none"
})
crew4.addEventListener("click", ()=>{
    navbar4.style.display = "none"
    homepage.style.display = "none"
    destinationpage.style.display = "none"
    crewpage.style.display = "block"
    technologypage.style.display = "none"
})
technology4.addEventListener("click", ()=>{
    navbar4.style.display = "none"
    homepage.style.display = "none"
    destinationpage.style.display = "none"
    crewpage.style.display = "none"
    technologypage.style.display = "block"
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

//crewpage PAGE
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

//technology page
let changediv1 = document.getElementById("changediv1")
let changediv2 = document.getElementById("changediv2")
let changediv3 = document.getElementById("changediv3")

let tech_launch_vehicle = document.getElementById("tech_launch_vehicle")
let tech_spaceport = document.getElementById("tech_spaceport")
let tech_spacecapsule = document.getElementById("tech_spacecapsule")

let launch_vehicle = document.getElementById("launch_vehicle")
let spaceport = document.getElementById("spaceport")
let space_capsule = document.getElementById("space_capsule")



changediv1.addEventListener("click" ,() =>{
    changediv1.style.color = "black"
    changediv1.style.backgroundColor = "white"
    changediv2.style.color = "white"
    changediv2.style.backgroundColor = "black"
    changediv3.style.color = "white"
    changediv3.style.backgroundColor = "black"

    tech_launch_vehicle.style.display = "block"
    tech_spaceport.style.display = "none"
    tech_spacecapsule.style.display = "none"

    launch_vehicle.style.display = "block"
    spaceport.style.display = "none"
    space_capsule.style.display = "none"
})

changediv2.addEventListener("click" ,() =>{
    changediv1.style.color = "white"
    changediv1.style.backgroundColor = "black"
    changediv2.style.color = "black"
    changediv2.style.backgroundColor = "white"
    changediv3.style.color = "white"
    changediv3.style.backgroundColor = "black"

    tech_launch_vehicle.style.display = "none"
    tech_spaceport.style.display = "block"
    tech_spacecapsule.style.display = "none"

    launch_vehicle.style.display = "none"
    spaceport.style.display = "block"
    space_capsule.style.display = "none"
})

changediv3.addEventListener("click" ,() =>{
    changediv1.style.color = "white"
    changediv1.style.backgroundColor = "black"
    changediv2.style.color = "white"
    changediv2.style.backgroundColor = "black"
    changediv3.style.color = "black"
    changediv3.style.backgroundColor = "white"

    tech_launch_vehicle.style.display = "none"
    tech_spaceport.style.display = "none"
    tech_spacecapsule.style.display = "block"

    launch_vehicle.style.display = "none"
    spaceport.style.display = "none"
    space_capsule.style.display = "block"
})