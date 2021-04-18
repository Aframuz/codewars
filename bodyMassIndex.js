function bmi(weight, height) {
   let bodyMassIndex = weight/(height**2)
   return (bodyMassIndex > 30) ? "Obese" : (bodyMassIndex > 25) ? "Overweight" : (bodyMassIndex > 18.5) ? "Normal" : "Underweight"
}