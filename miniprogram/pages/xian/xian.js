// pages/xian/xian.js
// const util = require('../../util/util.js');
// const storage = require('../../util/storage.js');
// const globalData = getApp().globalData;
var list = require('../../utils/list.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav: 'A',
    lists: [
    ],
    name:[],
    desc:[]

  },

  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
    var listChild1 = list.List[0];
    var that = this;
    // 获取可视区高度
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          list: listChild1,
          winHeight: res.windowHeight,
        })
      }
    })
  },
  //点击左侧 tab ，右侧列表相应位置联动 置顶
  switchRightTab: function (e) {
    var id = e.target.id;
    console.log(typeof id)
    this.setData({
      // 动态把获取到的 id 传给 scrollTopId
      scrollTopId: id,
      // 左侧点击类样式
      curNav:id
    })
  },
  goto: function(e){
    let date = e.currentTarget.dataset.date;
    let line = e.currentTarget.dataset.line;
    console.log(e.currentTarget.dataset); // 打印出来试试
    wx.navigateTo({
      url: '../linedetail/linedetail?line='+line+'&date='+ date
    })/*
    wx.switchTab({
      url: '/pages/linedetail/linedetail?key1=value1&key2=value'
    })*/
  },
  
    /**
     * 生命周期函数--监听页面加载
     
    onLoad: function (options) {
      var _this = this;
      //1、引用数据库   
      const db = wx.cloud.database();
      //2、开始查询数据了  news对应的是集合的名称   
      db.collection('county').get({
        //如果查询成功的话    
        success: res => {
          console.log(res.data)
          //这一步很重要，给ne赋值，没有这一步的话，前台就不会显示值      
          this.setData({
            ne: res.data
          })
        },
        fail:err=>{
          console.log(err)
        }
      })
    },*/
  /**
   * 生命周期函数--监听页面加载
   */
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   *//*
  onReady: function () {

  },*/

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