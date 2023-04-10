// pages/chatroom/chatroom.js
function ChatItem (side, content){
  this.side = side
  this.content = content
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: '我是一个初始值',
    avatarUrl: 'bot-head.JPG',
    userInfo: {},
    chats: [
      new ChatItem(0, 'firstdsaaaaaasentence:iamaverylong sentence -------'),
      new ChatItem(1, 'second sentence:  i am a very long sentence at the right side hhhhhh'),
      new ChatItem(0, 'thirdsentencesdsassssssddsadsss'),
      new ChatItem(1, '我打了一句中文，我想测试一下界面的换行效果是怎样的，感觉可能不太行。。。。'),
      new ChatItem(0, 'firstdsaaaaaasentence:iamaverylong sentence -------'),
      new ChatItem(1, '我打了一句中文，我想测试一下界面的换行效果是怎样的，感觉可能不太行。。。。'),
      new ChatItem(0, 'firstdsaaaaaasentence:iamaverylong sentence -------'),
    ],
    side: 1, // 0 means left, 1 means right
    inputText: "" 
  },

  bindKeyConfirm: function(e) {
    console.log("用户输入了：" + e.detail.value)
    temp = e.detail.value
    this.setData({
      chats: this.data.chats.concat([new ChatItem(1, e.detail.value), new ChatItem(0, "等待ai回复...")]),
      inputText: ''
    })
    
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("I'm going onReady")
    wx.getUserProfile({
      desc: '登录',
      success: (res) => {
        this.setData({
          avatarUrl: res.userInfo.avatarUrl,
          userInfo: res.userInfo
        })
      },
      fail(err) {
        wx.showToast({
          title: '用户拒绝授权',
          icon: "error",
          duration: 1000
        })
      }
    })
    console.log('show userinfo: ' + this.userInfo)
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})