An EmberJS [echarts](http://echarts.baidu.com/) wrapper  

## Installation ##
```sh
ember install ember-cli-echarts
```

## Basic Usage ##
All you need to get started is to pass the data it should display

```handlebars
{{echarts-chart option=option}}
```

## Options

### Chart Options
All chart specific options can be specified via the `option` property.

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
