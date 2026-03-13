function sendData(){

    let offer = document.getElementById("offer").value;
    let guests = document.getElementById("guests").value;
    let checkIn = document.getElementById("checkin").value;
    let checkOut = document.getElementById("checkout").value;

    if(offer === "" || guests === "" || checkIn === "" || checkOut === ""){
        alert("Formulaire incomplet");
        event.preventDefault();
        return;
    }

    localStorage.setItem("offer", offer);
    localStorage.setItem("guests", guests);
    localStorage.setItem("checkIn", checkIn);
    localStorage.setItem("checkOut", checkOut);
    

    let basic = 99;
    let medium = 149;
    let premium = 199;
    let total;

      if(offer === "Standard"){
      total = basic * guests;
      }

      if(offer === "Confort"){
      total = medium * guests;
      }

      if(offer === "Premium"){
      total = premium * guests;
      }
      localStorage.setItem("total", total);

    return total;

      

}

function showPaymentForm(){

    let card = document.getElementById("card").checked;
    let paypal = document.getElementById("paypal").checked;
    let apple = document.getElementById("applepay").checked;

    if(card){
    document.getElementById("cardForm").style.display = "block";
    document.getElementById("paypalForm").style.display = "none";
    document.getElementById("appleForm").style.display = "none";
    }

    if(paypal){
    document.getElementById("cardForm").style.display = "none";
    document.getElementById("paypalForm").style.display = "block";
    document.getElementById("appleForm").style.display = "none";
    }

    if(apple){
    document.getElementById("cardForm").style.display = "none";
    document.getElementById("paypalForm").style.display = "none";
    document.getElementById("appleForm").style.display = "block";
    }

}
