


// function add()
// {

    
//     var num1 = Number(document.getElementById('num1').value)
//     var num2 = Number(document.getElementById('num2').value)
//     let result=num1+num2
//     document.getElementById('hhh').innerHTML= "add= "+result

//     console.log(result)

// }


// function multiy()
// {

//     var num1 = Number(document.getElementById('num1').value)
//     var num2 = Number(document.getElementById('num2').value)
//     let multy= num1*num2
//     document.getElementById('mlt').innerHTML = "multy= "+ multy
//     console.log(multy)
// }


// function dividd() {

//     var num1 = Number(document.getElementById('num1').value)
//     var num2 = Number(document.getElementById('num2').value)
//     let divid = num1 / num2
//     document.getElementById('dividdd').innerHTML ="divid= "+ divid
//     console.log(divid)
// }

// function sub() {

//     var num1 = Number(document.getElementById('num1').value)
//     var num2 = Number(document.getElementById('num2').value)
//     let sub = num1 - num2
//     document.getElementById('sub').innerHTML = "sub= "+ sub
//     console.log(sub)
// }




function display(x){
    document.getElementById('res').value+=x
}

function Calc(){
    document.getElementById('res').value=eval(document.getElementById('res').value)
}
function cls(){
    document.getElementById('res').value=''
}

function ANS(){
    document.getElementById('res').value +=x


}

function sine(degree) {
    // radians = degrees * PI / 180
    let x = Math.sin(degree * Math.PI / 180);
}

