<template>
    <div class="prog">
        <span class="circle" v-bind:class="{ blue: step >= 1 }"></span>
        <span class="rect" v-for="i in span" :key="i" v-bind:class="{ blue: step >= 2 }"></span>
        <span class="circle not" v-bind:class="{ blue: step >= 2 }"></span>
        <span class="rect" v-for="i in span" :key="i + 20" v-bind:class="{ blue: step >= 3 }"></span>
        <span class="circle not" v-bind:class="{ blue: step >= 3 }"></span>
    </div>
</template>

<script>
export default {
    props: ['step'],
    data() {
        return {
            span: 20,
            width: '',
        }
    },
    mounted() {
        this.width = window.screen.width
    },
    watch: {
        // eslint-disable-next-line no-unused-vars
        width: function(newWidth, OldWidth) {
            if (newWidth < 900 && newWidth > 640) {
                this.span = 14
            } else if (newWidth < 640) {
                this.span = 5
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.prog {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.circle {
    background-color: theme('colors.blue.primary');
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 5px;
}

.rect {
    border: 1.5px solid #dadada;
    background: #dadada;
    width: 15px;
    height: 1px;
    border-radius: 1px;
    margin-right: 4px;
}

.not {
    background-color: #dadada;
}

.blue {
    background: theme('colors.blue.primary') !important;
    border-color: theme('colors.blue.primary');
}
.small {
    display: none;
}
@media screen and (max-width: 500px) {
    .small {
        display: block;
    }
}
</style>
