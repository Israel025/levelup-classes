# Assignment 1

## DOM Manipulation

1. What is the DOM ? 
2. Given that you have 3 buttons on a page, how would you fetch the text of the second button. Show code examples.
3. What is an event and what are event listeners?
4. What will the code below print out to the console

```html
<button id="some-btn">Click Me</button>
<script type="application/javascript">
    (function () {
        console.log(document.getElementById("some-btn").innerHTML)
    })()
</script>
```

5. The code below isn't running, why ?

```html
    <script src="./file.js">
        alert('Hello world')
    </script>
```

6. Write a program to display 10 buttons and 10 anchor tags with any text you want.

## HttpRequests

1. What is the full meaning of Ajax?
2. What is it used for?
3. What are two methods or ways you know of making ajax requests
4. Given the following websites that contain documentation on how to get information from their servers:

> https://pokeapi.co
> https://swapi.co

Use axios to fetch information about any character on either or both of them

> Note: Using both will attract extra marks