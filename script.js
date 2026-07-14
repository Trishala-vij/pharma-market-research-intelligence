const ctx = document.getElementById("marketChart");

if (ctx) {
new Chart(ctx, {
type: "bar",

data: {

labels: [
"Cardiovascular",
"Oncology",
"Diabetes",
"Immunology",
"Rare Diseases"
],

datasets: [

{

label: "Market Size ($ Billion)",

data: [460, 445, 420, 390, 370],

backgroundColor: [

"#1565C0",
"#26A69A",
"#66BB6A",
"#FFA726",
"#EF5350"

],

borderRadius: 8

}

]

},

options: {

responsive: true,

plugins: {

legend: {

display: true

}

},

scales: {

y: {

beginAtZero: true

}

}

}

});

}

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

console.log("Pharma Market Research Intelligence Website Loaded Successfully");