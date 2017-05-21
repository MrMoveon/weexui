var navigator = weex.requireModule('navigator')
const modal = weex.requireModule('modal')
export default {
  methods: {
    jump(url){
        var config = weex.config;
        if(config.platform=="Web"){
            this.$router.push(url);
        }else{
            navigator.push({
                url: 'http://192.168.1.135:8080/dist/page/'+url+'.js',
                animated: 'true'
            }, event => {
               // modal.toast({ message: 'callback: ' + event })
            })
        }
      },
      back(){
        var config = weex.config;
        if(config.platform=="Web"){
            this.$router.go(-1);
        }else{
             navigator.pop({
                animated: 'true'
            }, event => {
               modal.toast({ message: 'callback: ' + event })
            })
           
        }
         modal.toast({ message: 'back' })
      }
  }
}
