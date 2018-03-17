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

---

## Basic Usage ##
All you need to get started is to pass in the data it should display via the `option` parameter.

```handlebars
{{echarts-chart option=option}}
```

---

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

[Example](https://funnelcloudinc.github.io/ember-cli-echarts/latest/docs/examples/chart-simple)

---

### Events
[Echarts events API](https://ecomfe.github.io/echarts-doc/public/en/api.html#events)

```javascript
onEvents: {
    click(param, echart) {
      console.log(param, echart);
      alert('chart clicked');
    },
    legendselectchanged(param, echart){
      console.log(param, echart);
      alert('chart legendselectchanged');
    }
  }
```  

```handlebars
{{echarts-chart option=option onEvents=onEvents}}
```

[Example](https://funnelcloudinc.github.io/ember-cli-echarts/latest/docs/examples/chart-events)

---

### Loading

[Echarts showLoading API](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.showLoading)

```javascript
_t: null,

loadingOptions: {
  text: '加载中...',
  color: '#4413c2',
  textColor: '#270240',
  maskColor: 'rgba(194, 88, 86, 0.3)',
  zlevel: 0
},

onChartReady(chart) {
  set(this, '_t', setTimeout(() => {
    chart.hideLoading();
  }, 3000));
},
```

```handlebars
{{echarts-chart
  option=option
  onChartReady=(action onChartReady)
  loadingOptions=loadingOptions
  showLoading=true
}}
```

[Example](https://funnelcloudinc.github.io/ember-cli-echarts/latest/docs/examples/chart-loading)

---

### Themes

Custom theme

```javascript
init() {
  this._super(...arguments);
  this.registerTheme();
  set(this, 'theme', 'my_theme');
},
  
registerTheme() {
  const colorPalette = [
    '#c12e34','#e6b600','#0098d9','#2b821d',
    '#005eaa','#339ca8','#cda819','#32a487'
  ];

  echarts.registerTheme('my_theme', {
    "color": colorPalette,
    "title": {
      "left": "center",
      "y": "10",
      "textStyle": {
        "color": "#fff"
      },
    },
    legend: {
      "textStyle": {
        "color": "#fff"
      },
    },
    "backgroundColor": "#1c2e40",
  });
}
```

Echarts `Dark` theme

```javascript
init() {
  this._super(...arguments);
  // echart default themes
  set(this, 'theme', 'dark');
}
```  

```handlebars
{{echarts-chart
  option=option
  theme=theme
}}
```

[Example](https://funnelcloudinc.github.io/ember-cli-echarts/latest/docs/examples/chart-themes)

---

### Additional Config

[Echarts init API](https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.init)

```javascript
opts: {
  devicePixelRatio: 1,
  renderer: 'svg' // canvas of svg
  width: '500px',
  height: '500px'
}
```  

```handlebars
{{echarts-chart
  option=option
  opts=opts
}}
```

---

### Helper Actions
Currently there are two helper actions provided:

#### 1. beforeSetup
This is called before echarts has been initialized. 

```javascript
beforeSetup(context, chart) {}
```

```handlebars
{{echarts-chart option=option beforeSetup=(action beforeSetup)}}
```

#### 2. afterSetup
This is called after all chart options and data have been set, as well as after the chart has been created. 

```javascript
afterSetup(context, chart) {}
```

```handlebars
{{echarts-chart option=option afterSetup=(action afterSetup)}}
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
