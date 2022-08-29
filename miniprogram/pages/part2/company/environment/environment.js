// pages/company/environment/environment.js
const db = wx.cloud.database({ env: 'cloud1-0g5xmjwvd771e9d9'});
const pf = db.collection('huanjingpaifang');
const xh = db.collection('ziyuanxiaohao');
const jx = db.collection('huanjingjixiao');
const tz = db.collection('huanjingtouzi');
const sf = db.collection('shifoupiluhuanjingxinxi');


Page({

    /**
     * 页面的初始数据
     */
    data: {
      //key: 0,
      is1: false,
      is2: false,
      is3: false,
      is4: false,
      is5: false,
      code:'',
      name:'',
      datalist:[]
        
    },

    click1:function(){
      this.setData({
        is1: !this.data.is1,
        is2: false,
        is3: false,
        is4: false,
        is5: false,
      })
      this.find_next_data()
      this.setData({
        index: 1,
       })
    },
    
    click2:function(){
      //this.data.key=2
      this.setData({
        is2: !this.data.is2,
        is1: false,
        is3: false,
        is4: false,
        is5: false,
      })
      this.find_next_data()
      this.setData({
        index: 2,
       })
    },

    click3:function(){
      //this.data.key=3
      this.setData({
        is3: !this.data.is3,
        is2: false,
        is1: false,
        is4: false,
        is5: false,
      })
      this.find_next_data()
      this.setData({
        index: 3,
       })
    },

    click4:function(){
      //this.data.key=4
      this.setData({
        is4: !this.data.is4,
        is2: false,
        is3: false,
        is1: false,
        is5: false,
      })
      this.find_next_data()
      this.setData({
        index: 4,
       })
    },

    click5:function(){
      //this.data.key=5
      this.setData({
        is5: !this.data.is5,
        is2: false,
        is3: false,
        is4: false,
        is1: false,
      })
      this.find_next_data()
      this.setData({
        index: 5,
       })
    },

    find_next_data:function(options){
      var code = this.data.code
      if (this.data.is1==1){
        pf.where({code:code})
        .get({
          success: res => {
            this.setData({
              datalist: res.data
            })
            console.log(this.key)
            console.log(res.data)
            console.log(datalist)
          }
        })
      }
      
      if (this.data.is2==1){
        xh.where({code:code})
        .get({
          success: res => {
            this.setData({
              datalist: res.data
            })
            console.log(res.data)
            console.log(datalist)
          }
        })
      }

      //if (this.data.key==3){
        if (this.data.is3==1){
        jx.where({code:code})
        .get({
          success: res => {
            this.setData({
              datalist: res.data
            })
            console.log(res.data)
            console.log(datalist)
          }
        })
      }

      //if (this.data.key==4){
        if (this.data.is4==1){
        tz.where({code:code})
        .get({
          success: res => {
            this.setData({
              datalist: res.data
            })
            console.log(res.data)
            console.log(datalist)
          }
        })
      }

      //if (this.data.key==5){
        if (this.data.is5==1){
        sf.where({code:code})
        .get({
          success: res => {
            this.setData({
              datalist: res.data,

            })
            console.log(this.key)
            console.log(res.data)
            console.log(datalist)
            
          }
        })
      }
      console.log(this.data.is1)
      console.log(this.data.is2)
      console.log(this.data.is3)
      console.log(this.data.is4)
      console.log(this.data.is5)
      wx.pageScrollTo({
		    scrollTop: 0
		  })
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.setData({
        code: options.code,
        name: options.name
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