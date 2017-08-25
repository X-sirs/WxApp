App({
    onLaunch: function () {
        var logs = wx.getStorageSync('logs')||[];
        logs.unshift(Date.now());
        wx.setStorageSync("logs",logs);
        wx.login({
            success: function(res){
                if(res.authSetting['scope.usuerInfo']){
                    wx.getUserInfo({
                        success: function(res){
                            this.globalData.userInfo = res.userInfo;
                            if(this.userInfoReadyCallback){
                                this.userInfoReadyCallback(res)
                            }
                        },
                        fail: function() {
                            // fail
                        },
                        complete: function() {
                            // complete
                        }
                    })
                }
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        })
    },
    globalData:{
        userInfo:null
    },
    onShow: function () {
        String2
    },
    onHide: function () {
        String3
    },
    onError: function (msg) {
        String4
    }
})