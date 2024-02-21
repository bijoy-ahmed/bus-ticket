const allKtn = document.getElementsByClassName('kbd');
for(const btn of allKtn){

    btn.addEventListener('click', function(event){
        const name =event.target.innerText;
        console.log(name);

        const selectedPriceContainer = document.getElementById('Select-price-container');

        // update seat

        const div = document.createElement('div');
        div.classList.add('flex');
        div.classList.add('justify-between');

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        
        p1.innerText = name;
        p2.innerText = 'Economy';
        p3.innerText = '550';
         const seatPrice = '550';
         

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedPriceContainer.appendChild(div);

        updateTotalCost(seatPrice);
        updateGrandTotal();
    })
}



function updateGrandTotal (status){
    const totalPrice = getConvertedValue('total-price');

if (status == undefined){
    document.getElementById('grand-total').innerText = totalPrice;

}
else{
   const couponCode =document.getElementById('Coupon-code').value;

   if(couponCode =='NEW15' || couponCode == 'Couple 20'){
const discounted = totalPrice * 0.2;
document.getElementById('grand-total').innerText = totalPrice - discounted;

   }
   else{
alert('please enter a valid coupon code');
   
   }
   
}
}

function updateTotalCost(seatPrice){
    const totalPrice = getConvertedValue('total-price');
    const sum = totalPrice + parseInt(seatPrice);
    document.getElementById('total-price').innerText = sum;
}



function getConvertedValue(id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}