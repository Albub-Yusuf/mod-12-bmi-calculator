function calculateBMI(){
           

    let weight = document.querySelector("#weightInput").value;
    let height = document.querySelector("#heightInput").value;
    let bodyMassIndex = parseFloat(weight / (height * height)).toFixed(2);
    console.log(bodyMassIndex);
   

    if(isNaN(bodyMassIndex) || !isFinite(bodyMassIndex) || (bodyMassIndex<=0) ){

        document.querySelector(".displayBMI").innerText = "Please Fill up the inputs first!!";
    
    
       }else{
    
        document.querySelector(".displayBMI").innerHTML = "<h3>BMI = "+bodyMassIndex+"</h3>";
    
        if(bodyMassIndex < 18.5 ){
            document.getElementById("result").innerText = "Underweight";
        }
        else if(bodyMassIndex >= 18.5 && bodyMassIndex <= 24.99 ){
            document.getElementById("result").innerText = "Healthy Weight";
        }
        else if(bodyMassIndex >= 25 && bodyMassIndex <= 29.99 ){
            document.getElementById("result").innerText = "Overweight";
        }
        else if(bodyMassIndex >= 30 ){
            document.getElementById("result").innerText = "Obese";
        }else{
            document.getElementById("result").innerText = "";
    
        }
    
    }

}
   


