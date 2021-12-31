const payment = {
    bill_amount: 0,
    number_people: 0, 
    tip:0
}

let bill_amount = document.querySelector('#bill_amount');
let number_people = document.querySelector('#number_people');

bill_amount.addEventListener('input', calculatePayment); 
bill_amount.addEventListener('input', billing); 
number_people.addEventListener('input', calculatePayment );
number_people.addEventListener('input', billing );

function calculatePayment(event) {
    payment[event.target.id] = +event.target.value;
    console.log(payment);
}

var matches = document.querySelectorAll('.tip-btn')
console.log(matches);

matches.forEach(match => {
    match.addEventListener('click', function(event) {
        console.log(event.target.value);
        payment.tip = +event.target.value;
    })

    match.addEventListener('click', billing)
});

function billing (){
    if(payment.tip <=0 || payment.bill_amount <=0 || payment.number_people <=0){
        console.log("error");
        return
    }
    
    var finalA = ((payment.bill_amount*(payment.tip/100))/payment.number_people);
    document.getElementById('content_tip').innerHTML = finalA;

    var finalB = ((payment.bill_amount/payment.number_people)+finalA);
    document.getElementById('content_bill').innerHTML = finalB;
};


