// pages/card/card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  go01czd: function () {
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        wx.openLocation({
          latitude: 26.900713, 
          longitude: 112.606681, 
          scale: 17,
          name: '公交集团有限公司充值点',
          address: '湖南省衡阳市石鼓区环城北路38号'
        })
      }
    })
  },

  go02czd: function () {
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        wx.openLocation({
          latitude:26.889153, 
          longitude:112.629437, 
          scale: 17,
          name: '衡阳火车站点',
          address: '湖南省衡阳市珠晖区东风路衡阳火车站'
        })
      }
    })
  },

  go03czd: function () {
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        wx.openLocation({
          latitude:26.895315, 
          longitude:112.708574, 
          scale: 17,
          name: '衡阳东站（高铁站）充值点',
          address: '湖南省衡阳市珠晖区高铁衡阳东站公交站台旁'
        })
      }
    })
  },

  go04czd: function () {
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        wx.openLocation({
          latitude:26.907921, 
          longitude:112.580289, 
          scale: 17,
          name: '中心汽车站充值点',
          address: '湖南省衡阳市蒸湘区船山大道88号附近中心汽车站公交站台旁（定位供参考）'
        })
      }
    })
  },

  go05czd: function () {
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        wx.openLocation({
          latitude:26.879500, 
          longitude:112.557990, 
          scale: 17,
          name: '政务中心充值点',
          address: '湖南省衡阳市蒸湘区华新开发区西二环13号政务中心二楼C区'
        })
      }
    })
  },

  go06czd: function () {
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        wx.openLocation({
          latitude:26.896578, 
          longitude:112.614206, 
          scale: 17,
          name: '五福庵巷口充值点',
          address: '湖南省衡阳市雁峰区南方大厦对面五福庵巷口'
        })
      }
    })
  },

  go07czd: function () {
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        wx.openLocation({
          latitude:26.903905, 
          longitude:112.600784, 
          scale: 17,
          name: '船山路步步高充值点',
          address: '湖南省衡阳市石鼓区蒸湘北路与船山大道交口东北方向(晶珠广场旁)'
        })
      }
    })
  },

  go08czd: function () {
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        wx.openLocation({
          latitude:26.893859, 
          longitude:112.597683, 
          scale: 17,
          name: '步行街点（石化广场）',
          address: '原汽车西站'
        })
      }
    })
  },

  go09czd: function () {
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        wx.openLocation({
          latitude:26.892038, 
          longitude:112.567436, 
          scale: 17,
          name: '华新步步高充值点',
          address: '湖南省衡阳市蒸湘区解放大道21号1楼'
        })
      }
    })
  },

  go11czd: function () {
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        wx.openLocation({
          latitude:26.829200, 
          longitude:112.648841, 
          scale: 17,
          name: '白沙洲充值点',
          address: '湖南省衡阳市雁峰区白沙大道'
        })
      }
    })
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