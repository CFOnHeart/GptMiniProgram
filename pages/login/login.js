// pages/login/login.js
const UserAccount = require('../../model/UserAccount.js')

Page({

  /**
   * Page initial data
   */
  data: {
    account: '',
    password: '',
    notification: '', // 注册成功，登录失败等的提示信息
    accounts: {}
  },

  bindtapRegister: function(e) {
    if (this.data.account != '' && !(this.data.account in this.data.accounts)) {
      this.data.accounts[this.data.account] = this.data.password
      this.setData({
        notification: "恭喜注册成功,可以登录了"
      })
    }
  },

  bindtapLogin: function(e) {
    console.log("current account is: " + this.data.account)
    console.log("current password is: " + this.data.password)
    if (!(this.data.account in this.data.accounts)) {
      this.setData({
        notification: "该账户不存在，请先注册"
      })
    }
    else if (this.data.password !== this.data.accounts[this.data.account]) {
      this.setData({
        notification: "密码不正确"
      })
    }
    else {
      wx.navigateTo({
        url: '../chatroom/chatroom'
      })
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})