<template>
    <div
        class="bg-white card py-10 relative cursor-pointer"
        @click="$emit('select', item)"
        :style="`border-color: ${active ? item.color : ''} `"
    >
        <img src="@/assets/svg/check.svg" alt="" class="absolute mr-3 mt-3 top-0 right-0" v-if="active" />
        <div class="w-4/5 mx-auto h-full">
            <div class="title">
                <p :style="`background-color: ${item.color}`">{{ item.title }}</p>
            </div>
            <div class="body mt-5 ">
                <p>{{ item.desc }}</p>
            </div>
            <div class="footer mt-8">
                <p>NGN {{ item.price }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object,
        active: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style lang="scss" scoped>
.card {
    box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    border: 1px solid transparent;
    // max-height: 320px;
    // @media (max-width)

    .title {
        display: flex;
        p {
            color: white;
            border-radius: 10px;
            height: 45px;
            display: flex;
            align-items: center;
            padding: 0px 20px;
            font-weight: 600;

            // font-size: 20px;
        }
    }

    .body {
        p {
            font-size: 18px;
            line-height: 36px;
            opacity: 0.8;
        }
    }

    .footer {
        p {
            font-size: 22px;
            color: #3f3d56;
            font-weight: 600;
        }
    }
}
</style>
