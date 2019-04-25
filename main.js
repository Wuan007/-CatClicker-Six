class cat {
constructor(name, picture, clicks = 0) {
  this.name = name;
  this.picture = picture;
  this.clicks = clicks;
  }
}

const cat1 = new cat ("jungletiger", "img/jungletiger.jpg");
const cat2 = new cat ("Batty", "img/panther.jpg");
const cat3 = new cat ("catty", "img/yellow.jpg");
const cat4 = new cat ("tiger",  "img/rare.jpg");
const cat5 = new cat ("Edy",   "img/killer-jpg.jpg");
const cat6 = new cat ("Frizzy","img/maltese_Tiger.jpg");


const cats = [cat1, cat2, cat3, cat4, cat5, cat6];


const leftColumn = document.querySelector(".col-4");
// Construct cat list
const ul = document.createElement("ul");                                                                                                                                                          
ul.className = "list-group";

for(let cat of cats) {
  const li = document.createElement('li');
  li.className = "list-group-item";
  li.textContent = cat.name;
  li.addEventListener("click", ()=>{
displayCat(cat);
  })

  ul.appendChild(li)
}

leftColumn.appendChild(ul);


const displayCat = (cat) => {
  const rightColumn = document.querySelector(".col-8")

  // clear the display
  rightColumn.innerHTML = "";
//display the current cat
const h1 = document.createElement("h1");
h1.textContent = cat.name;
rightColumn.appendChild(h1);

const img = document.createElement("img");
img.setAttribute("src",cat.picture);
img.setAttribute("alt", "cat");
img.addEventListener("click", ()=>{
cat.clicks++;
h2.textContent = `Clicks: ${cat.clicks}`;
}) 
rightColumn.appendChild(img);

const h2 = document.createElement("h2");
h2.textContent = `Clicks: ${cat.clicks}`;
// h2.textContent = "Clicks: " + cat.clicks;
rightColumn.appendChild(h2);
}
