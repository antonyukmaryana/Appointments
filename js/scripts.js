$(document).ready(function() {
  $("#appt").submit(function(event) {
    var nameInput = $("input#name").val();
    var descriptionInput = $("input#description").val();
    var dateInput = $("input#date").val();
    var timeInput = $("input#time").val();
    $(".name").append(nameInput);
    $(".description").append(descriptionInput);
    $(".date").append(dateInput);
    $(".time").append(timeInput);

    $("#confirmation").show();

    event.preventDefault();
  });
});
