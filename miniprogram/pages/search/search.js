// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  //键盘输入时实时调用搜索方法
  input(e){
    console.log(e)
    this.search(e.detail.value)
  },
  //点击完成按钮时触发
  confirm(e){
    console.log('点击成功',e.detail.value)
    this.search(e.detail.value)
    const id = JSON.stringify(e.detail.value);
    wx.navigateTo({
      url: '../com/com?id='+id,
    })
  },
  search(key){
    var that=this;
    //从本地缓存中异步获取指定 key 的内容
    var list=wx.getStorage({
      key: 'list',
      //从Storage中取出存储的数据
      success: function(res) {
        // console.log(res)
        if(key==''){   //用户没有输入时全部显示
          that.setData({
            list:res.data
          })
          return;
        }
        var arr=[];     //临时数组，用于存放匹配到的数组
        for(let i in res.data){
          res.data[i].show=false;  //所有数据隐藏
          if (res.data[i].search.indexOf(key)>=0){
            res.data[i].show = true;  //让匹配到的数据显示
            arr.push(res.data[i])
          }
        }
        if(arr.length==0){
          that.setData({
            list:[{show:true,name:'没有相关数据！'}]
          })
        }else{
          that.setData({
            list: arr
          })
        }
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list=[
      {name: "西安市第一人民医院", show: true, search: "西安市第一人民医院"},
      {name: "西安市第二人民医院", show: true, search: "西安市第二人民医院" },
      {name: "兰州市第一人民医院", show: true, search: "兰州市第一人民医院" },
      {name: "兰州市第二人民医院", show: true, search: "兰州市第二人民医院" },
      {name: "兰州市第三人民医院", show: true, search: "兰州市第三人民医院" }
    ]
    rank.get().then(res=>{
      console.log(res)}
    )
    wx.setStorage({
      key: 'list',
      data: list
    })
    this.setData({
      list:list
    })
  },
})
