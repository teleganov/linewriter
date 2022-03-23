import Vue from 'vue';
import {ItemEntity} from "@/components/Item";
import { findLast } from 'lodash/fp';

class Store {
  constructor() {
    this.state = Vue.observable({
      lines: {},
      order: [],
      focusedLineUid: null,
      focusedItemUid: null,
    });
  }

  getPreview() {
    return this.state.order.map((lineUid) => {
      const line = this.state.lines[lineUid];
      const item = findLast((item) => item.uid === line.favoriteItemUid, line.items);
      return item || { uid: `${lineUid}_empty`, value: '???', lineUid };
    });
  }

  getLineByUid(uid) {
    return this.state.lines[uid];
  }

  getLineByIndex(index) {
    const lineUid = this.state.order[index];
    return this.getLineByUid(lineUid);
  }

  getIndex(line) {
    return this.state.order.indexOf(line.uid);
  }

  size() {
    return this.state.order.length;
  }

  getState() {
    return this.state;
  }

  appendLineAfter(line, afterLine) {
    Vue.set(this.state.lines, line.uid, line);
    if (afterLine === undefined) {
      this.state.order.push(line.uid);
      Vue.set(this.state, 'order', this.state.order);
      return;
    }
    const index = this.state.order.indexOf(afterLine.uid) + 1;
    const before = this.state.order.slice(0, index);
    const after = this.state.order.slice(index);
    Vue.set(this.state, 'order', [...before, line.uid, ...after]);
  }

  removeLineByUid(uid) {
    delete this.state.lines[uid];
    Vue.set(this.state, 'lines', this.state.lines);
    Vue.set(this.state, 'order', this.state.order.filter(existingUid => existingUid !== uid));
  }

  removeItemByLineAndUid(lineUid, itemUid) {
    const updatedItems = this.state.lines[lineUid].items.filter(item => item.uid !== itemUid);
    Vue.set(this.state.lines[lineUid], 'items', updatedItems);
  }

  updateLine(uid, line) {
    Vue.set(this.state.lines, uid, line);
  }

  setFocusedLineUid(uid) {
    Vue.set(this.state, 'focusedLineUid', uid);
  }

  setFocusedItemUid(uid) {
    Vue.set(this.state, 'focusedItemUid', uid);
  }

  setFavoriteItemForLine(lineUid, itemUid) {
    Vue.set(this.state.lines[lineUid], 'favoriteItemUid', itemUid);
  }

  deselectAll() {
    this.setFocusedLineUid(null);
    this.setFocusedItemUid(null);
  }

  selectPreviousLine(line) {
    if (this.getIndex(line) - 1 >= 0) {
      const previousLine = this.getLineByIndex(this.getIndex(line) - 1);
      this.setFocusedLineUid(previousLine.uid);
      this.setFocusedItemUid(previousLine.items[previousLine.items.length - 1].uid);
    }
  }

  selectNextLine(line) {
    if (this.getIndex(line) + 1 < this.size()) {
      const nextLine = this.getLineByIndex(this.getIndex(line) + 1);
      this.setFocusedLineUid(nextLine.uid);
      this.setFocusedItemUid(nextLine.items[0].uid);
    }
  }

  selectNeighboringItemInLine(lineUid, item, backwards, createNew) {
    const currentLine = this.getLineByUid(lineUid);
    const currentItemIndex = currentLine.items.indexOf(item);
    const desiredIndex = backwards ? currentItemIndex - 1 : currentItemIndex + 1;
    if (desiredIndex < 0) {
      return;
    }

    if (currentLine.items.length === desiredIndex) {
      if (!createNew) {
        return this.deselectAll();
      }
      const newItem = new ItemEntity('');
      currentLine.addItem(newItem);
      this.setFocusedItemUid(newItem.uid);
    } else {
      this.setFocusedItemUid(currentLine.items[desiredIndex].uid);
    }
  }

  selectLine(line) {
    this.setFocusedItemUid(line.items[0].uid);
    this.setFocusedLineUid(line.uid);
  }

  isItemFocused(uid) {
    return this.state.focusedItemUid === uid;
  }
}

export const store = new Store();
