// Set today's date as default
window.onload = function () {
    let today = new Date().toISOString().split("T")[0];
    document.getElementById("targetDate").value = today;
};

function calculateAge() {

    let birthDateValue = document.getElementById("birthDate").value;
    let targetDateValue = document.getElementById("targetDate").value;

    if (birthDateValue === "") {
        alert("Please select your date of birth.");
        return;
    }

    let birthDate = new Date(birthDateValue);
    let targetDate = new Date(targetDateValue);

    // Validation
    if (birthDate > targetDate) {
        alert("Birth date cannot be after the selected date.");
        return;
    }

    let years = targetDate.getFullYear() - birthDate.getFullYear();
    let months = targetDate.getMonth() - birthDate.getMonth();
    let days = targetDate.getDate() - birthDate.getDate();

    // Adjust days
    if (days < 0) {
        months--;

        let previousMonth = new Date(
            targetDate.getFullYear(),
            targetDate.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    // Adjust months
    if (months < 0) {
        years--;
        months += 12;
    }

    // Display result
    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;

    document.getElementById("fullResult").innerHTML =
        `Exact Age: <strong>${years}</strong> years, 
         <strong>${months}</strong> months and 
         <strong>${days}</strong> days.`;
}