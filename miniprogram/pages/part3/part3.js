Page({
  /**
   * 页面的初始数据
   */
  data: { 
    chooseList:[
      {
        "choice":"只关注公司营收情况与财务指标",
        "id":0
      },
      {
        "choice":"兼顾公司财务指标与ESG",
        "id":1
      },
      {
        "choice":"只关注公司ESG",
        "id":2
      }],
      isChecked:0,
  },
  
userchoose(e){
  var id = e.currentTarget.id;
  console.log(id)
  this.setData({
    isChecked: id,
  })
},
  
toTestPage:function(e){
  var id = e.currentTarget.id;
  console.log(id)
  this.setData({
    isChecked: id,
  })
  if(id==0){
    wx.navigateTo({
      url: '../part3/model1/model1',
    })
  }
  if(id==1){
    wx.navigateTo({
      url: '../part3/model2/model2',
    })
  }
  if(id==2){
    wx.navigateTo({
      url: '../part3/model3/model3',
    })
  }
},
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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