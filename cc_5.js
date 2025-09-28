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
