#### Problem #1

###### Using Twitter Bootstrap (any version), make a single page with static HTML that includes:
Input form for a new todo item  
Table with rows for each todo item

###### Each todo item contains the following data elements:
Name (string)  
Topic (Array of strings)  
Due Date (date)  
Completed (boolean)  

Fill in the HTML with 5 example todo items.

Please take creative liberties with styling HTML to be something that you’d be happy using :)

#### Notes
At Turing we wrote our own CSS/SASS so it was interesting to try and customize the bootstrap classes and styles with my own CSS. I felt like I was beginning to understand what bootstrap gave me built-in but I definitely want to play with it more to understand what I am getting under the hood with these class names.

I created a simple JS input field with a submit button just to get the submit working with jQuery before attempting to expand into a larger form and table to display the todos. For some reason the value of the text is coming in undefined and I took extra time to try and solve that issue but am not sure what is missing.

If I had more time I think I would have created this in ReactJS so that I could build each element as its own component. The input form with the four properties as the first component. Then I could write a function to get the value of each input field, bundle it into an object, and then onSubmit of the form push it into an array of todos.

Then I would create a component template for each todo and a table component to act as a container to render all the todo components from the array.
