[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)

toggle-icon
=================

## What does this element?
`toggle-icon` is a custom element created with Polymer. It provides an extremly powerful and customizable switch that looks like a `paper-icon-button`. Use `toggleIcon.checked` to get the toggle-icon's status in JavaScript. For more information about the usage, see the [component page](http://fxedel.github.io/toggle-icon/).

<script src="https://fxedel.github.io/toggle-icon/bower_components/webcomponentsjs/webcomponents-lite.js"></script>
<link rel="import" href="https://fxedel.github.io/toggle-icon/bower_components/iron-icons/iron-icons.html">
<link rel="import" href="https://fxedel.github.io/toggle-icon/bower_components/iron-icons/communication-icons.html">
<link rel="import" href="https://fxedel.github.io/toggle-icon/bower_components/paper-styles/color.html">
<link rel="import" href="https://fxedel.github.io/toggle-icon/bower_components/toggle-icon/toggle-icon.html">
<custom-style>
  <style is="custom-style">
    .toggle-icon-demo {
      text-align: center;
    }

    .all1,
    .all4 {
      --toggle-icon: {
        color: var(--paper-green-500);
      };
      --toggle-icon-checked: {
        color: var(--paper-red-500);
      };
    }
    .all2 {
      --toggle-icon: {
        color: var(--paper-indigo-500);
      };
    }
    .all3 {
      --toggle-icon-checked: {
        color: var(--paper-orange-500);
      };
    }
    .all5 {
      --toggle-icon: {
        background: var(--paper-green-500);
        border-radius: 50%;
        color: #fff;
      };
      --toggle-icon-checked: {
        background: var(--paper-red-500);
        color: #fff;
      };
    }
  </style>
</custom-style>
<div class="toggle-icon-demo">
  <toggle-icon
    class="all1"
    icon="trending-up"
    animation="flip-vertical">
  </toggle-icon>
  <toggle-icon
    class="all2"
    icon="arrow-forward"
    animation="rotate">
  </toggle-icon>
  <toggle-icon
    class="all3"
    icon="star-border"
    icon-checked="star">
  </toggle-icon>
  <toggle-icon
    class="all4"
    icon="thumb-up"
    animation="flip-vertical flip-horizontal">
  </toggle-icon>
  <toggle-icon
    class="all5"
    icon="communication:call"
    animation="rotate"
    rotation="135">
  </toggle-icon>
</div>

Here's a gif that shows five icon-toggle elements which are toggled by setting the `checked` property programmatically:

![animation](https://cloud.githubusercontent.com/assets/7782229/9784398/2e81c9f6-57ab-11e5-92ee-b13603c8c585.gif)


## Get the code
If you have bower installed, run:

```
bower install toggle-icon
```

Else, you can clone this repository.

## Bugs / Feature requests
Feel free to open an issue if you notice something that can be improved.

## Contributing to the code
1. Fork the repository.
2. Commit your changes to your fork.
3. Create a pull request.

I really appreciate any contribution :)

## License
The project is distributed under the MIT License, so you can use or modify the code as you like, you only need to name the author (e. g. by adding a link to the GitHub repository).