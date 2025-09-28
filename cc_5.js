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

function processPayroll(employee) {

  let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  let grossPay = basePay + overtimePay;
  let taxes = calculateTaxes(grossPay);
  let netPay = grossPay - taxes;

  return {
    name: employee.name,
    basePay: basePay,
    overtimePay: overtimePay,
    grossPay: grossPay,
    netPay: netPay
  };
}

let sampleEmployee = { name: "Peter", hourlyRate: 22, hoursWorked: 45 };
console.log(processPayroll(sampleEmployee));

//step 6 done

for (let emp of employees) {
    let payroll = processPayroll(emp);
    console.log(payroll);
}