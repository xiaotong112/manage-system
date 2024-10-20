Page({
  data: {
    username: '',
    password: '',
    confirmPassword: ''
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
  onConfirmPasswordInput(e) {
    this.setData({
      confirmPassword: e.detail.value
    });
  },
  onRegister() {
    const { username, password, confirmPassword } = this.data;
    if (password !== confirmPassword) {
      wx.showToast({
        title: '两次输入的密码不一致',
        icon: 'none'
      });
      return;
    }
    console.log('注册:', username, password);
    // 在这里处理注册逻辑
  }
});