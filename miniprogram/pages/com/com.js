// pages/com/com.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    sch:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    const id = options.id
    var list=[
      {name: "西安市第一人民医院", show: true, search:"西安市第一人民医院"},
      {name: "西安市第二人民医院", show: true, search: "西安市第二人民医院" },
      {name: "兰州市第一人民医院", show: true, search: "兰州市第一人民医院" },
      {name: "兰州市第二人民医院", show: true, search: "兰州市第二人民医院" },
      {name: "兰州市第三人民医院", show: true, search: "兰州市第三人民医院" }
    ]
    wx.setStorage({
      key: 'list',
      data: list
    })
    this.setData({
      list:list
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})