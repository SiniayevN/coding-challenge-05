const employees = [
    {name: 'Alex', hourlyRate: 15, hoursWorked: 35},
    {name: 'Sam', hourlyRate: 40, hoursWorked: 47},
    {name: 'Jordan', hourlyRate: 25, hoursWorked: 30}
];
//step 2 done 

function calculateBasePay(rate, hours) {
    if (hours >40) {
        hours = 40;
    }
    return rate * hours;
}
console.log(calculateBasePay(15, 35))
//step 3 done 

function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        let overtimeHours = hours - 40;
        return overtimeHours * rate * 1.5;
    }
        return 0;
    }
    console.log(calculateOvertimePay(40, 47))
//step 4 done

function calculateTaxes (grossPay) {
    let taxRate = 0.15;
    return grossPay * taxRate;
}
console.log (calculateTaxes(1000))
//step 5 done