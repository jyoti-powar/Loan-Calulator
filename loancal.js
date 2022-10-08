
function loan(){

    l1= Number(document.getElementById('amount').value)
    l2= Number(document.getElementById('interest').value)
    l3= Number(document.getElementById('duration').value)

    // r= (l2/12*100)

    // emi=l1*r*(1+r)^l3/((1+r)^l3-1)
    inr=(l1*(l2*0.01))/l3
    res=((l1/l3)+inr).toFixed(2)
    amt=(l1+(inr*l3))

    
    // document.getElementById('prnt').innerHTML=` ${inr}`
    document.getElementById('prnt1').innerHTML=`EMI:${res}`
    document.getElementById('prnt2').innerHTML=`Total Amount:${amt}`

    
}