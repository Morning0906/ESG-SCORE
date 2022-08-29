// pages/company/first/first.js
const app=getApp();
const db = wx.cloud.database({ env: 'cloud1-0g5xmjwvd771e9d9'});
const pl = db.collection('caiwu');
Page({

    /**
     * 页面的初始数据
     */
    data: {
      code:'',
      datalist:[]
  },

  find_next_data:function(options){ 
    var code = this.data.code
      pl.where({code: code})
      .orderBy('time','desc')
      .get({
        success: res => {
          this.setData({
            datalist: res.data,
          })
          console.log(res.data)
          console.log(datalist)
        }
      })
    },

    gotoPage_caiwu:function(){
      wx.navigateTo({
        url:'caiwu/caiwu',
       })
    },
    gotoPage_esg:function(){
      wx.navigateTo({
        url:'esg/esg',
       })
    },
    gotoPage_environment:function(){
      wx.navigateTo({
        url:'environment/environment',
       })
    },
    gotoPage_society:function(){
      wx.navigateTo({
        url:'society/society',
       })
    },
    gotoPage_governance:function(){
      wx.navigateTo({
        url:'governance/governance',
       })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var code
      console.log(typeof this.data.code)
      this.setData({
        code: options.code
    })
    console.log(options)
    console.log(this.data.code)
    console.log(options.code)
    console.log(typeof this.data.code)
    console.log(typeof options.code)
    this.find_next_data();
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
    audioPlay: function () {
      innerAudioContext.play()
    },
    audioPause:function(){
      innerAudioContext.pause()
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
      this.audioPause()
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
      this.audioPause()
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