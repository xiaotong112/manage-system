Page({
  data: {
    username: '',
    password: ''
  },
  onUsernameInput(e) {
    this.setData({
      username: e.detail.value
    });
  },
  onPasswordInput(e) {
    this.setData({
      password: e.detail.value
    });
  },
  onLogin() {
    const { username, password } = this.data;
    console.log('登录:', username, password);
    // 在这里处理登录逻辑
  },
  onRegister() {
    wx.navigateTo({
      url: '/pages/register/index'
    });
  }
});