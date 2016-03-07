# Animation Chain

Animation Chain makes it dead simple to chain CSS-animations. It is currently available for Sass. Pass a map of selectors and animations to the ac mixin, and it automatically sequences the animations.

## Installation

**Github**:<br />[https://github.com/jakobberglund/animation-chain](https://github.com/jakobberglund/animation-chain)

**npm**:<br />[https://www.npmjs.com/package/sass-animation-chain](https://www.npmjs.com/package/sass-animation-chain)

Import ac.scss (located in the src folder) into you project, and your done!


### Example files

There's a bunch of example files in the folder called examples. They have pre-compiled css and all, but if you want to play around with them you can do an NPM install and then run 'gulp' to compile changes to the SCSS-files. 

## Usage

Animation Chain is basically a mixin called ac. Pass a map with targets, and optional defaults, to sequence the animations.

Each item in targets accepts any standard animation-related parameter, as well as a special selectors key. At a minimum, it has to recieve selectors, animation-name and animation-duration.

Each item in the list calculates the previous items' durations and delays, and adds this to it's own delay.

### Basic Usage

Example without defaults.  
```scss
    $chain-params: (
        targets: (
            (
                selectors: '.element-1',
                animation-name: 'fadeIn',
                animation-duration: 1s

            ),
            (
                selectors: '.element-2',
                animation-name: 'fadeOut',
                animation-duration: 100ms,
                animation-delay: 200ms
            ),
            (
                selectors: '.element-3',
                animation-name: 'slideIn',
                animation-duration: .3s,
                animation-delay: 1s
            ),
            (
                selectors: '.element-4',
                animation-name: 'rotate',
                animation-duration: 120s
            )
        )
        
    );

    @include ac($chain-params);
```

### Negative Delays

Unlike regular css, you can use negative delays to overlap animations. In the example below, .element-2 will start animating 500ms before .element-1 is done
 ```scss
    $chain-params: (
        targets: (
            (
                selectors: '.element-1',
                animation-name: 'fadeInAndDance',
                animation-duration: 1s

            ),
            (
                selectors: '.element-2',
                animation-name: 'blink',
                animation-duration: 2s,
                animation-delay: -500ms
            )
        )
        
    );

    @include ac($chain-params);
```

### Using defaults
You can also feed defaults to the mixin. These will be applied to each target element, and can be overridden if you want.
```scss
    $chain-params: (
        defaults: (
            animation-duration: 4s,
            animation-timing-function: linear,
            animation-iteration-count: 2,
            animation-direction: alternate,
            animation-fill-mode: backwards,
            animation-name: 'fadeIn'
        ),
        targets: (
            (
                selectors: '.element-1',

            ),
            (
                selectors: '.element-2',
            ),
            (
                selectors: '.element-3',
                animation-name: 'flickerLikeABrokenLightBulb',
                animation-duration: .3s,
                animation-delay: 1s
            ),
            (
                selectors: '.element-4',
                animation-name: 'rotate',
                animation-duration: 120s
            )
        )
        
    );

    @include ac($chain-params);
```

### Things To Take Into Consideration

* It is currently not possible to use the same selector on multipe items in the chain (the second would overwrite the first).
* There's no vendor-prefixing, but you should probably use autoprefixer anyway.


## Credits

Created by Jakob Berglund [www.jakobberglund.com](http://www.jakobberglund.com)

## License

MIT License