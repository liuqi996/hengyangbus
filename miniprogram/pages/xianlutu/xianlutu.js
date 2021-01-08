// pages/tourdetail/tourdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [
    ],
    fileIds:[ ],
    currentId: null
  },
  Img(e) {
    console.log(e)
    let current = e.currentTarget.dataset.src
    console.log(current)
    wx.previewImage({
      current: current,
      urls: [current]
    })
  },
  handleClick (e) {
    this.setData({
      currentId: e.currentTarget.dataset.id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let line = options.line;
      if(line){
        this.setData({
          line
        })
      };
      wx.showLoading({
        title: '努力查找中...',
        mask: true,
      })
      setTimeout(function(){
        wx.hideLoading()
      },100)
      this.setData({'lists':[]})
         var that = this
         let key = that.data.line;
         console.log("查询的内容", key)
         const db = wx.cloud.database();
         const _ = db.command
         db.collection('bus-line').where(_.or([{
           line: db.RegExp({
             regexp: '.*' + key,
             options: 'i',
           })
         },
         ])).get({
           success: res => {
             console.log(res)
            //  for(a = 0;a < res.data.length;a++){
            //   //  res.data[a].get_update=res.data[a].get_update.toLocaleString()
            //   get_update:res.data[a].get_update.toLocaleString()
            //  }
             that.setData({
               lists: res.data,
               //get_update:res.data
              //  get_update:res.data[0].get_update.toLocaleString()
             })
           },
           fail: err => {
             console.log(err)
           }
         })
  },

  goto: function(e){
    let zhandian = e.currentTarget.dataset.zhandian;
    wx.navigateTo({
      url: '../tongzhan/tongzhan?zhandian='+ zhandian
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
    wx.setNavigationBarTitle({
      title:this.data.line
    })
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