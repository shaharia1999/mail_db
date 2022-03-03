const buddys=()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res =>res.json())
    .then(data=>displybddy(data));
}
document.getElementById('button').addEventListener('click',function(){
    buddys();
})
const displybddy=(data)=>{

    
    const resultbuddy=data.results;
    const buddydiv=document.getElementById("buddy");
    resultbuddy.forEach(result=>{
      buddydiv.innerHTML=`<p>${result.email}</p>`
    })

}
