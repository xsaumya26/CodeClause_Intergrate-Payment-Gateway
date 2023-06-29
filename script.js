var stripe  = Stripe("pk_test_51NMtxSSEtakKh7ZT4Yr67jg5myBziLx72otE6c3SAIxqMVLkHVgoayq3HAqZ6ZDFGhs1TNb6wllKOYMLks3RqBJG00tXpTi6Hf")

document.getElementById("checkout").addEventListener("click" , function(){
    stripe.redirectToCheckout({
        lineItems : [
            {
                price : "price_1NMuGmSEtakKh7ZTWC82y2ak" , 
                quantity : 1
            },
        ],
        mode : "subscription" , 
        successUrl : "https://cataas.com/cat" , 
        cancelUrl : "https://index.html"
    }).then(function(result){
        alert(result)
    })
      
})