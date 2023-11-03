// var arr1 = ['html', 'css', 'js']
// var newArr = arr1.map(function(upper){
//     return upper.toUpperCase()
// })
// console.log(newArr)

// var numarr2 = [ 1,2,3,4,5]
// var newArr2 = numarr2.map(function(square){
//     return square*square
// })
// console.log(newArr2)

// var productarr3 = [
//     {name:"Macbook pro" ,price:120000},
//     {name:"iphne15 pro" ,price:120000},
//     {name:"AppleWatch pro" ,price:120000},
//     {name:"ipadPad pro" ,price:120000} 
// ]

// var newArr3 = productarr3.map((item)=>{

// })
// // console.log(newArr3)

// var TempsinC = [70,20,100,40,50]
// var TempsinF = TempsinC.map((convert)=>{
//     return convert*9/5+32
// })
// console.log(TempsinF)


// let students = [
//     {name:"KhanAbdusSamadkhan",age:20}
//     {name:"Ghouse Pasha",age:21}
//     {name:"Ali Amer",age:20}
//     {name:"Mohsin",age:20}
// ]
// var students

var arr = [1,2,3,4,5]
var newArr = arr.map(function(elem,index){
    console.log(elem,"",index)
})

var newArr2 = arr.map(function(elem){
    return elem%2==0
})
console.log(newArr2)

