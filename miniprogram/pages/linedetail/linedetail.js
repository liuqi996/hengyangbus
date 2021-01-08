// pages/linedetail/linedetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  Img(e) {
    console.log(e)
    let current = e.currentTarget.dataset.src
    console.log(current)
    wx.previewImage({
      current: current,
      urls: [current]
    })
  },/*
  previewImage:function(e){
    var that = this;
var id = e.currentTarget.dataset.id;
var url = e.currentTarget.dataset.fileID;
var previewImgArr = [i.fileID];
//通过循环在数据链里面找到和这个id相同的这一组数据，然后再取出这一组数据当中的图片
var data = that.data.topic_recomData;
for (var i in data) {
if (id == data[i].id) {
previewImgArr = data[i].fileID;
}
}
wx.previewImage({
current: url, // 当前显示图片的http链接
urls: previewImgArr // 需要预览的图片http链接列表
})
},*/

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let line = options.line;
      let date = options.date;
      if(line && date){
        this.setData({
          line,
          date
        })
      };


      wx: wx.showLoading({
        title: '努力查找中...',
        mask: true,
      })
      setTimeout(function(){
        wx.hideLoading()
      },350)
      this.setData({'lists':[]})
         var that = this
         let key = that.data.line;
         console.log("查询的内容", key)
         const db = wx.cloud.database();
         const _ = db.command
         db.collection('county').where(_.or([{
           line: db.RegExp({
             regexp: '.*' + key,
             options: 'i',
           })
         },
         ])).get({
           success: res => {
             console.log(res)
             that.setData({
               lists: res.data
             })
           },
           fail: err => {
             console.log(err)
           }
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