// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json));


const serchFood =()=>{
     const serchfild= document.getElementById("search-fild");
    const serctText=serchfild.value;
    serchfild.value=" ";
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${serctText}`;
    fetch(url)
     .then(res => res.json())
    .then(data => displaySearch(data.meals));
};
const displaySearch=meal=>{

  const serchResult=document.getElementById("search-result");
    serchResult.innerHTML=" ";
    if(meal==null){
      const div=document.createElement('h1');
      div.classList.add('error');
      div.innerHTML=`<h1 class="text-center"> Not result fond</h1>
      `;
      serchResult.appendChild(div);
     }
  

  meal.forEach(mil=>{
      const div=document.createElement('div');
      div.classList.add('col');
      div.innerHTML=`
      <div class="card">
      <img width="300px" src="${mil.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${mil.strMeal}</h5>
        <p class="card-text">${mil.strInstructions.slice(0,100)}</p>
      </div>
    </div>
      `;
      serchResult.appendChild(div);
  })
    ;
}
