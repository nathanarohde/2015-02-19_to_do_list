$(document).ready(function() {
var currentList;
var currentTask;
  $("form#new-list").submit(function(event) {
    event.preventDefault();
    var inputtedListName = $("input#new-list-name").val();
    var newList = { listName: inputtedListName, tasks: []};
    $("ul#lists").append('<li><span class="list">' + newList.listName + "</span></li>");

    $('.list').last().click(function() {
      currentList = newList;

      $('.show-tasks').show();
      $("ul#uncompleted").empty();
      // $("ul#completed").empty();
      $('#task_name').text(currentList.listName);
        currentList.tasks.forEach(function(task) {
      $('ul#uncompleted').append('<li>' + task.descript + '</li>');
        });




        // unbind other submit events from form#new-task
        $("form#new-task").submit(function(event) {
          event.preventDefault();
          var inputtedDescription = $("input#new-description").val();
          currentTask = { descript: inputtedDescription};
          currentList.tasks.push(currentTask);
          $("ul#uncompleted").append("<li>" + currentTask.descript + "</li>");
          });

          $("input#new-description").val("");

      });
    });
  });

  // $('.list').click(function() {
  //   $('form#new-task').off('click');
  // });

// newList.tasks.forEach(function(task) {
//   if (task.done === "true") {
//     $("ul#completed").append("<li>" + task.descript + "</li>");
//   } else {
//     $("ul#uncompleted").append("<span class='uncompleted'><li>" + task.descript + "</li></span>");
//     $(".uncompleted").last().click(function() {
//       task.done = "true";
//       $("ul#completed").append($(this).children());
//     });
//   }
