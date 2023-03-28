## Creating a DOM Element:

To create a DOM element in JavaScript, you can use the createElement() method of the document object. This method takes a string argument representing the tag name of the element you want to create. You can then set the attributes and contents of the element using various methods and properties.

Here is an example of how to create a div element and set its id attribute:

```
const div = document.createElement('div');
div.id = 'myDiv';

```

## Appending child to a parent element:

To add a child element to a parent element in the DOM, you can use the appendChild() method of the parent element. This method takes a single argument, which is the child element you want to add.

Here is an example of how to add a p element to a div element:

```
const div = document.createElement('div');
const p = document.createElement('p');
div.appendChild(p);
```

## Removing a child element from a parent node:

To remove a child element from a parent element in the DOM, you can use the removeChild() method of the parent element. This method takes a single argument, which is the child element you want to remove.

Here is an example of how to remove a p element from a div element:

```
const div = document.querySelector('div');
const p = div.querySelector('p');
div.removeChild(p);
```

## Implement Filtering Feature based on gender Value:

To implement a filtering feature based on gender value, you can use JavaScript to loop through a list of elements and hide or show them based on their gender value. Here is an example of how to do this:

```
<input type="radio" name="gender" value="male" onclick="filterList()"> Male
<input type="radio" name="gender" value="female" onclick="filterList()"> Female

<ul id="myList">
  <li data-gender="male">John</li>
  <li data-gender="male">Mike</li>
  <li data-gender="female">Jane</li>
  <li data-gender="female">Mary</li>
</ul>

<script>
function filterList() {
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const listItems = document.querySelectorAll('#myList li');
  listItems.forEach(item => {
    if (item.dataset.gender === gender || gender === 'all') {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
</script>

```

