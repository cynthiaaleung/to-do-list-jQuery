$(document).ready(function () {
  $("#addTask").click(function() { // click event handler
    if ($(".textBox").val() != "") {
      alert("New Task: " + $(".textBox").val());
      $(".textBox").val(""); // clear out the text box
    } else {
      alert("Error: Please enter a task before clicking the 'Add' button.");
    }
  });
});
