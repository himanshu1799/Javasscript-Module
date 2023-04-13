# Event

Events are actions or occurrences that happen in a web page, such as a button being clicked or a page finishing loading. Web developers can use events to trigger certain behaviors or actions in response to user interaction or changes to the web page. There are many different types of events available in JavaScript, including:

- onclick: This event is triggered when a user clicks on an element.

- onchange: This event is triggered when the value of an element is changed.

- onload: This event is triggered when a web page finishes loading.

- onmouseenter: This event is triggered when the mouse enters an element.

- onmousedown: This event is triggered when the mouse button is pressed down on an element.

- onmouseover: This event is triggered when the mouse is moved over an element.

## Event-Listener:

An event listener is a function that is attached to an element and waits for a particular event to occur. When the event occurs, the listener function is executed.

```js
const myButton = document.querySelector("#my-button");

function buttonClicked() {
  console.log("Button clicked!");
}

myButton.addEventListener("click", buttonClicked);
```

In the code above, we have selected a button element with the ID "my-button" and defined a function called buttonClicked() that logs a message to the console. We then add an event listener to the button element that listens for a "click" event and executes the buttonClicked() function when the event occurs.

## Event-Handler:

An event handler is a function that is assigned to an event property of an element. The function is executed when the event occurs.

Example:

```js
<button onclick="buttonClicked()">Click me</button>

<script>
function buttonClicked() {
  console.log("Button clicked!");
}
</script>

```

In the code above, we have defined a button element with an onclick attribute that contains the name of the function buttonClicked(). When the button is clicked, the buttonClicked() function is executed.

Event Propagation:
Event propagation is the process by which an event is passed from the element that triggered it to other elements in the DOM tree. There are two types of event propagation: bubbling and capturing.

## Event-Bubbling:

In event bubbling, the event is first captured by the innermost element and then propagated up the DOM tree to the outermost element.

Example:

```js
<div id="outer">
  <div id="middle">
    <div id="inner">
      <button>Click me</button>
    </div>
  </div>
</div>

<script>
const outer = document.querySelector("#outer");
const middle = document.querySelector("#middle");
const inner = document.querySelector("#inner");
const button = document.querySelector("button");

function handleClick() {
  console.log("Button clicked!");
}

button.addEventListener("click", handleClick);
inner.addEventListener("click", handleClick);
middle.addEventListener("click", handleClick);
outer.addEventListener("click", handleClick);
</script>
```

In the code above, we have defined four elements nested inside each other. We have also defined a function called handleClick() that logs a message to the console. We then add event listeners to each of the elements that listen for a "click" event and execute the handleClick() function. When the button is clicked, the event is first captured by the innermost element (the button), and then propagated up the DOM tree to the outermost element (the div with the ID "outer").

## Event-Capturing:

Event capturing is the process by which an event is first captured by the outermost element in the DOM hierarchy and then propagated down to the innermost element. This is the opposite of event bubbling, where the event starts at the innermost element and then propagates up to the outermost element.

During the capturing phase, the browser checks if any elements in the hierarchy have an event listener attached for the specific event type. If an event listener is found, the browser executes the listener function for that element.

To use event capturing, you can use the addEventListener() method with the capture option set to true.

```js
<div id="outer">
  <div id="middle">
    <div id="inner">
      <button>Click me</button>
    </div>
  </div>
</div>

<script>
const outer = document.querySelector("#outer");
const middle = document.querySelector("#middle");
const inner = document.querySelector("#inner");
const button = document.querySelector("button");

function handleClick() {
  console.log("Button clicked!");
}

button.addEventListener("click", handleClick, true);
inner.addEventListener("click", handleClick, true);
middle.addEventListener("click", handleClick, true);
outer.addEventListener("click", handleClick, true);
</script>
```

In this example, we have added the true parameter to each addEventListener() method call, which enables event capturing for each element. When the button is clicked, the event is first captured by the outermost element (the div with the ID "outer"), and then propagated down the DOM tree to the innermost element (the button). If any of the elements have an event listener for the "click" event, the listener function is executed during the capturing phase.
