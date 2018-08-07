// 用户关闭了localStorage的情况
let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

// 导出一个对象作为默认值
export default {
  city: defaultCity
}
