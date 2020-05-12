<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap');
#app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.drop-down {
    border-radius: 10px;
    max-height: 200px;
    overflow-y: auto;
    background-color: white;
    box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.03);
    position: absolute;
    width: 100%;

    li {
        padding: 10px;
        transition: 500ms;
        color: black;
        font-size: 14px;
        cursor: pointer;
        &:hover {
            background-color: theme('colors.blue.light');
        }
    }
}
</style>
