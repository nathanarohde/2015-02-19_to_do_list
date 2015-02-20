// var capitalize = function(inputWord) {
//   var letters = inputWord.split("");
//   var firstLetter = letters.shift();
//   var cappedLetter = firstLetter.toUpperCase();
//   letters.unshift(cappedLetter);
//   var outputWord = letters.join("");
//   return outputWord;
// };

$(document).ready(function() {
  var allContacts = [];

  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    //insert capitalize before input first and last name below
    var inputtedFirstName = ($("input#new-first-name").val());
    var inputtedLastName = ($("input#new-last-name").val());
    var inputtedStreet = $("input#new-street").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();
    var newAddress = { street: inputtedStreet,
                   city: inputtedCity,
                   state: inputtedState,
                   fullAddress: function() {
                     return this.street + ", " + this.city + ", " + this.state;
                   }
                 };
    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, address: newAddress.fullAddress() };
    allContacts.push(newContact);

    $("ul#contacts").empty();

    allContacts.sort(function(a, b) {
      if (a.lastName > b.lastName) {
        return 1;
      } else if (a.lastName < b.lastName) {
        return -1;
      } else if (a.firstName > b.firstName) {
        return 1;
      } else {
        return 0;
      }
    });

    allContacts.forEach(function(contact) {
      $("ul#contacts").append("<li><span class='contact'>" + contact.firstName + " " + contact.lastName + "</span></li>");
      $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(contact.firstName + " " + contact.lastName);
        $(".first-name").text(contact.firstName);
        $(".last-name").text(contact.lastName);
        $(".address").text(contact.address);
      });
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");
  });
});
