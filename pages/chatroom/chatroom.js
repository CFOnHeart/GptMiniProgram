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
    chats: [
      new ChatItem('left', 'first sentence: i am a very long sentence -------'),
      new ChatItem('right', 'second sentence'),
      new ChatItem('left', 'third sentence')
    ],
    side: 'left'
  },

  bindKeyConfirm: function(e) {
    console.log(e.detail.value)
    this.setData({
      content: e.detail.value
    })
    chats.concat(new ChatItem(this.side, 'content'))
    e.detail.value = ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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