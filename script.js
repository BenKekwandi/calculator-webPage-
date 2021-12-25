function insert(num){
    document.getElementById('a').value=document.getElementById('a').value+num;
}
function equal(){
    var exp=document.getElementById('a').value;
    if(exp)
    {
        document.getElementById('a').value= eval(exp);
    }
}
function back(){
    var exp=document.getElementById('a').value; 
    document.getElementById('a').value=exp.substring(0,exp.length-1);
}
function c(){
    var exp=document.getElementById('a').value;
    document.getElementById('a').value=exp.substring(0,exp.length=0);
}

function sqrt(poc){
    poc=document.getElementById('a').value;
    var coc=Math.sqrt(poc);
    document.getElementById('a').value=coc;
}
var Pow1;
 
function pow(Pow1,Pow2)
{
    Pow2=document.getElementById('a').value;
    var power=1;
    for(var i=1;i<=Pow2;i++)
    {
        power=power*Pow1;
    }
     
    document.getElementById('a').value=power;
}





