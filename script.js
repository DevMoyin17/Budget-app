const budgetItems = []
let bal = 0;
let budget = 0;
let operation=0;
let newIndex;
 let operationEdit=0;

const firstButton = () =>{
  const Mybudget = document.getElementById('totalbudget').value
  if(totalbudget !=''){
    budget = Number(Mybudget)
    bal = Number(Mybudget)
    error.style.display = 'none'
    document.getElementById ('totalbudget').value = ''
    }else{
      error.style.display = 'block'
    }
    displaybudget.innerHTML ='<span class ="fw-bold"> Total Budget:</span>' +budget 
    Mybalance.innerHTML ='<span class ="fw-bold"> Total Balance:</span>' + bal
    totalbudget = ''

}

const secondButton = () => {
  if (Items.value == '' || Amount.value == '' || Quantity.value == '') {
      error1.style.display = 'block'
  } else {
      error1.style.display = 'none'
      let bud = {
          name: Items.value,
          amount: Amount.value,
          quantity: Quantity.value,
      }
      if (budget > 0 && bal > 0) {
          if ((bud.amount * bud.quantity) <= bal) {
              budgetItems.push(bud)
              bal = bal - (bud.amount * bud.quantity)
      Mybalance.innerHTML ='<span class ="fw-bold"> Total Balance:</span>' + bal
      showItems()
              operation = bud.amount * bud.quantity
          } else {
              alert("Insufficient funds")
          }

      } else {
          alert("put a budget first")
      }
  }
}

const deleteItem = (i) =>{
    let confirmation = confirm('Are you sure you want to proceed?')
    if(confirmation == true){
      budgetItems.splice(i,1)
      showItems()
      bal = bal+operation
      Mybalance.innerHTML ='<span class ="fw-bold"> Total Balance:</span>' + bal
    }
  }
  const editItems = (i) =>{
    newIndex = i
  }
  const editValues = () =>{
    let bud = {
      name: newItems.value,
      amount: newAmount.value,
      quantity: newQuantity.value,
  }
  budgetItems.splice(newIndex,1,bud)
  showItems()
  operationEdit= bud.amount * bud.quantity
  bal=0
  bal= budget - operationEdit
  Mybalance.innerHTML ='<span class ="fw-bold"> Total Balance:</span>' + bal

  }
const showItems = () => {
    showAll.innerHTML = "";
        budgetItems.map((item,index)=>{
          showAll.innerHTML += 
          `<div className="row">
          <div class='col mx-2'>
              <div class="card p-1 mx-auto mt-5">
              <div class='fs-2 fw-bold'>${index+1}. ${item.name}</div>
              <div class='fs-1 fw-bolder'>
                  <span class="me-5">&#8358;${item.amount}</span>
                  <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning" onclick="editItems(${index})">Edit</button>
                  <button class="btn btn-danger" onclick="deleteItem(${index})">Delete</button>
              </div>
              <div class='card-footer'>Quantity: ${item.quantity}</div>
              <div class='card-footer'>Total: &#8358;${Number(item.quantity) * Number(item.amount)}</div>
              </div>
          </div>
      </div>
  `
        }

        )

  };

 


  
