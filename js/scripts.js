$(document).ready(function() {
  $("form#create-category").submit(function(event) {
    event.preventDefault();

    var inputtedCategory = $("input#new-category").val();

    var newCategory = { name: inputtedCategory, tasks: [] };

    $("ul#categories").append("<li><span class='category'>" + newCategory.name + "</span></li>");

    $("input#new-category").val("");

    $("#categories").last().click(function() {
        $("#show-category").show();
        $(".category-name").text(newCategory.name);

    });


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
