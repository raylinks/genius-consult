<template>
    <default-layout blog>
        <section>
            <div class="blog-header flex items-center justify-center flex-col">
                <div class="bg-white w-full h-20"></div>
                <h1 class="font-extrabold text-blue-primary">BLOG</h1>
            </div>
        </section>
        <section>
            <div class="w-9/12 mx-auto">
                <p class="rec mb-6">Recent Posts</p>
                <blog-recents :posts="recentPosts" />
            </div>
        </section>

        <section>
            <div class="mt-24 w-10/12 mx-auto">
                <div class="">
                    <p class="rec mb-2">Older Posts</p>
                    <hr class="border-t divider" />
                </div>
                <template v-if="olderPosts.length">
                    <div class="grid grid-cols-3 gap-10 mt-10">
                        <router-link
                            :to="`/blog/${post.id}`"
                            class="col-span-1"
                            v-for="post in olderPosts"
                            :key="post.id"
                        >
                            <div class="mb-5 rounded-lg img"></div>
                            <div>
                                <h2 class="blog-title text-dark mb-3">{{ post.title }}</h2>
                                <div class="opacity-75 blog-info w-11/12" v-html="post.body"></div>
                            </div>
                        </router-link>
                    </div>

                    <!-- <div class="flex items-cennter justify-center mt-16">
                        <div class="flex items-center mr-4">
                            <img src="@/assets/svg/arrow.svg" alt="" class="mr-2" />
                            <p>Prev</p>
                        </div>
                        <div class="text-blue font-bold mr-4">
                            1
                        </div>
                        <div class="flex items-center mr-">
                            <p>Next</p>
                            <img src="@/assets/svg/arrow.svg" alt="" class="ml-2 transform rotate-180" />
                        </div>
                    </div> -->
                </template>
                <template v-else>
                    <div class="w-full flex items-center justify-center h-64">
                        <p>No Older Posts for now</p>
                    </div>
                </template>
            </div>
        </section>
    </default-layout>
</template>

<script>
import BlogRecents from '@/components/BlogRecents'
import { getAllPostsUsers } from '@/services/blog'
export default {
    components: {
        BlogRecents,
    },
    data() {
        return {
            posts: [],
        }
    },
    mounted() {
        getAllPostsUsers().then((data) => {
            this.posts = data.data.message
        })
    },

    computed: {
        recentPosts: function() {
            const recents = this.posts.slice().splice(0, 3)
            return recents
        },
        olderPosts: function() {
            const posts = this.posts.length > 3 ? this.posts.slice().splice(3, this.posts.length) : []
            return posts
        },
    },
}
</script>

<style lang="scss" scoped>
.blog-header {
    height: 50vh;

    h1 {
        font-size: 96px;
        letter-spacing: 0.03em;
    }
}

.rec {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.03em;
    color: #3f3d56;
}

.img {
    height: 260px;
    background-image: url('https://images.unsplash.com/photo-1589293742475-8d6640104d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.2);
}

.blog-title {
    font-weight: 600;
    font-size: 24px !important;
    letter-spacing: 0.03em;
}

.blog-info {
    font-size: 13px;
    letter-spacing: 0.03em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.divider {
    opacity: 0.1;
}
</style>
