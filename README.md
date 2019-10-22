# @intothesource/feedback-animation

Gives feedback to button clicks etc. Think Material style ripple effects.

## Example


Imports
```html
<script type="module"
	src="../feedback-animation.js">
</script>
<link rel="stylesheet"
  	type="text/css"
  	href="../feedback-animation.css">
```

Usage
```html
<button class="example-button"
 	 data-its-feedback-animation='ripple'
 	 data-its-feedback-color="#81c784">
	<span>Test button</span>
</button>
```
Note: Using a containing element for button text is needed.

```css
.example-button {
border: none;
outline: 0;
width: 80px;
height: 44px;
transition: background 300ms ease-in-out;
}

.example-button:hover {
  background: #c8e6c9;
}

.example-button:focus {
  background: #a5d6a7
}
```
