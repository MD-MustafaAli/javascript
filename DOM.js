var firstpara = document.querySelector("#one")
console.log(firstpara)

var Nodelist = document.querySelectorAll("p")
console.log(Nodelist)



var para = document.getElementsByTagName('p')[0]
para.setAttribute("class","Paragraphs")
para.setAttribute("id","one")
console.log(para)

var para = document.getElementsByTagName('p')[1]
para.setAttribute("class","Paragraphs")
para.setAttribute("id","Two")
console.log(para)

var para = document.getElementsByTagName('p')[2]
para.setAttribute("class","Paragraphs")
para.setAttribute("id","Three")
console.log(para)

var para = document.getElementsByTagName('p')[3]
para.setAttribute("class","Paragraphs")
para.setAttribute("id","Four")
console.log(para)

var fourthparagraph = document.getElementById("Four").innerHTML = "Fourth Paragraph"

console.log(fourthparagraph)


document.getElementById("one").style.color = "white"
document.getElementById("one").style.backgroundColor = "blue"
document.getElementById("one").style.fontSize = "10px"
document.getElementById("one").style.border = "2px solid black"

document.getElementById("Two").style.color = "white"
document.getElementById("Two").style.backgroundColor = "green"
document.getElementById("Two").style.fontSize = "20px"

document.getElementById("Three").style.color = "black"
document.getElementById("Three").style.backgroundColor = "aquamarine"
document.getElementById("Three").style.fontSize = "30px"

document.getElementById("Four").style.color = "black"
document.getElementById("Four").style.backgroundColor = "yellow"
document.getElementById("Four").style.fontSize = "40px"



// setInterval(function(){
//     document.querySelector("h1").style.color = "red"
// },1000)


// const h1Element = document.querySelector('body');
// const colors = ['white', 'green', 'blue', 'orange', 'purple']; // Add more colors as needed
// let colorIndex = 0;

// function changeColor() {
//   h1Element.style.backgroundColor = colors[colorIndex];
//   colorIndex = (colorIndex + 1) % colors.length;
// }

// setInterval(changeColor,4000); // Change color every 2 seconds (2000 milliseconds)

let Arrcolors = ['yellow','blue','green','white']

setInterval(()=>{
    for (let i = 0; i = Arrcolors.length+1; i++ ){
        document.querySelector("h1").style.color = Arrcolors[i]
    }
    
},1000)



