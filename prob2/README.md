#### Problem #2

Please explain the difference between the following jQuery functions. What impact has or will this have on code you’ve written?

##### 1. $(“.todo-item”).on(“click”, function(e){ console.log(e) });  
Here the HTML element with the class name of "todo-item" is listening for a user click. When the user clicks on this particular element, that event is logged to the console.

##### 2. $(document).on(“click”, “.todo-item”, function(e){ console.log(e) });  
Here the entire document (or web page) is listening for a click of the "todo-item" element. The event will be handled the same as above.

It is better/more efficient to be more specific with event handlers (example 1 above) so only the specific element that can trigger an event is listening for a user action. The second version uses event bubbling to listen for events such as a click on child elements of a parent and it will check all the children while working it's way up to the parent to know if the DOM should be changed for more elements.
