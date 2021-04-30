// app.js
App({
  onShow: function () {
    console.log("life cycle: app onShow")
  },
  onHide: function () {
    console.log("life cycle: app onHide")
  },
  onLaunch: function (opt) {
    console.log("life cycle: app onLaunch")
    console.log(opt)
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
