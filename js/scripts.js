$(document).ready(function() {

  //FORM TO CREATE A NEW CATEGORY
  $("form#create-category").submit(function(event) {
    event.preventDefault();

    //CREATES A VARIABLE TO STORE CATEGORY NAME FROM USER INPUT
    var inputtedCategory = $("input#new-category").val();

    //CLEARS THE FORM
    $("input#new-category").val("");

    //CREATES AN OBJECT USING THE CATEGORY NAME, WITH AN EMPTY ARRAY TO STORE TASKS
    var newCategory =   { category_name: inputtedCategory,
                          tasks: []
                        };

    //APPENDS THE NEW CATEGORY TO THE LIST OF CATEGORIES
    $("ul#categories").append("<li><span class='category'>" + newCategory.category_name + "</span></li>");

    //CLICK EVENT HANDLER FOR THE MOST RECENTLY ADDED CATEGORY
    $(".category").last().click(function() {

        //SHOWS THE TASK LIST
        $("#show-category").show();

        //STORES THE CATEGORY NAME IN THE SPAN CLASS category-name
        $(".category-name").text(newCategory.category_name);

        //UNBINDS THE FIRST-SELECTED CATEGORY FROM THE CREATE TASK FORM BUTTON
        $("form#create-task").off("submit");

        //TASK CREATION FORM SUBMIT HANDLER
        $("form#create-task").submit(function(event) {
          event.preventDefault();
          //CREATE A VARIABLE TO STORE THE INPUT FROM THE TASK FORM
          var inputtedTask = $("input#new-task").val();
          //THIS WILL PUSH THE LAST VARIABLE TO THE CATEGORY ARRAY
          newCategory.tasks.push(inputtedTask);
          //THIS WILL CREATE A LIST IN HTML TO SHOW ON THE HTML PAGE
          $("ul#task-list").append("<li><span class='task'>" + inputtedTask + "</span></li>");
          $("#new-task").val("");
        });

        //EMPTIES THE TASK LIST
        $("#task-list").empty();
        //POPULATES THE TASK FIELD WITH TASKS FROM THE SELECTED CATEGORY
        newCategory.tasks.forEach(function(task) {
            $("#task-list").append("<li><span class='task'>" + task + "</span></li>");
        });

    });
  });
});
