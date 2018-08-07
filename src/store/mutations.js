export default {
  changeCity (state, city) {
    // 改变state中的city
    state.city = city
    try {
      // 改变localStorage中的city
      localStorage.city = city
    } catch (e) {}
  }
}
