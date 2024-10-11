function getAgeGrade() {
    // Get user input
    let age = document.getElementById("ageInput").value;
    let result = document.getElementById("result");

    // Check if input is a number
    if (isNaN(age) || age.trim() === "") {
        result.innerText = "Invalid input! Please enter a number.";
        result.style.color = "red";
        return;
    }

    // Convert age to a number
    age = Number(age);

    // Determine the age grade
    let grade;
    if (age >= 0 && age <= 2) 
        {grade = "Infant";} 

    else if (age >= 3 && age <= 5) 
        {grade = "Toddler";} 

    else if (age >= 6 && age <= 12) 
        {grade = "Child";} 

    else if (age >= 13 && age <= 17) 
        {grade = "Teenager";} 

    else if (age >= 18 && age <= 24) 
        {grade = "Young Adult";} 

    else if (age >= 25 && age <= 64) 
        {grade = "Adult";} 

    else if (age >= 65) 
        {grade = "Senior";} 
    
    else {grade = "Unknown age grade";}
    

    result.innerText = `${grade.toUpperCase()}`; // didnt wanna concertinate here, also used the topUpperCase to make it BIG CAPS, while normal innerhtml is to enable us perform html runs for Js area
    result.style.color = "green";
}
