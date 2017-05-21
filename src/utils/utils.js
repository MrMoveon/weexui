var navigator = weex.requireModule('navigator')
const modal = weex.requireModule('modal')
export function jump(url,vm) {
  var config = weex.config;
  if (config.platform == "Web") {
    vm.$router.push(url);
  } else {
    navigator.push({
      url: 'http://192.168.1.135:8080/dist/page/' + url + '.js',
      animated: "true"
    }, event => {
      modal.toast({
        message: 'callback: ' + event
      })
    })
  }
  
};
export function back(vm) {

  var config = weex.config;
  if (config.platform == "Web") {
    vm.$router.go(-1);
  } else {
    navigator.pop()
  }
};
