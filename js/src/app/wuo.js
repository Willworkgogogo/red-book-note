(function () {
  let Wuo = {
    // dealClass
    dealClass: {
      // hasClass
      hasClass: (dom, className) => {
        let classes = dom.className.split(" ")
        let newArr = classes.filter(item => className === item)
        return newArr.length > 0
      },
      // removeClass
      removeClass: (dom, className) => {
        let classes = dom.className.split(" ")
        let pos = -1
        classes.forEach((item, index) => {
          if (item === className) {
            pos = index
            break
          }
        })
        dom.className = classes.splice(pos, 1).join(" ")
        return
      }
    }
  }
})()