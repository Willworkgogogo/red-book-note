const Plugins1 = {
  install(a, b, c) {
    console.log('Plugin1 第一个参数:', a);
    console.log('Plugin1 第二个参数:', b);
    console.log('Plugin1 第三个参数:', c);
  }
}

function Plugins2(a, b, c) {
  console.log('Plugin2 第一个参数:', a);
  console.log('Plugin2 第二个参数:', b);
  console.log('Plugin2 第三个参数:', c);
}

export { Plugins1, Plugins2}