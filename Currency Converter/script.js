// fetch("https://api.pricefreaks.com/latest?apikey=58b63532c5c548cb9b16efb73d3e58f5")
//   .then((result) => {
//      //console.log(result);
//      let myData = result.json();
//      //console.log(myData);
//      return myData;
//   }).then((price) =>{
//     let amount = document.querySelector(".amount");
//     let egpPrice = document.querySelector(".egp span");
//     let sarPrice = document.querySelector(".sar span");

//     egpPrice.innerHTML = Math.round(amount.innerHTML * price.rates["EGP"]);
//     sarPrice.innerHTML = Math.round(amount.innerHTML * price.rates["SAR"]);
//     // console.log(price.rates);
//     console.log(price.rates["EGP"]);
//     console.log(price.rates["SAR"]);
//   });

const input_price = document.querySelector('#input_price');
const output_price = document.querySelector('#output_price');
const input_amount = document.querySelector('#input_amount');
const output_amount = document.querySelector('#output_amount');
const exchange = document.querySelector('#exchange');
const rate = document.querySelector('#rate');

input_price.addEventListener('change', compute);
output_price.addEventListener('change', compute);
input_amount.addEventListener('input', compute);
output_amount.addEventListener('input', compute);

exchange.addEventListener('click', ()=>{
    const currancy = input_price.value;
    input_price.value = output_price.value;
    output_price.value= currancy;
    compute();
});

function compute(){
    const input_price1 = input_price.value;
    const output_price1 = output_price.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${input_price1}`)
    .then(res => res.json())
    .then(res => {
        const new_rate = res.rates[output_price1];
        rate.innerText = `1 ${input_price1} = ${new_rate} ${output_price1}`
        output_amount.value = (input_amount.value * new_rate).toFixed(2);
    })
}

compute();