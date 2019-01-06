import { VNode } from 'vue';
import { Component, Vue } from 'vue-property-decorator';

const vNodeCache: { [key: string]: VNode } = {};

@Component
export default class KeepAliveGlobal extends Vue {
  name = 'keep-alive';
  abstract = true;

  render() {
    const slot = this.$slots.default;
    if (!slot) {
      console.log('slot is undefined');
      return slot;
    }

    const vnode = slot[0];
    const key = vnode.key;
    if (!key) {
      return vnode || (slot && slot[0]);
    }
    if (vNodeCache[key]) {
      vnode.componentInstance = vNodeCache[key].componentInstance;
    } else {
      vNodeCache[key] = vnode;
    }
    if (vnode.data) {
      vnode.data.keepAlive = true;
    }

    return vnode || (slot && slot[0]);
  }
}
