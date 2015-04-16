$(document).ready(function() {

  $("form#create-category").submit(function(event) {
    event.preventDefault();

    var inputtedCategory = $("input#new-category").val();
    $("input#new-category").val("");


    var newCategory =   { category_name: inputtedCategory,
                          tasks: []
                        };

    newCategory.category_name = inputtedCategory;

    $("ul#categories").append("<li><span class='category'>" + newCategory.category_name + "</span></li>");


    $(".category").last().click(function() {
        $("#show-category").show();

        $(".category-name").text(newCategory.category_name);

        $("form#create-task").off("submit");

        $("form#create-task").submit(function(event) {
          event.preventDefault();
          var inputtedTask = $("input#new-task").val();
          newCategory.tasks.push(inputtedTask);
          $("ul#task-list").append("<li><span class='task'>" + inputtedTask + "</span></li>");
          $("#new-task").val("");
        });
        
        $("#task-list").empty();

        newCategory.tasks.forEach(function(task) {
            $("#task-list").append("<li><span class='task'>" + task + "</span></li>");
        });

    });
  });
});
