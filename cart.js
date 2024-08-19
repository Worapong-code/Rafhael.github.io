
let idCart =  localStorage.getItem("id");
const arr = idCart.split(',');

let allday=''
let count = 0;

// arr.forEach(element => {
  
//  const allday2 = products.map( (props) =>{
//     if(props.id==element){
//       console.log( arr)
//       return (
//         `<tr >
//          <th scope="list-inline ">${props.id}</th>
//          <td><img src="${props.url}" style="width: 4rem;" alt=""></td>
//          <td>${props.name}</td>
//          <td class="row justify-content-start">
//            <h5 class="col-sm-2 ">
//            ${count}
//            </h5>
//            <a class="btn btn-primary col-sm-2 btn-sm" onclick="addToCart(${props.id})">+</a>
//            <a class="btn btn-danger col-sm-2 ml-1 btn-sm">-</a>
//          </td>
//          <td>${props.price*count}</td>
//        </tr>`
//       )
//     }
//   }).join('');
//   allday += allday2;
  
//   // console.log(data)
//    document.getElementById('inCart').innerHTML = allday
// });


   


    // console.log( idCart[index]+ " index" )
    document.getElementById("inCart").innerHTML  = products.map((element)=>{
      for (let index = 0; index < arr.length; index++) {
       
        console.log(count)
      if (element.id==arr[index]) {
      console.log( arr[index] +" index")
      console.log( element.id+" element")
  

   return (
      `<tr >
      <th scope="list-inline ">${element.id}</th>
      <td><img src="${element.url}" style="width: 4rem;" alt=""></td>
      <td>${element.name}</td>
      <td class="row justify-content-start">
        <h5 class="col-sm-2 ">
        ${element.discount}
        </h5>
        <a class="btn btn-primary col-sm-2 btn-sm" onclick="addToCart1(${element.id})">+</a>
        <a class="btn btn-danger col-sm-2 ml-1 btn-sm">-</a>
      </td>
      <td>${element.price}</td>
    </tr>`
          )} 
        
       } }).join("")
        
        
    function   addToCart1(e){
      console.log(e)
        //Find index of specific object using findIndex method.    
const objIndex = products.findIndex(obj => obj.id == e);

//Log object to Console.
console.log("Before update: ", products[objIndex])

//Update object's name property.
products[objIndex].discount ="50";

//Log object to console again.
console.log("After update: ", products[objIndex])
       }