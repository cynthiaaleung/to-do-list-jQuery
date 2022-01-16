$(document).ready(function() {
  $("#import").click(function() {
    jQuery.get("https://5f28559af5d27e001612eebf.mockapi.io/tasks/",
      function(data, textStatus) {
        const todoTasks = data.tasks;

        for (let i = 0; i < todoTasks.length; i++) { // loop over list and add each task
          const taskElement = $("<div> </div>");
          taskElement.addClass("task");
          taskElement.text(todoTasks[i]);

          const deleteBtnElement = $("<button id='delete'> </button>");
          deleteBtnElement.addClass("fas fa-trash-alt");

          const doneBtnElement = $("<button id='done'> </button>");
          doneBtnElement.addClass("fas fa-check");

          taskElement.append(deleteBtnElement, doneBtnElement);
          $(".notCompleted").append(taskElement);
        }
      },
      "json");
  });

  $("div").on("click", "#done", function() { // use on method because button element is dynamically created so $("#done").click() won't work
    const taskElement = $(this).parent(); // this extracts the whole div

    taskElement.fadeOut(500, function() {
  
      $(this).remove();

      const detachedTask = taskElement.detach(); //detach() retains event handlers
  
      $(".completed").append(detachedTask); // now append task to "Done" section

      detachedTask.fadeIn(500); // task fades in to "Done" section
    });
  });

  $("div").on("click", '#delete', function() { // use on method because button element is dynamically created so $("#delete").click() won't work
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
