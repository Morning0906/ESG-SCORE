// pages/company/society/society.js
const db = wx.cloud.database({ env: 'cloud1-0g5xmjwvd771e9d9'});
const wg = db.collection('weiguichuli');
const pl = db.collection('shifoupilushehuizerenbaogao');
const cw = db.collection('caiwu');

Page({

    /**
     * 页面的初始数据
     */
    data: {
      code:'',
      datalist1:[],
      datalist2:[],
      datalist3:[]
    },

    find_next_data:function(options){ 
      var code = this.data.code
        wg.where({code:code})
        .get({
          success: res => {
            this.setData({
              datalist1: res.data,
            })
            console.log(res.data)
            console.log(datalist1)
          }
        })

        pl.where({code:code})
        .get({
          success: res => {
            this.setData({
              datalist2: res.data,
            })
            console.log(res.data)
            console.log(datalist2)
          }
        })

        cw.where({code:code})
        .get({
          success: res => {
            this.setData({
              datalist3: res.data,
            })
            console.log(res.data)
            console.log(datalist3)
          }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var code
      console.log(typeof this.code)
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