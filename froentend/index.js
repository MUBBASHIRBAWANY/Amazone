function allData(){


    table.innerHTML = ``
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('cart')) ?? []
    let cn1 = contactList.length
    //looping data and show data in table
    contactList.forEach(function (value, i){
       
        let table = document.getElementById('table').innerHTML += `
        <div class="card-body">
        <div class="d-flex justify-content-between">
        <div class="d-flex flex-row align-items-center">
          <div>
            <img
              src="${value.img}"
              class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
          </div>
          <div class="ms-3">
            <h5>${value.name}</h5>
            <p class="small mb-0">${value.brand}</p>
          </div>
        </div>
        <div class="d-flex flex-row align-items-center">
        <input value="${value.qty}" />
          <div style="width: 50px;">
            
          </div>
          <div style="width: 80px;">
            <h5 class="mb-0">$ ${value.price}</h5>
          </div>
          <a href="#!" style="color: #cecece;" onclick="removeData(${value.id})"><i class="fas fa-trash-alt"></i></a>
          </div>
          </div>
      </div>`

    })
document.getElementById("qtyVal").innerHTML = contactList.length
cart1 = JSON.parse(localStorage.getItem('cart')) ?? []
cart2 = []
cart1.forEach(function (value, i){
cart2.push(value.price * value.qty)

})
document.getElementById("t-Price").innerHTML = `$  ${(multiply(cart2))}`




//t-Price = document.getElementById("t-Price").innerHTML = 
}

function multiply (array) {
  var sum=0;
  for (var i=0; i<array.length; i++) {
      sum = sum + array[i];
  } 
  return sum;
}
allData();

function removeData(id){
  contactList1 = JSON.parse(localStorage.getItem('cart'))
  contactList = contactList1.filter(function(value){ 
    return value.id != id; 
});


// save array into localstorage
localStorage.setItem('cart', JSON.stringify(contactList))

//get data again
allData()
}

