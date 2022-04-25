// Store the wallet amount to your local storage with key "amount"

  let walletAmount=JSON.parse(localStorage.getItem("amount"))||0;
  document.getElementById("form").addEventListener("submit",addMoney);
  function addMoney(){
    event.preventDefault();
    let amount=document.getElementById("amount").value;
    localStorage.setItem("amount",Number(amount)+walletAmount);
    alert("Successfully Added.");
    window.location.reload();
  }

 function showAmount(){
  let h1=document.createElement("h1");
  h1.innerText="Wallet Amount:"+walletAmount;
  h1.setAttribute("id","wallet");
  document.getElementById("wallet_div").append(h1);
}
showAmount();

function showMovies(){
  window.location.href="movies.html";
}
