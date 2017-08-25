App({
    onLaunch: function () {
      
    },
    getUserInfo:function(cb){
          var that = this;
          if(this.globalData.userInfo){
              typeof cb =="function"&&cb(this.globalData.userInfo)
          }else{
              wx.login({
                  success:function(){
                      wx.getUserInfo({
                            success:function(res){
                                that.globalData.userInfo = res.userInfo;
                                typeof cb == "function"&&cb (that.globalData.userInfo);
                            }
                      })
                  }
              })
          }
    },
    globalData:{
        userInfo:null
    },
    onShow: function () {
        
    },
    onHide: function () {
        
    },
    onError: function (msg) {
        
    }
})