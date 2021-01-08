// pages/color/color.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  countryside:function(){
    wx.navigateTo({
      url: '/pages/countryside/countryside',
    })
  },

  card:function(){
    wx.navigateTo({
      url: '/pages/card/card',
    })
  },

  zsgj:function(){
    wx.navigateToMiniProgram({
      appId: 'wxb9e506ed4f66afc4',
      path: 'pages/index/index',
      envVersion: 'release',
      success(res) {

      },
      fail: function (err) {
        console.log(err);
      }
    })
  },

  jtlh:function(){
    wx.navigateTo({
      url: '/pages/union/union',
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


// pages/search-effects/search-effects.js
// Page({

// 	/**
// 	 * 页面的初始数据
// 	 */
// 	data: {
// 		searchText:'',//文本框内容
// 		searchResultList:[],//搜索结果
//     autoFocus: true,//自动聚焦
// 		holdKeyboard: true//focus时，点击页面的时候收齐键盘 true:不收起
// 	},

// 	/**
// 	 * 生命周期函数--监听页面初次渲染完成
// 	 */
// 	onReady: function () {

// 	},
// 	//文本框输入
// 	input(e){
// 	//   console.log(e)
// 	  this.setData({
// 		searchText:e.detail.value.trim()
// 	  })
// 	  //根据名称进行搜索
// 	  this.getSearchListByName()
// 	},
// 	//根据名称进行搜索
// 	getSearchListByName(){
// 		let that = this
// 		//模拟数据请求
// 		var dataList=[
// 			{M_NAME:'小程序教程'},
// 			{M_NAME:'2020小程序大全'},
// 			{M_NAME:'微信小程序开源框架'},
// 			{M_NAME:'微信小程序组件化解决方法'},
// 			{M_NAME:'微信小程序API'},
// 			{M_NAME:'丰富的微信小程序组件'},
// 			{M_NAME:'第三方微信小程序组件'},
// 			{M_NAME:'自定义小程序UI组件'},
// 			{M_NAME:'小程序可滑动标签的使用'}
// 		]
// 		var searchResultList = []
// 		for(var i=0;i<dataList.length;i++){
// 			let obj={
// 				M_NAME:dataList[i].M_NAME
// 			};
// 			//高亮字符串数组
// 			obj.searchArray=that.getHilightStrArray(dataList[i].M_NAME,this.data.searchText)
// 			searchResultList.push(obj)
// 		} 
// 		that.setData({
// 			searchResultList:searchResultList
// 		})
// 		// wx.request({
// 		// 	url: 'http://192.168.0.76:8080/open/getSearchListByName', // 仅为示例，并非真实的接口地址
// 		// 	data: {
// 		// 		m_name:this.data.searchText
// 		// 	},
// 		// 	method: 'post',
// 		// 	header: {
// 		// 		'content-type': 'application/json' // 默认值
// 		// 	},
// 		// 	success(res) {
// 		// 		console.log(res)
// 		// 		var searchText = that.data.searchText
// 		// 		if (res.data.errcode === 200) {
// 		// 			var searchResultList = []
// 		// 			//比赛 数据
// 		// 			if(res.data.matchList){
// 		// 				for(var i=0;i<res.data.matchList.rows.length;i++){
// 		// 					let obj={
// 		// 						M_NAME:res.data.matchList.rows[i].M_NAME
// 		// 					};
// 		// 					//高亮字符串数组
// 		// 					obj.searchArray=that.getHilightStrArray(res.data.matchList.rows[i].M_NAME,searchText)
// 		// 					searchResultList.push(obj)
// 		// 				} 
// 		// 			}
// 		// 			that.setData({
// 		// 			   searchResultList:searchResultList
// 		// 			})
// 		// 		}
// 		// 	},
// 		// 	fail() {
// 		// 	}
// 		// })
// 	},
// 	// 返回一个使用key切割str后的数组，key仍在数组中
// 	getHilightStrArray(str,key){
// 		return str.replace(new RegExp(`${key}`, 'g'), `%%${key}%%`).split('%%');
// 	},
// 	/**
// 	 * 页面相关事件处理函数--监听用户下拉动作
// 	 */
// 	onPullDownRefresh: function () {

// 	},

// 	/**
// 	 * 页面上拉触底事件的处理函数
// 	 */
// 	onReachBottom: function () {

// 	},
// })
