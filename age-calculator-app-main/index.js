const div = document.getElementById('day');    
const say = document.getElementById('month');     
const ram = document.getElementById('year');     
const dayResult = document.getElementById('day_result');
const monthResult = document.getElementById('month_result');
const yearResult = document.getElementById('year_result');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    function calculateAge(birthDate) {
        const today = new Date();
        const birth = new Date(birthDate);
    
        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        let days = today.getDate() - birth.getDate();
    
        // Adjust for negative days or months
        if (days < 0) {
            months--;
            const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            days += previousMonth;
        }
    
        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months, days };
    }
    
    // Collecting the date values from the input fields
    const day = div.value;  
    const month = say.value;   
    const year = ram.value;    
    
    // Construct a valid date string in the format "YYYY-MM-DD"
    const birthDate = `${year}-${month}-${day}`;
    
    const age = calculateAge(birthDate);

    // Updating the results in the DOM
    dayResult.textContent = age.days;
    monthResult.textContent = age.months;
    yearResult.textContent = age.years;
});
