// print all country's flag 
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    for(var i=0;i<result.length;i++){
        console.log(result[i].flag);
    }
}

// print all country's name, region, subregion, and populations 
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    for(var i=0;i<result.length;i++){
        console.log(result[i].name,result[i].region,result[i].subregion,result[i].population);
        
    }
}


