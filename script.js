function calculateBMI(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    if(weight === "" || height === ""){
        alert("Please enter valid weight and height");
        return;
    }

    let bmi = weight /(height * height);
    let result ="";
    if(bmi < 18.5){
        result ="Underweight";
    }else if(bmi >= 18.5 && bmi < 25){
        result = "Normal weight";
    }else {
        result = "Overweight";
    }
    
    document.getElementById("result").innerText = "Your BMI is " + bmi.toFixed(2) + " (" + result + ")";
}