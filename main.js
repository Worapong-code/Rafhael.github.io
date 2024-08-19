document.getElementById("bests").innerHTML  = products.map((element)=>{

    if (element.best) {
     return (
        `<div class="card col-md-3  mt-sm-2" style="width: 10rem;">
        <img class="card-img-top" src="${element.url}">
        <div class="card-body">
          <p class="card-text">${element.name}</p>
          <h5 class="card-text">${element.price} $</h5>
        </div>
      </div>`
  )
    } 


 }).join("")
