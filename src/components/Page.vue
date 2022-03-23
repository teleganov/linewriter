<template>
  <div id="pageContainer">
    <div class="guide">
      <div class="keydef">
        <div class="keydef-line">
          <div class="key">&#8677;</div>
          <div class="desc">Continue to next item</div>
        </div>
        <div class="keydef-line">
          <div class="key">&#8679;</div>
          <i class="fa fa-plus" style="opacity: 0.3;font-size: 10px;margin: 0 4px;"></i>
          <div class="key">&#8677;</div>
          <div class="desc">Back to previous item</div>
        </div>
      </div>
      <div class="keydef">
        <div class="keydef-line">
          <div class="key">&crarr;</div>
          <div class="desc">Create a new line</div>
        </div>
      </div>

      <p>
        Use arrow keys to navigate up/down lines
      </p>

      <p>
        Delete a line item by editing it and clearing it out with Backspace
      </p>

    </div>

    <div class="content">
      <div class="lines">
        <LineLine v-for="lineUid in order"
                  :key="lineUid"
                  :line-obj="lines[lineUid]">
        </LineLine>
      </div>
      <div class="preview">
        <div v-for="line in preview"
             :key="line.uid"
             class="preview-line">
          {{line.value}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineLine, { LineEntity } from './LineLine';
import { ItemEntity } from './Item';
import { store } from '../store.js';

store.appendLineAfter(new LineEntity().addItem(new ItemEntity('Welcome to Linewriter')));
store.appendLineAfter(new LineEntity().addItem(new ItemEntity('Hover over an item to edit it')));
store.appendLineAfter(new LineEntity().addItem(new ItemEntity('')));
store.appendLineAfter(new LineEntity().addItem(new ItemEntity('Click an item to favorite it'))
                                      .addItem(new ItemEntity('Choose me')));

export default {
  name: 'Page',
  components: {
    LineLine
  },
  computed: {
    lines() {
      return store.state.lines;
    },
    order() {
      return store.state.order;
    },
    preview() {
      return store.getPreview();
    }
  }
}
</script>

<style scoped>
#pageContainer {
  flex: 1 1 auto;
  display: flex;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  min-height: 0;
  overflow: hidden;
}
.guide {
  background: #f5f5f5;
  color: #3b3b3b;
  padding: 12px;
  flex: 0 0 auto;
  width: 168px;
  display: flex;
  font-size: 12px;
  flex-direction: column;
  height: 100%;
}
.keydef {

}
.keydef-line {
  display: flex;
  height: 22px;
  align-items: center;
}
.key {
  flex: 0 0 auto;
  padding: 2px 3px;
  border-radius: 4px;
  background: white;
  box-shadow: 0 1px 4px -3px;
  line-height: 1;
}
.desc {
  flex: 0 0 auto;
  margin-left: 6px;
}


.content {
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  display: flex;
  height: 100%;
  overflow-y: auto;
}
.lines {
  padding-top: 12px;
  flex: 1 1 auto;
  font-family: 'Source Serif Pro', sans-serif;
  height: auto;
}
.preview {
  flex: 0 0 auto;
  font-family: 'Source Serif Pro', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 20%;
  padding-right: 12px;
  height: auto;
}
.preview-line {
  line-height: 1.3;
  min-height: 1em;
}
</style>
