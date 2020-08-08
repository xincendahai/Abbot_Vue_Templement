 <template>
  <div
    class="base-eacharts"
    :id="id+'model'"
  >
    <div :id="id"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'lineBarEcharts',
  props: {
    option: {},
    timeStamp: {}
  },
  data () {
    return {
      id: 'echarts-' + (new Date()).getTime() + '-' + this.$Frandom.num(),
      myChart: '',
      defaultConfig: {
        title: {},
        legend: {
          type: 'scroll',
          orient: 'horizontal',
          right: 10,
          top: 0,
          textStyle: {
            color: '#000'
          },
          data: []
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '10px',
          right: '0',
          bottom: '15px',
          top: '30px',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#000'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#333333'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#a3c9ee'
            }
          }

        },
        yAxis: {
          type: 'value',
          nameTextStyle: {
            color: '#333333'
          },
          nameGap: 10,
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#333333'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#a3c9ee'
            }
          },
          splitLine: {
            show: false
          }
        },
        series: []
      }
    }
  },
  watch: {
    timeStamp () {
      let self = this;
      if (self.id) {
        self.$nextTick(() => {
          self.initChart();
        });
      }
    }
  },
  methods: {
    // 处理数据
    init () {
      this.defaultConfig.series = [];
      for (let i = 0; i < 5; i++) {
        this.defaultConfig.legend.data.push('数据' + (i + 1));
        this.defaultConfig.series.push({
          name: '数据' + (i + 1),
          type: 'line',
          smooth: true,
          stack: '总量',
          data: []
        })
        for (let j = 0; j < 10; j++) {
          this.defaultConfig.series[i].data.push([
            j + 1,
            Math.round(Math.random() * 100)
          ]);
        }
      }
      this.calculate_legend();
      this.initChart();
    },
    calculate_legend () {
      let self = this;
      let _legend = (self.option && self.option.legend) || self.defaultConfig.legend;
      let _series = (self.option && self.option.series) || self.defaultConfig.series;
      _legend.data = _series.map((item) => item['name'])
      return _legend;
    },
    calculate_yAxis () {
      let self = this;
      let _yAxis = (self.option && self.option.yAxis) || self.defaultConfig.yAxis;
      _yAxis.name = _yAxis.name || '';
      _yAxis.type = _yAxis.type || self.defaultConfig.yAxis.type;
      _yAxis.nameGap = _yAxis.nameGap || self.defaultConfig.yAxis.nameGap;
      _yAxis.nameTextStyle = _yAxis.nameTextStyle || self.defaultConfig.yAxis.nameTextStyle;
      _yAxis.axisTick = _yAxis.axisTick || self.defaultConfig.yAxis.axisTick;
      _yAxis.axisLabel = _yAxis.axisLabel || self.defaultConfig.yAxis.axisLabel;
      _yAxis.axisLine = _yAxis.axisLine || self.defaultConfig.yAxis.axisLine;
      _yAxis.splitLine = _yAxis.splitLine || self.defaultConfig.yAxis.splitLine;
      return _yAxis;
    },
    calculate_series () {
      let self = this;
      let _series = self.option.series || self.defaultConfig.series;
      if (!_series[0].data) {
        _series = _series.map(item => {
          let _item = item;
          _item.data = []
          for (let j = 0; j < 10; j++) {
            _item.data.push([
              j + 1,
              Math.round(Math.random() * 100)
            ]);
          }
          return _item;
        })
      }
      return _series;
    },
    // 画图
    initChart () {
      let self = this;
      // 基于准备好的dom，初始化echarts实例
      self.myChart = echarts.init(document.getElementById(self.id), 'light')
      // 绘制图表
      if (self.option) {
        self.myChart.setOption({
          title: self.option['title'] || self.defaultConfig.title,
          legend: self.calculate_legend(),
          tooltip: self.option['tooltip'] || self.defaultConfig.tooltip,
          grid: self.option['grid'] || self.defaultConfig.grid,
          xAxis: self.option['xAxis'] || self.defaultConfig.xAxis,
          yAxis: self.calculate_yAxis(),
          series: self.calculate_series(),
        });
      } else {
        self.myChart.setOption(self.defaultConfig);
      }

    }
  },
  mounted () {
    let self = this;
    self.$nextTick(() => {
      self.init();
    });
    self.$FeleResize.on(document.getElementById(self.id + 'model'), () => {
      self.myChart.resize();
    });
  }
}
</script>

<style scoped>
.base-eacharts,
.base-eacharts > div {
  width: 100%;
  height: 100%;
}
</style>
