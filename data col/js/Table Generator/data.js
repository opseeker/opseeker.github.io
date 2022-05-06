//payment received
let payMay22 = [0]

// cost made on may 2022- [0]=may-01-2022
let may22 = [60,20]

// data for the table
items = [
    {date:"may-01",obj:"jaya shop",cost:may22[0],paid:"y"},
    {date:'',obj:'Robin Gpay(loan)',cost:may22[1],paid:'y'}
]

// calculations
var paycutmay2022 = 0
for (let i = 0; i< payMay22.length;i++){
    paycutmay2022 = paycutmay2022 + payMay22[i]
}

var may2022 = 0
for (let i = 0; i< may22.length;i++){
     may2022 = may2022 + may22[i]
}

