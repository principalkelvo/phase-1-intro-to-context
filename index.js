// Your code here

//create employee records
function createEmployeeRecord(employee){
    return{
        firstName:employee[0],
        familyName:employee[1],
        title:employee[2],
        payPerHour:employee[3],
        timeInEvents:[],
        timeOutEvents:[],
    }
}

function createEmployeeRecords(employeeData){
 return employeeData.map(employee=>{
    return createEmployeeRecord(employee)
 })
}

function createTimeInEvent(employee,dates){
    
}

function createTimeOutEvent(employee,dates){
   
}