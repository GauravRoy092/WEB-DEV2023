function lifeInWeeks(age) {

    /************Don't change the code above************/
       
        // Check if the user entered a valid age.
        if (age <= 0 || age > 90) {
            console.log("Please enter a valid age between 1 and 90.");
            return;
        }
    
        // Calculate the number of days, weeks, and months left to live.
        var days = (90 - age) * 365;
        var weeks = (90 - age) * 52;
        var months = (90 - age) * 12;
    
        // Display the output to the user.
        console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left.`);
    
    /*************Don't change the code below**********/
    }
    