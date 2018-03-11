// BEGIN-SNIPPET chart-themes-1.js
import Component from '@ember/component';
import { set } from '@ember/object';
import echarts from 'echarts';

export default Component.extend({

  init() {
    this._super(...arguments);
    this.registerTheme();
    set(this, 'theme', 'my_theme');
  },

  option: {
    title: {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      right: 'right',
      orient: 'vertical',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          {
            value: 335, name: '直接访问'
          },
          {
            value: 310, name: '邮件营销'
          },
          {
            value: 122, name: '联盟广告'
          },
          {
            value: 210, name: '视频广告'
          },{
            value: 170, name: '搜索引擎'
          },
        ]
      }
    ]
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
  },

});
// END-SNIPPET


