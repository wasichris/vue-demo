import Vue from 'vue'

// 使用一個空的 Vue 實例作為中央事件總線
var bus = new Vue();

// 擴充 Vue prototype 新的 $bus 屬性，方便全域 event bus 被任何子元件使用
Object.defineProperty(Vue.prototype, '$bus', {
    get() {
        return this.$root.bus;
    }
});

export default bus;