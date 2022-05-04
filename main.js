 function convert(){

        

        var temp = document.getElementById("temp").value;
        var unit = document.getElementById("unit").value;
        var cunit = document.getElementById("cunit").value;
        var result = document.getElementById("result");
        if(temp==""||temp==null || isNaN(temp)){
            alert("Please enter a valid number.");
        }
        else{
        var temp = parseFloat(temp);
        result.style.visibility="visible";
        if(unit==cunit){
            result.innerHTML=temp
        }
        
        else if((unit==1) && (cunit==2)){
            var a= (temp * 9/5) + 32;
            result.innerHTML=a+"&#x2109"; 
        }
        else if((unit==1) && (cunit==3)){
            var a = (temp)+273.15;
            result.innerHTML=a+"K";
        }
        else if((unit==2) && (cunit==1)){
            var b = (temp-32)*5/9;
            result.innerHTML=b+"&#8451";
        }
        else if((unit==2) && (cunit==3)){
            var b = (temp-32)*5/9 + 273.15;
            result.innerHTML=b+"K";
        }
        else if((unit==3) && (cunit==1)){
            var a = (temp)-273.15;
            result.innerHTML=(a+"&#8451");
        }
        else if((unit==3) && (cunit==2)){
            var b = (temp-273.15) * 9/5+32;
            result.innerHTML=(b+"&#x2109");

        }
    }
    }