Vue.config.delimiters = ['<%', '%>'];

var demo = new Vue({
  el: '#demo',
  data: {
    title: 'demo',
    todos: [
      {
        content: 'hoge'
      },
      {
        content: 'foo'
      }
    ]
  }
});

