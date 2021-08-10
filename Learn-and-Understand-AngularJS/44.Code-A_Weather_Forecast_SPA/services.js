// 自作のServiceを作る
// ServiceはシングルトンなのでController間で値の共有ができる
weatherApp.service('cityService', function () {
    this.city = 'Osaka';
});