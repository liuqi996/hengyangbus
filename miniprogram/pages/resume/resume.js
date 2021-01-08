// pages/resume/resume.js
const app =getApp()
const db=wx.cloud.database();
const taskCol=db.collection('tasks');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:null,
    tasks:[],
    isShow:true,
    canIuse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    taskCol.where({
      status:0
    }).watch({
      onChange:snapshot=>{
        console.log(snapshot)
        this.setData({
          tasks:snapshot.docs
        })
      },
      onError(err){
        console.err('ERR',err)
      }
    })
    var  that=this;
    console.log(app.globalData.userInfo)
    //进入页面后---获取本地存储是否有数据授权
    if(app.globalData.userInfo){
      this.setData({
        isShow:false,
        userInfo:app.globalData.userInfo
      })
    }
    else if (this.data.canIuse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        that.setData({
          userInfo: res.userInfo,
          isShow: false,
        })
      }
    }
  },

  getUserInfo:function(e){
    console.log(e.detail)//userInfo登录人微信信息
    console.log("getUserInfo函数在调用")
    //存储全局变量
    app.globalData.userInfo = e.detail.userInfo;//存全局的账号信息
    //console.log(app.globalData.userInfo)
    // || app.globalData.userInfo.length==0
    if(app.globalData.userInfo==undefined){

    }
    else{
    this.setData({
      userInfo:e.detail.userInfo,
      isShow:false
    })
    console.log(this.data.userInfo.rawDate)
  }
  },

  playbill:function(){
    

  },

  clearstorage:async function(){
    await new Promise((resolve,reject)=>{
      wx.clearStorage({
        success: (res) => {
          wx.showLoading({
            title: '正在清除缓存…',
          })
          setTimeout(function () {
            wx.hideLoading()
          }, 1000)
          console.log("清除缓存成功！")
        },
        fail: (res) => {},
        complete: (res) => {
          console.log("不管怎么样")
        },
      })
    }).then((res)=>{
      wx.showToast({
        title: '清除成功！',
      })
      console.log("提示框")
    })
  
},

done(event){
  console.log("用户添加了新任务")
  taskCol.add({
    data:{
      title:event.detail.value,
      status:0
    }
  }).then(res=>{
    this.setData({
      value:''
    },()=>{
      wx.showToast({
        title: '添加成功',
      })
    })
  })
},
markDone(event){
  console.log(event.currentTarget.dataset.tid);
  console.log("markdone")
  taskCol.doc(event.currentTarget.dataset.tid).update({
    data:{
      status:1
    }
  }).then(res=>{
    wx.showToast({
      title: '任务处理完成',
    })
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