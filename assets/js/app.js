var tipAmount = [];
var hoursWorked = [];
var notes = [];
var salary = 5.03;

$("#submit_tip").on("click", function () {
    tipAmount = $("#input_tip_amount").val();
    hoursWorked = $("#input_hours_worked").val();
    notes = $("#input_notes").val()
    console.log(tipAmount, hoursWorked, notes)
    perHour();

    function perHour() {
        var salaryTotal = salary * hoursWorked;
        console.log (salaryTotal);
        var perHour = (parseFloat(tipAmount)+parseFloat(salaryTotal))/parseFloat(hoursWorked);
        console.log(perHour)
    }
})