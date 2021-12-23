
+(function () {

  function demo1() {
    console.log('demo1');
  }

  function demo2() {
    console.log('demo2');
  }

  function demo3(value) {
    console.log('demo3', value);
  }

  // demo__ 請替換為不容易重複的變數名稱
  window.demo__ = {
    demo1,
    demo2,
  };
})();