import Component from '@ember/component';
import { get, set, computed, observer } from '@ember/object';
import { run } from '@ember/runloop';
import { on } from '@ember/object/evented';
import echarts from 'echarts';

export default Component.extend({
  classNames: ['echarts-chart'],

  options: {},
  notMerge: false,
  lazyUpdate: false,
  theme: null,
  initOptions: {
    devicePixelRatio: 1,
    renderer: 'canvas',
    width: 'auto',
    height: 'auto'
  },

  _chart: null,

  beforeSetup() {
  },
  afterSetup() {
  },

  init() {
    this._super(...arguments);
    $(window).on('resize', this.handleResize.bind(this));
  },

  eventContext: computed(function() {
    return get(this, 'targetObject') || this;
  }),

  reDraw: on('didInsertElement', observer('options', 'options.{*}', function() {
    run.scheduleOnce('render', this, this.drawChart);
  })),

  drawChart() {
    if (get(this, '_chart') && get(this, '_chart').isDisposed()) {
      return;
    }

    let chart;
    let selector = `#${get(this, 'elementId')}`;
    let $el = $(selector);
    let context = get(this, 'eventContext');

    chart = echarts.init($el[0], get(this, 'theme'), get(this, 'initOptions'));

    set(this, '_chart', chart);

    run(() => get(this, 'beforeSetup').call(context, chart));

    chart.setOption(get(this, 'options'), get(this, 'notMerge'), get(this, 'lazyUpdate'));

    run(() => get(this, 'afterSetup').call(context, chart));

    return chart;
  },

  handleResize() {
    const chart = get(this, '_chart');
    if (chart) {
      chart.resize();
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    const chart = get(this, '_chart');
    if (chart) {
      chart.dispose();
    }
    $(window).off('resize');
  }

});
