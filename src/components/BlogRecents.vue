<template>
    <div class="mb-6">
        <div class="flex relative">
            <div class="w-7/12">
                <img
                    src="https://images.unsplash.com/photo-1589344960152-4ea2118b1080?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                    alt=""
                    class="rounded-lg"
                />
            </div>
            <div class="3/12"></div>

            <div class="blog-info p-12 absolute right-0 w-6/12">
                <p class="date font-semibold mb-1">{{ date }}</p>
                <h2 class="mb-4">{{ this.posts.length ? posts[step].title : '' }}</h2>
                <div class="desc w-11/12" v-html="this.posts.length ? posts[step].body : ''">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div class="mt-8">
                    <router-link
                        :to="`/blog/${this.posts.length ? posts[step].id : ''}`"
                        class="link border border-blue text-blue hover:bg-blue py-2 px-6 hover:text-white duration-500 rounded-full"
                        >Read Now</router-link
                    >
                </div>
            </div>
        </div>
        <div class="mt-32 flex items-center justify-center text-dark font-bold no">
            <div
                :class="`mr-4 ${i == step ? 'active' : ''} cursor-pointer`"
                v-for="(post, i) in posts"
                :key="post.id"
                @click="step = i"
            >
                <p class="hover:text-blue duration-700">0{{ i + 1 }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { formatDate } from '@/utils/formatDate'
export default {
    props: {
        posts: Array,
    },
    data() {
        return {
            step: 0,
            timer: '',
        }
    },
    mounted() {
        this.handleChange()
    },
    methods: {
        handleChange() {
            setInterval(() => {
                this.next()
            }, 5000)
        },

        next() {
            this.step = this.step != this.posts.length - 1 ? (this.step += 1) : 0
        },
    },
    computed: {
        date: function() {
            return formatDate(this.posts.length ? this.posts[this.step].updated_at : '00:00:00')
        },
    },
}
</script>

<style lang="scss" scoped>
.blog-info {
    background: #ffffff;
    box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    bottom: -20%;

    .date {
        font-size: 16px;
        color: #9f9eaa;
    }

    h2 {
        font-weight: 600;
        font-size: 36px !important;
        letter-spacing: 0.01em;
        color: #3f3d56;
    }

    .desc {
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 0.01em;
        color: rgba(63, 61, 86, 0.6);
    }

    .link {
        font-size: 16px;
        letter-spacing: 0.01em;
    }
}
.no {
    font-size: 22px;
    letter-spacing: 0.03em;
}

.active {
    p {
        color: theme('colors.blue.primary') !important;
    }
    text-decoration: line-through;
}

.desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
