/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



function createEmployeeRecord(employee){
    let empObj={
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return empObj;
}

function createEmployeeRecords(employeeArray){
    let allEmployees = []
    employeeArray.forEach(employee => {
        allEmployees.push(new createEmployeeRecord(employee))
    });

    return allEmployees;
}

function createTimeInEvent(time){
    let dateTime = time.split(' ')
    this.timeInEvents.push({
        type: 'TimeIn',
        date: dateTime[0],
        hour: Number(dateTime[1])
    })
    return this
}
function createTimeOutEvent(time){
    let dateTime = time.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        date: dateTime[0],
        hour: Number(dateTime[1])
    })
    return this
}

const hoursWorkedOnDate=function (date){
    const filterTimeIn = this.timeInEvents.find(e=>e.date ===date)
    const filterTimeOut = this.timeOutEvents.find(e=>e.date ===date)

    return (filterTimeOut.hour - filterTimeIn.hour ) / 100

}
function wagesEarnedOnDate(date){
    const payRate = this.payPerHour
    debugger
    const hours = hoursWorkedOnDate.call(this, date)
    return hours * payRate
}

function findEmployeeByFirstName(array,firstName){
    return array.find(function(e){
        return e.firstName === firstName
    })
}

const allWagesFor = function () {
    debugger
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let calculatePayroll = function(employees){
    let payroll = 0
    employees.forEach(empl=> {
        payroll+= allWagesFor.call(empl)
    });
    return payroll
}