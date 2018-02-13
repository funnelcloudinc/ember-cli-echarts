# Ember CLI echarts

[![Ember Version](https://embadge.io/v1/badge.svg?start=2.3.0)](https://embadge.io/v1/badge.svg?start=2.3.0)
[![Build Status](https://travis-ci.org/funnelcloudinc/ember-cli-echarts.svg)](https://travis-ci.org/funnelcloudinc/ember-cli-echarts)
[![npm version](https://badge.fury.io/js/ember-cli-echarts.svg)](http://badge.fury.io/js/ember-cli-echarts)
[![Download Total](https://img.shields.io/npm/dt/ember-cli-echarts.svg)](http://badge.fury.io/js/ember-cli-echarts)
[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-echarts.svg)](https://emberobserver.com/addons/ember-cli-echarts)
[![Code Climate](https://codeclimate.com/github/funnelcloudinc/ember-cli-echarts/badges/gpa.svg)](https://codeclimate.com/github/funnelcloudinc/ember-cli-echarts)

An EmberJS [echarts](http://echarts.baidu.com/) wrapper

### Shout-out to @offirgolan as a lot of this was stolen from: [ember-cli-nvd3](https://github.com/offirgolan/ember-cli-nvd3) :pizza: :pizza: :pizza:  

## Installation ##
```shell
ember install ember-cli-echarts
```

## Looking for help? ##
If it is a bug [please open an issue on GitHub](http://github.com/funnelcloudinc/ember-cli-echarts/issues).

## echarts Documentation
Before using this addon, you might want to checkout the [echarts Docs](https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts)

## Basic Usage ##
All you need to get started is to specify which type of chart you want and the data it should display

```handlebars
{{echarts-chart options=options}}
```

## Options

### Chart Options
All chart specific options can be specified via the `options` property.

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
{{echarts-chart options=options}}
```

### Helper Actions
Currently there are two helper actions provided:

#### 1. beforeSetup
This is called before echarts has been initialized. 

```javascript
beforeSetup(context, chart) {}
```

```handlebars
{{echarts-chart options=options beforeSetup=beforeSetup}}
```

#### 2. afterSetup
This is called after all chart options and data have been set, as well as after the chart has been created. 

```javascript
afterSetup(context, chart) {}
```

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
