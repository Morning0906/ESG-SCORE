const db = wx.cloud.database({ env: 'cloud1-0g5xmjwvd771e9d9'});
const pl = db.collection('rank1');
Page({
  /**
   * 页面的初始数据
   */
  data: { 
    list:[],
    number:0
  },

  find_next_data:function(options){
    let x = this.data.number;
    pl.orderBy('rank', 'asc')
    .skip(x)
    .limit(10)
    .get({
      success: res => {
        this.setData({
          number: x + 10,
          list: res.data
        })
        console.log(res.data)
        console.log(list)
      }
    })
    wx.pageScrollTo({
      scrollTop: 0
    })
  },

  find_prior_data:function(options){
    let x = this.data.number;
    pl.orderBy('rank', 'asc')
    .skip(x-10)
    .limit(10)
    .get({
      success: res => {
        this.setData({
          number: x - 10,
          list: res.data
        })
        console.log(res.data)
        console.log(list)
      }
    })
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
//1、外出接口


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    number: 0
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