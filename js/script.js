$(document).ready(function(){
		var a=[0.7,1.6];
    var b=[1.8,3.2];
    var x=4;

    first = [1-(2*a[1]),(1-(2*a[0])).toFixed(1)];
    secondb = [2*b[0],2*b[1]];
    seconda = [((-2*a[1])/Math.pow(x,3)).toFixed(2),((-2*a[0])/Math.pow(x,3)).toFixed(2)];


    $("button[name='calculate']").click(function(){

         $("#wrapper").append("<h3 class = 'text-center'>C = 1 - 4[a]/2-[a]/2*[b]; </h3>");
         $("#wrapper").append("<h3 class = 'text-center'>C = ["+first+"] - ["+a+"]/["+secondb+"]; </h3>");
         firstres = division(a,secondb);
         C = subtraction(first,firstres);
         $("#wrapper").append("<h3 class = 'text-center'>C = ["+C+"]; </h3>");
        $("#wrapper").append("<h3 class = 'text-center'>Подставим значения</h3>");
        $("#wrapper").append("<h4 class = 'text-center'>y^2=(2[0.7,1.6])/x^3-[0.7,1.6]/[3.6,6.4];</h4>");
        $("#wrapper").append("<h4 class = 'text-center'>y^2=["+firstres+"]-["+seconda+"];</h4>");
        y2=subtraction(firstres,seconda);
        $("#wrapper").append("<h4 class = 'text-center'>y^2=["+y2+"]</h4>");
        y=[(Math.sqrt(y2[0])).toFixed(2),(Math.sqrt(y2[1])).toFixed(2)];
        $("#wrapper").append("<h4 class = 'text-center'>y(4)=["+y+"]</h4>");
         $("button[name='calculate']").fadeOut("slow");


//         $("#wrapper").append("<h3 class = 'text-center'>C = ["+C+"]; </h3>");




    })
  
   
});

function multiplication(arg1,arg2){
  var res = [0,0,0,0];
  res[0]=arg1[0]*arg2[0];
  res[1]=arg1[0]*arg2[1];
  res[2]=arg1[1]*arg2[0];
  res[3]=arg1[1]*arg2[1];
    minimum = min(res).toFixed(2);
    maximum = max(res).toFixed(2);
    result = [minimum,maximum];
    return result;
  
}

function summation(arg1,arg2){
  var res = [];
  res[0]=(+arg1[0])+arg2[0];
  res[1]=(+arg1[1])+arg2[1];
  result = [res[0].toFixed(2),res[1]];
  return result;
}


function division(arg1,arg2){
  var res = [0,0];
  res[0] = [(1/arg2[0]).toFixed(2),(1/arg2[1]).toFixed(2)];
  result = multiplication(arg1,res[0]);
  return result;
}

function subtraction(arg1,arg2){
  var res = [];
  res[0]=(+arg1[0])-arg2[1];
  res[1]=(+arg1[1])-arg2[0];
  result = [res[0].toFixed(2),res[1].toFixed(2)];
  return result;
}

function min(arg){
  minimum = arg[0];
    for (var i = 0; i < arg.length; i++) {
      minimum>arg[i] ? minimum = arg[i] : minimum = minimum;
    }
    return minimum;
}
function max(arg){
  maximum = arg[0];
    for (var i = 0; i < arg.length; i++) {
      maximum<arg[i] ? maximum = arg[i] : maximum = maximum;
    }
    return maximum;
}

