const db = wx.cloud.database({ env: 'cloud1-0g5xmjwvd771e9d9'});
const _ = db.command
Page({
  /**
   * 页面的初始数据
   */
  data: {
    searchVal: "",
    //搜索过后的列表
    List:[]
  },
  input(e) {
    this.setData({
      searchVal: e.detail.value
    })
    console.log(e.detail.value)
    //键盘实时键入搜索
    this.search(e.detail.value)
  },

  //关键字模糊搜索
  search: function () {
    //重新给数组赋值为空
    this.setData({
      'List': []
    })
    // 数据库正则对象
    db.collection('hangye')
      .where(_.or([
    {//公司名称
      name: db.RegExp({
        regexp: this.data.searchVal,//做为关键字进行匹配
        options: 'i',//不区分大小写
      }),
    },
    {//代码
      code: db.RegExp({
        regexp: this.data.searchVal,//做为关键字进行匹配
        options: 'i',//不区分大小写
      }),
    },
    {//行业
      hangye: db.RegExp({
        regexp: this.data.searchVal,//做为关键字进行匹配
        options: 'i',//不区分大小写
      }),
    }
  ]))
    .get().then(res => {
      console.log(res.data)
      for (var i = 0; i < res.data.length; i++) {
        var name = "List[" + i + "].name"
        var code = "List[" + i + "].code"
        var hangye = "List[" + i + "].hangye"
        this.setData({
          [name]: res.data[i].name,
          [code]: res.data[i].code,
          [hangye]: res.data[i].hangye
        })
        console.log(this.data.List[i].name)
        console.log(this.data.List[i].code)     
        console.log(this.data.List[i].hangye)  
        wx.hideLoading();
      }
    }).catch(err => {
      console.error(err)
      wx.hideLoading();
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
})

