import Component from '@ember/component';
import { get, set, computed, observer } from '@ember/object';
import { run } from '@ember/runloop';
import { on } from '@ember/object/evented';
import echarts from 'echarts';

export default Component.extend({
  classNames: ['echarts-chart'],

  option: {},
  notMerge: false,
  lazyUpdate: false,
  theme: null,
  onEvents: {},
  onChartReady() {},
  showLoading: false,
  loadingOptions: {},
  opts: {},

  _chart: null,

  beforeSetup() {},
  afterSetup() {},

  init() {
    this._super(...arguments);
    $(window).on('resize', this.handleResize.bind(this));
  },

  eventContext: computed(function() {
    return get(this, 'targetObject') || this;
  }),

  reRender: on('didInsertElement', observer(
    'option',
    'opts',
    'opts.{devicePixelRatio,renderer,width,height}',
    function() {
      run.scheduleOnce('render', this, this.renderChart);
    })),

  renderChart() {
    if (get(this, '_chart') && get(this, '_chart').isDisposed()) return;

    const selector = `#${get(this, 'elementId')}`;
    const $el = $(selector);
    const context = get(this, 'eventContext');
    const notMerge = get(this, 'notMerge');
    const lazyUpdate = get(this, 'lazyUpdate');
    const option = get(this, 'option');
    const theme = get(this, 'theme');
    const opts = get(this, 'opts');
    const onChartReady = get(this, 'onChartReady');
    const showLoading = get(this, 'showLoading');
    const loadingOptions = get(this, 'loadingOptions');
    const beforeSetup = get(this, 'beforeSetup');
    const afterSetup = get(this, 'afterSetup');

    const chart = echarts.init($el[0], theme, opts);
    set(this, '_chart', chart);

    // before echarts setup
    run(() => beforeSetup.call(context, chart));

    chart.setOption(option, notMerge, lazyUpdate);

    // set loading mask
    if (showLoading) chart.showLoading(loadingOptions || null);
    else chart.hideLoading();

    this.bindEvents(chart);

    if (typeof onChartReady === 'function') onChartReady(chart);

    // after echarts setup
    run(() => afterSetup.call(context, chart));

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
  },

  bindEvents(instance) {
    const events = get(this, 'onEvents') || {};
    const _loopEvent = (eventName) => {
      // ignore the event config which not satisfy
      if (typeof eventName === 'string' && typeof events[eventName] === 'function') {
        // binding event
        instance.off(eventName);
        instance.on(eventName, (param) => {
          events[eventName](param, instance);
        });
      }
    };

    for (const eventName in events) {
      if (Object.prototype.hasOwnProperty.call(events, eventName)) {
        _loopEvent(eventName);
      }
    }
  }

});
