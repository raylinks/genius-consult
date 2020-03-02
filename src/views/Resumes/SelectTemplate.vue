<template>
  <div class="selectTemplate">
    <h3>Please select a template</h3>
    <div class="pa-select" v-click-outside="close">
      <select
        hidden
        v-model="selectedValue"
        :name="selectName"
        :required="required"
      >
        <option
          v-for="(option, index) in options"
          :key="`option-${index}`"
          :value="optionKey ? option[optionKey] : option"
          >{{ customLabel ? option[customLabel] : option }}</option
        >
      </select>

      <!-- <slot name="option">
      <div class="hello">dummy</div>
    </slot> -->

      <div class="pa-select__container" :class="{ open: isOpen }">
        <div
          class="pa-select__label flex items-center truncate"
          :class="selectClasses"
          tabindex="-1"
          @click="isOpen = !isOpen"
        >
          <slot name="option" :data="selectedOption" v-if="selectedValue">
            {{
              customLabel || optionKey
                ? selectedOption[customLabel || optionKey]
                : selectedValue
            }}
          </slot>
          <template v-else>{{ placeholder }}</template>
          <slot name="icon">
            <i class="icon-caret-down ml-auto text-xs"></i>
          </slot>
        </div>

        <div class="pa-select__options">
          <div
            class="pa-select__option"
            v-if="!required"
            @click.prevent="selectOption(null)"
          >
            Select an option
          </div>

          <div
            class="pa-select__option"
            :class="
              `${
                (selectedValue &&
                  optionKey &&
                  selectedOption[optionKey] === option[optionKey]) ||
                selectedValue === option
                  ? 'active'
                  : ''
              } ${optionClasses}`
            "
            v-for="(option, index) in options"
            :key="index"
            @click.prevent="selectOption(option)"
          >
            <slot name="option" :data="option">
              {{ customLabel ? option[customLabel] : option }}
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
/* eslint-disable space-before-function-paren */

export default {
  props: {
    options: {
      type: Array,
      required: true
    },

    optionKey: {
      type: String
    },
    customLabel: {
      type: String
    },
    placeholder: {
      type: String,
      default: 'Select an option'
    },
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    selectClasses: {
      type: String,
      default: ''
    },
    optionClasses: {
      type: String,
      default: ''
    },
    value: {
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    selectName: {
      type: String,
      default: ''
    }
  },
  directives: {
    'click-outside': {
      bind: function(el, binding, vnode) {
        // eslint-disable-next-line no-param-reassign
        el.clickOutsideEvent = function(event) {
          // here I check that click was outside the el and his childrens
          if (!(el === event.target || el.contains(event.target))) {
            // and if it did, call method provided in attribute value
            vnode.context[binding.expression](event)
          }
        }
        document.body.addEventListener('click', el.clickOutsideEvent)
      },
      unbind: function(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
      }
    }
  },
  data() {
    return {
      isOpen: false,
      selectedValue: this.value,
      selectedOption: null
    }
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option

      const value = this.optionKey ? option[this.optionKey] : option
      this.selectedValue = value
      this.$emit('input', value)

      if (this.closeOnSelect) {
        this.close()
      }
    },

    close() {
      this.isOpen = false
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
$light-blue: #479bff;

.selectTemplate {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h3 {
    color: black;
    margin: 10px 0;
  }
}

.pa-select {
  width: 100%;
}

.pa-select__container {
  min-width: 200px;
  // width: 100%;
  margin:auto;
  width: 200px;
  font-size: 16px;
  cursor: pointer;
  color: #575a65;
  transition: ease-in-out 0.2s;
  position: relative;
  padding: 0;

  [class^='icon-'],
  [class*=' icon-'] {
    font-size: 10px;
    transform: rotate(0deg);
    color: #c0ccda;
    transition: all 0.2s;
  }

  .pa-select__label {
    border-width: 1px;
    border-style: solid;
    border-radius: 25px;
    padding: 8px 15px;

    &:focus {
      outline: none;
    }
  }

  .pa-select__options {
    border: 1px solid $light-blue;
    opacity: 0;
    display: none;
    max-height: 200px;
    overflow-y: auto;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &.open {
    [class^='icon-'],
    [class*=' icon-'] {
      color: #444854;
      transform: rotate(180deg);
    }

    .pa-select__label {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-color: $light-blue;
      border-bottom: none;
    }

    .pa-select__options {
      opacity: 1;
      position: absolute;
      display: block;
      background: #fff;
      width: 100%;
      max-height: 240px;
      overflow: auto;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      z-index: 3;
      -webkit-overflow-scrolling: touch;
      height: auto;
      animation-name: fadeInDown;
      animation-duration: 0.5s;
    }
  }
}

.pa-select__option {
  padding: 10px 15px;

  &:hover,
  &.active {
    color: $light-blue;
  }
}
</style>
