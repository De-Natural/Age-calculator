const div = document.getElementById('day');    
const say = document.getElementById('month');     
const ram = document.getElementById('year');     
const dayResult = document.getElementById('day_result');
const monthResult = document.getElementById('month_result');
const yearResult = document.getElementById('year_result');
const btn = document.querySelector('button');


btn.addEventListener('click', () => {
    
    // Collecting the date values from the input fields
    const day = div.value;  
    const month = say.value;   
    const year = ram.value; 
    // Construct a valid date string in the format "YYYY-MM-DD"
    const birthDate = `${year}-${month}-${day}`;
      
    function calculateAge(birthDate) {
        const today = new Date();
        const birth = new Date(birthDate);
        console.log(today);
        console.log(birth);
        let dateCalc =  Number(today) - Number(birth)
        let numYear = Math.floor(dateCalc / 31536000000)
        let numMonths = Math.floor(((dateCalc / 31536000000) - numYear) * 12)
        let numDays = Math.floor(((((dateCalc / 31536000000) - numYear) * 12) - numMonths) * 30)
        console.log(numYear );
        console.log(numMonths );
        console.log(numDays );

        return { numYear, numMonths, numDays };
        // console.log(days)
    }
     
    
    
    const age = calculateAge(birthDate);

    // Updating the results in the DOM
    dayResult.textContent = age.numDays;
    monthResult.textContent = age.numMonths;
    yearResult.textContent = age.numYear;
});
