// let button = document.getElementById('btn');

// button.addEventListener('click', () => {
//     const height = parseInt(document.getElementById('height').value);
//     const weight = parseInt(document.getElementById('weight').value);
//     const result = document.getElementById('result');
//     let height_status=false, weight_status=false;

    // if(height === '' || isNaN(height) || (height <= 0)){
    //     document.getElementById('height_error').innerHTML = 'Please put your height';
    // } else {
    //     document.getElementById('height_error').innerHTML = '';
    //     heigth_status=true;
    // }

    // if(weight === '' || isNaN(weight) || (weight <= 0)){
    //     document.getElementById('weight_error').innerHTML = 'Please put your weight';
    // } else {
    //     document.getElementById('weight_error').innerHTML = '';
    //     weigth_status=true;
    // }

//     if(height_status && weight_status){
//         const bmi = (weight / ((height*height)/10000)).toFixed(2);

//         if (bmi < 18.5) {
//             result.innerHTML = 'Underweight';
//         }else if(bmi >=18.5 && bmi <=24.9) {
//             result.innerHTML = 'Normal';
//         }else if(bmi >=25 && bmi <=29.9) {
//             result.innerHTML = 'Overweight';
//         }else if(bmi >=30){
//             result.innerHTML = "Obesity"
//         }else {
//             alert('The form has errors');
//             result.innerHTML = ''
//         }
//         console.log(bmi);

//     }
// });

const button = document.getElementById('btn');

button.addEventListener('click', function(){
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if(height === '' || weight === ''){
        alert('Please fill out the input fields');
        return;
    }

    height = height / 100
    let BMI = (weight / (height * height));
    BMI = BMI.toFixed(1);
    document.querySelector('#result').innerHTML = BMI;

    let status = '';

    if (BMI <18.5){
        status = "Underweight";
    }
    if (BMI >=18.5 && BMI < 24.9){
        status = "Normal Weight";
    }
    if (BMI >=25 && BMI < 29.9){
        status = "Uverweight";
    }
    if (BMI >30){
        status = "Obesity";
    }

    console.log(status);
    document.querySelector('#comment').innerHTML = status;
})