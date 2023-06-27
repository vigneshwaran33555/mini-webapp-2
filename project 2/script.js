function calculate(){
    let str=document.getElementById("input").value
    let para1=str.split(' ')
    let len=para1.length
    let r=document.getElementById("result")
    r.innerHTML=len+'words'

}