// pages/test/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
			id: 1,
			latitude: 26.892574,
			longitude: 112.549540,//po1
			width: 16,
      height: 20,
      display:'ALWAYS',
      title:"起终点站：华新汽车站",
			iconPath: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/car.png',
    },
    {
			id: 2,
			latitude: 26.893014,
			longitude: 112.554658,//po1
			width: 16,
      height: 20,
      display:'ALWAYS',
      title:"连卡福广场（生态公园）",
			iconPath: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/car.png',
    }],
    polyline: [{
      points: [
      {'latitude': 26.892574,'longitude': 112.549540},
      {'latitude':26.893004,'longitude':112.549514},
      {'latitude': 26.893014,'longitude': 112.554658},
      {'latitude': 26.893009,'longitude': 112.560623},
      {'latitude':26.892952,'longitude': 112.566084},
      {'latitude':26.892918,'longitude':112.568482},
      {'latitude':26.896028,'longitude':112.568450},
      {'latitude':26.897492,'longitude':112.568402},
      {'latitude':26.897516,'longitude':112.571238},
      {'latitude':26.897425,'longitude':112.573391},
      {'latitude':26.896712,'longitude':112.573380},
      {'latitude':26.894013,'longitude':112.573428},
      {'latitude':26.892890,'longitude':112.573471},
      {'latitude':26.892827,'longitude':112.575327},
      {'latitude':26.892813,'longitude':112.578127},
      {'latitude':26.892670,'longitude':112.578444},
      {'latitude':26.892894,'longitude':112.578793},
      {'latitude':26.892847,'longitude':112.582054}
    ],
			color: '#3875FF',
			width: 6
		}],

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