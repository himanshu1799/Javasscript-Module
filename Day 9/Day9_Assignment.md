Create a webpage that has a button with an ID of "myButton" and an input field with an ID of "myInput". When the button is clicked, display the text entered in the input field in a div with an ID of "outputDiv". Additionally, when the mouse enters the button, change its background colour to yellow, and when the mouse leaves the button, change its background colour back to white.
Write a JavaScript code that achieves the following:
1. Attach an event listener to the button using the "addEventListener" method that listens for the "click" event and calls a function called "displayInput" when the event is triggered.
2. Implement the "displayInput" function that retrieves the value of the input field, creates a text node containing the value, and appends the text node to the outputDiv.
3. Attach an event listener to the button using the "addEventListener" method that listens for the "mouseenter" event and calls a function called "changeColor" when the event is triggered.
4. Implement the "changeColor" function that changes the background colour of the button to yellow.
5. Attach an event listener to the button using the "addEventListener" method that listens for the "mouseleave" event and calls a function called "changeColorBack" when the event is triggered.
6. Implement the "changeColorBack" function that changes the background colour of the button back to white.
7. Add event propagation to the button that captures the click event before it bubbles up to the document object.
8. Add a console.log statement to the event listener for the click event that logs the message "Button clicked!" to the console.
