$(document).ready(function () {
  $("div").on("click", '#delete', function() {
    const taskToDelete = $(this).parent();
    taskToDelete.remove();
  });

  $("#addTask").click(function() { // click event handler
    if ($(".textBox").val() != "") {
      const taskElement = $("<div> </div>");
      taskElement.addClass("task");
      taskElement.text($(".textBox").val());

      const deleteBtnElement = $("<button id='delete'> </button>");
      deleteBtnElement.addClass("fas fa-trash-alt");

      const doneBtnElement = $("<button id='done'> </button>");
      doneBtnElement.addClass("fas fa-check");

      taskElement.append(deleteBtnElement, doneBtnElement);

      $(".notCompleted").append(taskElement);

      $(".textBox").val("");

    } else {
      alert("Error: Please enter a task before clicking the 'Add' button.");
    }
  });
});
