function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

function getPin(){
    const pin = generatePin();
    const pinString = pin+'';
    if(pinString.length===4){
        return pin;
    }
    else{
        return getPin()
    }
}


document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();

    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('get-numbers').addEventListener('click',function(e){
    const num = e.target.innerText;
    const getNumber = document.getElementById('get-number');
    const getNumberString = getNumber.value;
    if(isNaN(num)){
        if(num==='C'){
            getNumber.value='';
        }
        else if(num==='<'){
            const arr = getNumberString.split('')
            arr.pop();
            const remain = arr.join(''); 
            getNumber.value=remain;
        }
    }
    else{
        const numString = num.toString();
        const getNumberS=getNumberString+numString;
        getNumber.value=getNumberS
    }
})

document.getElementById('btn-submit').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const displayPinString = displayPinField.value;
    const displayPin = parseInt(displayPinString);
    
    const myPinField = document.getElementById('get-number');
    const myPinString = myPinField.value;
    const myPin = parseInt(myPinString);

    myPinField.value = '';

    if(myPin==displayPin){
        document.getElementById('correct').style.display='block';
        document.getElementById('try').style.display='none';
        
        document.getElementById('btn-submit').disabled = true;
    }
    else{
        const tryField = document.getElementById('trythree');
        const tryString = tryField.innerText;
        const tryPin = parseInt(tryString);
        const value = tryPin-1;
        tryField.innerText=value;
        console.log(value)
        if(value===0){
            document.getElementById('cross').style.display='block';
            document.getElementById('btn-submit').disabled = true;
        }
        
    }
    console.log(myPin==displayPin)
})