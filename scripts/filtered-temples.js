




document.getElementById("currentyear").innerHTML = "©" + new Date().getFullYear() + "- Spencer Bell - Idaho, United States"
document.getElementById("lastModified").innerHTML = "last Modification: " + document.lastModified

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Fort Collins Colorado",
    location: "Fort Collins, Colorado",
    dedicated: "2016, October 16",
    area: 42000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fort-collins-colorado/2018/400x250/Fort-Collins-Temple02.jpg"
  },
  {
    templeName: "Dallas Texas",
    location: "Dallas, Texas",
    dedicated: "1984, October 19",
    area: 44207,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/dallas-texas/2018/400x250/Dallas-Texas-Temple06.jpg"
  },
  {
    templeName: "Gilbert Arizona",
    location: "Gilbert, Arizona",
    dedicated: "2014, March 2",
    area: 85326,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/gilbert-arizona/400x250/gilbert-arizona-lds-temple-1172166-wallpaper.jpg"
  }
];

const navId = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', function() {
    navId.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const linkArray = ["homeLink","oldLink","newLink","largeLink","smallLink"];

function allEventListeners(){

            document.querySelector("#homeLink").addEventListener('click',function(){
              clearLinkClasslist()
              showAll()
              document.querySelector("#homeLink").classList.add('active');
          })
            document.querySelector("#oldLink").addEventListener('click',function(){
              clearLinkClasslist()
              showOld()
              document.querySelector("#oldLink").classList.add('active');
          })
            document.querySelector("#newLink").addEventListener('click',function(){
              clearLinkClasslist()
              showNew()
              document.querySelector("#newLink").classList.add('active');
          })
            document.querySelector("#largeLink").addEventListener('click',function(){
              clearLinkClasslist()
              showLarge()
              document.querySelector("#largeLink").classList.add('active');
          })
            document.querySelector("#smallLink").addEventListener('click',function(){
              clearLinkClasslist()
              showSmall()
              document.querySelector("#smallLink").classList.add('active');
            }
        )
}

function clearLinkClasslist(){
  document.querySelector("#homeLink").classList.remove('active');
  document.querySelector("#oldLink").classList.remove('active');
  document.querySelector("#newLink").classList.remove('active');
  document.querySelector("#largeLink").classList.remove('active');
  document.querySelector("#smallLink").classList.remove('active');
}

allEventListeners(linkArray);

function renderTemple(temple){
    console.log(Object.keys(temple));
    console.log(temple.imageUrl)
    const newTemple = `<figure><img src=${temple["imageUrl"]}></figure>`
    
    const templeCard = `<figure>
        <figcaption>
        <h3>${temple.templeName}</h3></p><small>Location: </small>${temple.location}</p>
        </p><small>Dedicated: </small>${temple.dedicated}</p>
        </p><small>Size: </small>${temple.area} Sq ft</p>
        <img src=${temple.imageUrl} alt =${temple.templeName} loading="lazy">
        </figcaption>
        </figure>
    `
    document.querySelector("main").innerHTML += templeCard
}

function clearTemples(){
    document.querySelector("main").innerHTML = "<h2>Home</h2>";
}

function showAll(){
    clearTemples()
    temples.forEach(temple => {
        renderTemple(temple);
    });
}

function showOld(){
    clearTemples()
    const oldTemples =temples.filter(temple => temple.dedicated.substring(0,4) < 1900)
    oldTemples.forEach(temple => {renderTemple(temple)});
}

function showNew(){
    clearTemples()
    const newTemples = temples.filter(temple => temple.dedicated.substring(0,4) > 2000)
    newTemples.forEach(temple => {renderTemple(temple)});
}

function showLarge(){
    clearTemples()
    const largeTemples = temples.filter(temple => temple.area > 90000)
    largeTemples.forEach(temple => {renderTemple(temple)})
}

function showSmall(){
    clearTemples()
    const smallTemples = temples.filter(temple => temple.area <10000)
    smallTemples.forEach(temple =>{renderTemple(temple)});
}

showAll();

console.log("yeah bruh")