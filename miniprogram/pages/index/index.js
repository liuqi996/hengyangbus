// pages/index/index.js
const util = require('../../util/util.js');
const storage = require('../../util/storage.js');
const globalData = getApp().globalData;
var QQMapWX = require('../../file/qqmap-wx-jssdk.js');
var qqmapsdk;
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canGetLocation: true,
    lists: [],
    lists_nums:0,
    fu:0,
  },

  upper(e) {
    console.log(e)
  },

  lower(e) {
    let fu=this.data.fu;
    console.log(e)
    if(fu==0){
      this.more()
    }
    else{
      console.log("不可加载更多")
      wx.showToast({
        title: '没有更多匹配公交线路了哦！',
        icon:"none"
      })
    }
  },

  scroll(e) {
    console.log(e)
  },

  scrollToTop() {
  },

  tap() {
   
  },

  tapMove() {
  
  },

  sousuo:function(e){
    this.setData({
      searchvalue: e.detail.value
    })
    this.setData({
      lists_nums:0,
      fu:0,
    })
    this.search();
  },

  search: function () {
    this.setData({
      lists_nums:0,
      fu:0,
    })
    this.setData({'lists':[]})
    var that = this
    let key = that.data.searchvalue;
    if (key===undefined){
      wx.showToast({
        title: '您还未输入线路号哦！',
        icon:'none'
      })
    }else{
      console.log("查询的内容", key)
      const db = wx.cloud.database();
      const _ = db.command
      db.collection('stop').where(_.or([{
        line: db.RegExp({
          regexp: '.*' + key,
          options: 'i',
        })
      },
      {
        stop: db.RegExp({
          regexp: '.*' + key,
          options: 'i',
        })
      },
      {
        fanxiang: db.RegExp({
          regexp: '.*' + key,
          options: 'i',
        })
      },
      {
        company: db.RegExp({
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
            that.gaoliang()
          },
         fail: err => {
           console.log(err)
         }
       })}
     },
  getHilightStrArray(str,key){
      return str.replace(new RegExp(`${key}`, 'g'), `%%${key}%%`).split('%%');
    },

  line:function(e){
    let line = e.currentTarget.dataset.line;
    console.log(line)
    wx.navigateTo({
      url: '../xianlutu/xianlutu?line='+ line
    })
  },

  tongzhan: function(e){
    let zhandian = e.currentTarget.dataset.zhandian;
    wx.navigateTo({
      url: '../tongzhan/tongzhan?zhandian='+ zhandian
    })
  },

  gaoliang:function(){
    let that=this;
    var searchResultList = []
    if(that.data.lists){
      for(var i=0;i<that.data.lists.length;i++){
      	let obj={line:that.data.lists[i].line};
      	//高亮字符串数组
      	obj.searchArray=that.getHilightStrArray(that.data.lists[i].line,that.data.searchvalue)
      	searchResultList.push(obj)
      } 
    }
    that.setData({
      searchResultList:searchResultList
    })
    console.log(searchResultList)
  },

     more: function () {
      var that = this
      let key = that.data.searchvalue;
      const db = wx.cloud.database();
      const _ = db.command
      // wx.showLoading({
      //   title: '正在加载中…',
      //   duration: 300
      // })
      let x = this.data.lists_nums + 20
      console.log(x)
      let old_data = this.data.lists
      
      db.collection('stop').skip(x)
        .where(_.or([{
          line: db.RegExp({
            regexp: '.*' + key,
            options: 'i',
          })
        },
        {
          stop: db.RegExp({
            regexp: '.*' + key,
            options: 'i',
          })
        },
        {
          fanxiang: db.RegExp({
            regexp: '.*' + key,
            options: 'i',
          })
        },
        {
          company: db.RegExp({
            regexp: '.*' + key,
            options: 'i',
          })
        },
        ]))
        .get()
        .then(res => {
          if(res.data==null || res.data==0 || res.data==" "){
            console.log("为空")
            this.setData({
              fu:1
            })
            wx.showToast({
              title: '没有更多匹配公交线路了哦！',
              icon:"none"
            })
          }
          else{
          this.setData({
            lists: old_data.concat(res.data),
            lists_nums: x,
          })
          this.gaoliang()
            console.log(res.data)}
        })
        .catch(err => {
          console.error(err)
        })
      console.log('circle 下一页');
    },

  /**
   * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    this.getMyLocation()
    qqmapsdk = new QQMapWX({
      key: 'KWABZ-24IYD-C2N4H-P2566-OTK3Q-ZRBFP'
  });
  },

  searchbusstation:function(){
    let that=this;
    qqmapsdk.search({
      keyword:'公交站',
      success: function (res) {
          //console.log(res);
          let nearbusstation=res.data
          console.log("附近公交站",nearbusstation)
          var arr = nearbusstation;
          var cc=arr.slice(1,5);
          console.log("hy",cc)
          that.setData({
            nearbusstation:nearbusstation,
            cc:cc
          })
          var str0 = that.data.nearbusstation[0].address;
          var m0 = str0.split(",");
          console.log(m0)
          var str1 = that.data.nearbusstation[1].address;
          var m1 = str1.split(",");
          console.log(m1)
          var str2 = that.data.nearbusstation[2].address;
          var m2 = str2.split(",");
          console.log(m2)
          var str3 = that.data.nearbusstation[3].address;
          var m3 = str3.split(",");
          console.log(m3)
          var str4 = that.data.nearbusstation[4].address;
          var m4 = str4.split(",");
          console.log(m4)
          var str5 = that.data.nearbusstation[5].address;
          var m5 = str5.split(",");
          console.log(m5)
          var str6 = that.data.nearbusstation[6].address;
          var m6 = str6.split(",");
          console.log(m6)
          var str7 = that.data.nearbusstation[7].address;
          var m7 = str7.split(",");
          console.log(m7)
          var str8 = that.data.nearbusstation[8].address;
          var m8 = str8.split(",");
          console.log(m8)
          var str9 = that.data.nearbusstation[9].address;
          var m9 = str9.split(",");
          console.log(m9)
          that.setData({
            m0:m0,
            m1:m1,
            m2:m2,
            m3:m3,
            m4:m4,
            m5:m5,
            m6:m6,
            m7:m7,
            m8:m8,
            m9:m9
          })
          console.log(m9)
          
      },
      fail:function(res){
      },
      complete: function (res) {
      }
    })
    
  },

  getMyLocation() {
    this.setData({ myLocation: '正在定位中...' });
    wx.getLocation({
      type: 'gcj02',
      success: res => {
        const longitude = res.longitude;
        const latitude = res.latitude;
        globalData.myLocation = { longitude, latitude };
        // 获取位置描述信息
        util.getLocationDescription(longitude, latitude, (myCity, myLocation) => {
          globalData.myCity = myCity;
          this.setData({ myLocation });
        });
        // 获取周围站台列表
        util.getAroundStation(longitude, latitude, (nearestStation) => {
          this.setData({ nearestStation});
        });
        /*util.getAroundStation(longitude, latitude, (nearestStation, otherStation) => {
          this.setData({ nearestStation, otherStation });
        });*/
      },
      // 定位失败
      fail: () => {
        this.canGetLocation = false;
        /*wx.hideLoading();*/
        wx.showModal({
          title: '提示',
          content: '获取位置失败，请打开手机位置服务并允许小程序获取你的地理位置^*^',
          //showCancel: false,
          confirmText:'去授权',
          cancelText:'稍后再说',
          success(res) {
            if (res.confirm) {
              wx.openSetting({
                // withSubscriptions: true,
              })}
              else{
              }
            // res.confirm && wx.openSetting();
            // res.cancel && wx.openSetting();
          },
        });
      },
    });
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

//     var searchResultList = []
// 		//let that=this;
// 		if(res.data){
// for(var i=0;i<res.data.length;i++){
// 	let obj={
// 		line:res.data[i].line
//   };
//   console.log(obj)
// //高亮字符串数组
// 	obj.searchArray=that.getHilightStrArray(res.data[i].line,searchvalue)
// 	searchResultList.push(obj)
// 		} 
//    }
// 	this.setData({
// 		   searchResultList:searchResultList
//   })
//   console.log(searchResultList)