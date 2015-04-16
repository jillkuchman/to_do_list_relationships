$(document).ready(function() {
  $("form#create-category").submit(function(event) {
    event.preventDefault();

    var inputtedCategory = $("input#new-category").val();

    var newCategory = { category_name: inputtedCategory, tasks: [] };

    $("ul#categories").append("<li><span class='category'>" + newCategory.category_name + "</span></li>");

    $("input#new-category").val("");
    alert(newCategory.category_name);

    $(".category").last().click(function() {
        $("#show-category").show();
        $(".category-name").text(newCategory.category_name);
        alert(newCategory.category_name);
    });
  });

  $("form#create-task").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();

    newCategory.tasks.push(inputtedTask);

    $("ul#task-list").append("<li>" + inputtedTask + "</li>");

  });

});




// var inputtedTask = $("input#new-task").val();
//
// var newTask = {
//   task: inputtedTask
// };
//
// $("ol#list").append("<li><span class='task'>" + newTask.task + "</span>  " +
// "<input type='checkbox'></li>");
//
//
// $("input#new-task").val("");
//
//
// $(".task").last().click(function() {
//   $("#show-task").show();
//   $("show-task h2").text(newTask.task);
//
//
//
//   $(".task").text(newTask.task);
// });
