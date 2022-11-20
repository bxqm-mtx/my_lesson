// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    title: '凯迪拉克',
    car: 'https://p3.dcarimg.com/img/motor-img/fb6e0819cefb4fd880b49dced20409d3~2508x0.jpg'
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile){
      setTimeout(()=>{
        this.setData({
          title: '奔驰',
          car:'https://p3.dcarimg.com/img/motor-img/cee92740456f2cdd81a6489b51e0b8e1~2508x0.jpg'
         })
      },3000)
      
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
