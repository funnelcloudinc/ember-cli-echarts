# Ember CLI echarts

[![Ember Version](https://embadge.io/v1/badge.svg?start=2.3.0)](https://embadge.io/v1/badge.svg?start=2.3.0)
[![Build Status](https://travis-ci.org/funnelcloudinc/ember-cli-echarts.svg)](https://travis-ci.org/funnelcloudinc/ember-cli-echarts)
[![npm version](https://badge.fury.io/js/ember-cli-echarts.svg)](http://badge.fury.io/js/ember-cli-echarts)
[![Download Total](https://img.shields.io/npm/dt/ember-cli-echarts.svg)](http://badge.fury.io/js/ember-cli-echarts)

An EmberJS [echarts](http://echarts.baidu.com/) wrapper  

## Installation ##
```shell
ember install ember-cli-echarts
```

## echarts Documentation
Before using this addon, you might want to checkout the [echarts docs](https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts)

[Usage](https://funnelcloudinc.github.io/ember-cli-echarts/latest/docs/usage) |
[Examples](https://funnelcloudinc.github.io/ember-cli-echarts/latest/docs/examples)

## Basic Usage ##
All you need to get started is to pass in the data it should display via the `option` parameter

```handlebars
{{echarts-chart option=option}}
```

## Options

### Chart Options
All chart specific options can be specified via the `option` parameter.

```javascript
// Basic area chart
option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
    }]
};
```

```handlebars
{{echarts-chart option=option}}
```

## Looking for help? ##
If it is a bug [please open an issue on GitHub](http://github.com/funnelcloudinc/ember-cli-echarts/issues).

# Want to help?

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

### Shout-out to @offirgolan as a lot of this was inspired by: [ember-cli-nvd3](https://github.com/offirgolan/ember-cli-nvd3) :pizza: :pizza:
