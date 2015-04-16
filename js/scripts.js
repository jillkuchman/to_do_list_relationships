$(document).ready(function() {
  $("form#new_list_item").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();

    var newTask = {
      task: inputtedTask
    };

    $("ol#list").append("<li><span class='task'>" + newTask.task + "</span>  " +
    "<input type='checkbox'></li>");


    $("input#new_list_item").val("");


    $(".task").last().click(function() {
      $("#show-task").show();
      $("show-task h2").text(newTask.task);


      $(".task").text(newTask.task);
    });
  });
});
