let input=document.querySelector('input');
let btn=document.querySelectorAll('button');
let arr=Array.from(btn);
let string='';
arr.forEach(b=>{
    b.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='AC'){
            string='';
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else if(e.target.innerHTML=='='){   
            string=eval(string);
            input.value=string;
        }
        else{
            string=string + e.target.innerHTML;
            input.value = string;
        }
        console.log(string);
    })
})

