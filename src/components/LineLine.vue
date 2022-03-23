<template>
  <div class="line" v-if="lineObj">
    <div class="items">
      <Item v-for="(item) in lineObj.items"
            :key="item.uid"
            :item-obj="item"
            :line-uid="lineObj.uid"
            :is-favorite="lineObj.favoriteItemUid === item.uid">
      </Item>
    </div>
    <div class="add-item" v-on:click="addItem()">
      <i class="fa fa-plus"></i>
    </div>
  </div>
</template>

<script>
import { v4 as UUIDv4 } from 'uuid';
import Item, { ItemEntity } from './Item.vue';
import { store } from '../store.js';

export class LineEntity {
  constructor() {
    this.uid = UUIDv4();
    this.items = [];
    this.favoriteItemUid = null;
  }

  addItem(item) {
    item.lineUid = this.uid;
    this.items.push(item);
    if (this.items.length === 1) {
      this.favoriteItemUid = this.items[0].uid;
    }
    return this;
  }
}

export default {
  name: 'LineLine',
  components: {
    Item
  },
  props: {
    lineObj: LineEntity
  },
  computed: {
    isFocused() {
      return store.getState().focusedLineUid === this.lineObj.uid;
    }
  },
  methods: {
    addItem() {
      const newItem = new ItemEntity('');
      this.lineObj.addItem(newItem);
      store.updateLine(this.lineObj.uid, this.lineObj)
      this.selectItem({item: newItem, lineUid: this.lineObj.uid});
    },
    selectItem({ item, lineUid }) {
      store.setFocusedItemUid(item.uid);
      store.setFocusedLineUid(lineUid);
    }
  }
};
</script>

<style scoped>
.line {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 8px;
}
.items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.add-item {
  background: #f5f5f5;
  color: #bbb;
  font-weight: bold;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 8px;
  transition: all 0.2s ease;
}
.add-item:hover {
  color: #dd2d6b;
}
</style>
