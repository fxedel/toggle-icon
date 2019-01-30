/*
Copyright (c) 2016-17 Felix Edelmann. 
The project is distributed under the MIT License, so you can use or modify the code as you like, you only need to name the author (e. g. by adding a link to the GitHub repository).

Source code: https://github.com/fxedel/toggle-icon
Component page / demo: http://fxedel.github.io/toggle-icon/
*/
/**
An extremly powerful and customizable switch that looks like a paper-icon-button. Use `toggleIcon.checked` to get the toggle-icon's status in JavaScript.

The very basic usage without user feedback to show whether the switch is checked or not only needs the `icon` (or `icon-src`) property:

    <toggle-icon icon="thumb-up"></toggle-icon>

Set `animation` to a space-seperated list of supported animations, which currently are `flip-vertical`, `flip-horizontal` and `rotate` (default rotation angle is 180deg, use `rotation` for other values).

    <toggle-icon icon="thumb-up" animation="flip-vertical"></toggle-icon>
    <toggle-icon icon="arrow-forward" animation="rotate" rotation="90"></toggle-icon>

Use `icon-checked` (or `icon-src-checked`) to change the icon while switching (there will be a smooth fading animation).

    <toggle-icon icon="favorite-border" icon-checked="favorite"></toggle-icon>


### Styling

You can style the paper-icon-buttons like usual by adding (custom) properties or mixins to the following mixins:

Custom property | Description | Default
----------------|-------------|----------
`--toggle-icon` | Mixin for the toggle | `{}`
`--toggle-icon-checked` | Mixin for the toggle when checked | `{}`
`--toggle-icon-active` | _Used for backwards compatibility._ Same as --toggle-icon-checked | `{}`
`--toggle-icon-buttons` | Mixin for the used paper-icon-buttons | `{}`

Custom colors and backgrounds do animate if they change in checked state by using the CSS transition attribute.

***Example:** This will add a green phone that rotates and turns red on click.

    <style is="custom-style">
      .green-red {
        --toggle-icon: {
          color: var(--paper-green-500);
        };
        --toggle-icon-checked: {
          color: var(--paper-red-500);
        };
      }
    </style>

    <toggle-icon
      icon="communication:call"
      animation="rotate"
      rotation="135"
      class="green-red">
    </toggle-icon>

@element toggle-icon
@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import { IronCheckedElementBehavior } from '@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <style>
      :host {
        display: inline-block;
        position: relative;
        transition: all .3s;
        @apply --toggle-icon;
      }

      :host([checked]) {
        @apply --toggle-icon-checked;
        @apply --toggle-icon-active;
      }

      #unchecked, #checked {
        transition: opacity .3s;
        @apply --toggle-icon-buttons;
      }

      #checked {
        position: absolute;
        left: 0;
        top: 0;
      }

      :host(:not([checked])) #checked,
      :host([checked]) #unchecked {
        opacity: 0;
        pointer-events: none;
      }
    </style>

    <paper-icon-button id="unchecked" icon="{{icon}}" src="{{iconSrc}}" disabled\$="{{disabled}}">
    </paper-icon-button>

    <paper-icon-button id="checked" icon="{{_computeIconChecked(icon, iconChecked, iconActive)}}" src="{{_computeIconSrcChecked(iconSrc, iconSrcChecked, iconSrcActive)}}" disabled\$="{{disabled}}">
    </paper-icon-button>
`,

  is: 'toggle-icon',

  properties: {
    /**
     * Changes on click, like a checkbox. Doesn't change when disabled.
     */
    checked: {
      type: Boolean,
      value: false,
    },

    /**
     * _Used for backwards compatibility._
     * Alias for `checked`
     */
    active: {
      type: Boolean,
      observer: '_activeChanged',
    },

    /**
     * Specifies how to transform the content.
     * Allowed modes: `flip-vertical`, `flip-horizontal`, `rotate`
     */
    animation: {
      type: String,
    },

    /**
     * Specifies the degrees when `animation` contains `rotate`.
     */
    rotation: {
      type: Number,
      value: 180,
    },

    /**
     * The name of the icon to use. The name should be of the form: `iconset_name:icon_name` (omit the iconset name when using the default set). See [iron-icon](https://elements.polymer-project.org/elements/iron-icon).
     */
    icon: {
      type: String,
    },

    /**
     * Like `icon`, but only used when checked.
     */
    iconChecked: {
      type: String,
      value: '',
    },

    /**
     * _Used for backwards compatibility._
     * Alias for `iconChecked`
     */
    iconActive: {
      type: String,
      value: null,
    },

    /**
     * If using iron-icon without an iconset, you can set the src to be the URL of an individual icon image file. Note that this will take precedence over a given icon attribute. See [iron-icon](https://elements.polymer-project.org/elements/iron-icon).
     */
    iconSrc: {
      type: String,
    },

    /**
     * Like `iconSrc`, but only used when checked.
     */
    iconSrcChecked: {
      type: String,
      value: '',
    },

    /**
     * _Used for backwards compatibility._
     * Alias for `iconSrcChecked`
     */
    iconSrcActive: {
      type: String,
      value: null,
    },

    /**
     * Set to `true` to disable the toggle.
     */
    disabled: {
      type: Boolean,
      value: false,
    },

  },

  behaviors: [
    IronCheckedElementBehavior,
  ],

  listeners: {
    'click': 'toggleChecked',
    'iron-change': '_checkedChanged',
  },

  /**
   * Toggle `checked`
   */
  toggleChecked: function() {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  },

  /**
   * Compute and return the checked paper-icon-button's `icon` property.
   * Use `iconChecked` if present, else `iconActive` if present (_used for backwards compatibility_), else `icon`.
   */
  _computeIconChecked: function(icon, iconChecked, iconActive) {
    return iconChecked ? iconChecked : (iconActive ? iconActive : icon);
  },

  /**
   * Compute and return the checked paper-icon-button's `src` property.
   * Use `iconSrcChecked` if present, else `iconSrcActive` if present (_used for backwards compatibility_), else `iconSrc`.
   */
  _computeIconSrcChecked: function(iconSrc, iconSrcChecked, iconSrcActive) {
    return iconSrcChecked ? iconSrcChecked : (iconSrcActive ? iconSrcActive : iconSrc);
  },

  /**
   * Compute the transform property depending on the specified animations in `animation`.
   */
  _computeTransform: function() {
    if (this.animation === undefined || this.animation == null) {
      return '';
    }

    var transform = '';

    if (this.animation.indexOf('flip-vertical') > -1) {
      transform += ' scale(1, -1)';
    }
    if (this.animation.indexOf('flip-horizontal') > -1) {
      transform += ' scale(-1, 1)';
    }
    if (this.animation.indexOf('rotate') > -1) {
      transform += ' rotate(' + this.rotation + 'deg)';
    }

    return transform;
  },

  /**
   * If element is checked, apply CSS transforms (specified in `animation`).
   */
  _checkedChanged: function() {
    this.transform(this.checked ? this._computeTransform() : '');
    this.active = this.checked;
  },

  /**
   * _Used for backwards compatibility._
   * When `active` changes, set `checked` to this value
   */
  _activeChanged: function() {
    this.checked = this.active;
  }
});