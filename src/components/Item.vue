<template>
  <div class="item" v-on:click="makeFavorite($event)" :class="{'favorited': isFavorite}">
    <input class="item-input"
           type="text"
           v-if="isFocused"
           v-model="itemObj.value"
           placeholder="-"
           :ref="'itemInput'"
           v-on:click="$event.stopPropagation()"
           @focusout="defocus()"
           @keydown="keydown($event)"/>
    <div class="item-view"
         v-if="!isFocused">
      {{itemObj.value || '---'}}
    </div>
    <div class="item-edit" v-on:click="selectItem($event)">
      <i class="fa fa-pencil"></i>
    </div>
  </div>
</template>

<script>
import {v4 as UUIDv4} from "uuid";
import { store } from '../store.js';
import {LineEntity} from "@/components/LineLine";

export class ItemEntity {
  constructor(value, lineUid) {
    this.uid = UUIDv4();
    this.value = value;
    this.lineUid = lineUid;
  }
}

const ESC_KEY = 27;
const ENTER_KEY = 13;
const TAB_KEY = 9;
const UP_KEY = 38;
const DOWN_KEY = 40;
const DELETE_KEY = 46;
const BACKSPACE_KEY = 8;

export default {
  name: 'Item',
  props: {
    itemObj: Object,
    isFavorite: Boolean
  },
  computed: {
    isFocused() {
      const isFocused = store.getState().focusedItemUid === this.itemObj.uid;
      if (isFocused) {
        this.$nextTick(() => {
          this.$refs.itemInput.focus();
        });
      }
      return isFocused;
    }
  },
  methods: {
    keydown(event) {
      const lineUid = this.itemObj.lineUid;
      const { keyCode, shiftKey } = event;

      if (keyCode === TAB_KEY) {
        event.preventDefault();
      }
      // event.stopPropagation();

      let line = store.getLineByUid(this.itemObj.lineUid);
      switch (keyCode) {
        case ESC_KEY:
          return store.deselectAll();
        case TAB_KEY:
          if (!this.itemObj.value) {
            // no value on tab, so delete empty entry
            return store.removeItemByLineAndUid(lineUid, this.itemObj.uid);
          }
          return store.selectNeighboringItemInLine(lineUid, this.itemObj, shiftKey, true);
        case UP_KEY:
          return store.selectPreviousLine(line);
        case DOWN_KEY:
          return store.selectNextLine(line);
        case DELETE_KEY:
          if (!this.itemObj.value) {
            event.preventDefault();
            store.selectNeighboringItemInLine(lineUid, this.itemObj, false, false);
            store.removeItemByLineAndUid(lineUid, this.itemObj.uid);
            line = store.getLineByUid(this.itemObj.lineUid); // update line ref

            if (line.items.length === 0) {
              if (store.getIndex(line) + 1 < store.size()) {
                store.selectNextLine(line);
                store.removeLineByUid(lineUid);
              }
            }
          }
          return;
        case BACKSPACE_KEY:
          if (!this.itemObj.value) {
            event.preventDefault();
            store.selectNeighboringItemInLine(lineUid, this.itemObj, true, false);
            store.removeItemByLineAndUid(lineUid, this.itemObj.uid);
            line = store.getLineByUid(this.itemObj.lineUid); // update line ref

            if (line.items.length === 0) {
              if (store.getIndex(line) - 1 >= 0) {
                // focus the above line
                store.selectPreviousLine(line);
                store.removeLineByUid(lineUid);
              }
            }
          }
          return;
        case ENTER_KEY:
          // eslint-disable-next-line no-case-declarations
          const newLine = new LineEntity();
          newLine.addItem(new ItemEntity(''));
          store.appendLineAfter(newLine, line);
          store.selectLine(newLine);
          return;
        default:
          return;
      }
    },
    selectItem($event) {
      $event.stopPropagation();
      store.setFocusedItemUid(this.itemObj.uid);
      store.setFocusedLineUid(this.itemObj.lineUid);
    },
    makeFavorite($event) {
      $event.stopPropagation();
      store.setFavoriteItemForLine(this.itemObj.lineUid, this.itemObj.uid);
    },
    defocus() {
      if (store.isItemFocused(this.itemObj.uid)) {
        store.setFocusedItemUid(null);
        store.setFocusedLineUid(null);
      }
    }
  }
};
</script>

<style scoped>
.item {
  padding: 4px 8px;
  background: rgba(0,0,0,0);
  margin: 0 4px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 8px;
}
.item-view {
  color: #666666;
  min-height: 1em;
}

.item:hover {
  background: #f5f5f5;
  padding-right: 24px;
}
.item:hover .item-edit {
  display: flex;
}
.item.favorited {
  border-color: #dc2565;
  color: #dc2565;
  background-color: #ffeff4;
}
.item.favorited .item-edit {
  color: #e1bfca;
}
.item.favorited .item-edit:hover {
  color: #dc2565;
}
.item.favorited .item-view {
  color: #dc2565;
}
.item-input {
  border: none;
}
.item-input:focus {
  border: none;
}

.item-edit {
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 24px;
  color: rgba(0,0,0,0.1);
  font-size: 12px;
  transition: all 0.2s ease;
}
.item-edit:hover {
  color: #dc2565;
}
</style>
