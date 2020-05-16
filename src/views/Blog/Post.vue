<template>
    <default-layout blog>
        <div class="h-24 w-full"></div>
        <div class="pl-48 opacity-25 hover:opacity-75 duration-500 cursor-pointer">
            <svg
                width="20"
                height="13"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="transform rotate-90"
                @click="$router.go(-1)"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.3602 7C6.1814 7 6.00339 6.923 5.85831 6.76798L1.15303 1.76762C0.82052 1.4146 0.775036 0.783552 1.05265 0.359521C1.32947 -0.0645092 1.82353 -0.121513 2.15682 0.231512L6.36883 4.70783L10.5738 0.392524C10.911 0.0464988 11.4051 0.114504 11.6764 0.544535C11.9477 0.974566 11.8944 1.60361 11.5572 1.95064L6.85191 6.77898C6.7084 6.92599 6.5343 7 6.3602 7Z"
                    fill="#0371C0"
                />
            </svg>
        </div>

        <div class="blog-post-title flex flex-col items-center mb-10">
            <h1 class="text-dark font-bold mb-3">{{ post.title }}</h1>
            <div class="flex items-center justify-center">
                <p class="opacity-50 mr-4">Share on:</p>
                <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + url" target="_blank">
                    <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="facebook duration-500 mr-3 cursor-pointer"
                        stroke="#9DA8B6"
                    >
                        <path
                            d="M2.78878 6.25313H3.28878V5.75313V3.93762C3.28878 2.87024 3.67319 2.02714 4.32824 1.44572C4.98931 0.858951 5.97073 0.500066 7.22454 0.5C7.22466 0.5 7.22477 0.5 7.22488 0.5L9.5 0.503158V2.5984L8.00727 2.59886C8.00722 2.59886 8.00717 2.59886 8.00712 2.59886C7.4253 2.59888 6.91957 2.68998 6.58077 3.02195C6.23409 3.36162 6.18957 3.8289 6.18957 4.2141V5.75313V6.25313H6.68957H9.38755L9.38655 8.53625H6.68957H6.18957V9.03625V15.5H3.28878V9.03625V8.53625H2.78878H0.5V6.25313H2.78878Z"
                        />
                    </svg>
                </a>
                <a :href="'https://twitter.com/intent/tweet?text=' + linkText" target="_blank">
                    <svg
                        width="20"
                        height="16"
                        viewBox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="duration-500 twitter cursor-pointer"
                        stroke="#9DA8B6"
                    >
                        <path
                            d="M5.9825 12.022C4.71876 11.9946 3.61564 11.3003 3.00472 10.2783C3.4 10.2752 3.78891 10.2277 4.15402 10.1278L4.12236 9.15568C2.7534 8.87565 1.66124 7.79826 1.36642 6.42422C1.75963 6.5493 2.17731 6.62354 2.60221 6.6316L4.30742 6.66396L2.88959 5.71603C1.94892 5.08712 1.31846 4.00048 1.31846 2.77662C1.31846 2.3825 1.38377 2.00479 1.50357 1.64964C3.56404 3.86714 6.4449 5.30098 9.66795 5.45818L10.3256 5.49025L10.1799 4.84814C10.1236 4.59991 10.0988 4.33066 10.0988 4.03815C10.0988 2.08881 11.6758 0.5 13.6332 0.5C14.6422 0.5 15.5678 0.927823 16.2177 1.61983L16.4078 1.82224L16.6801 1.76785C17.1124 1.68151 17.5334 1.56463 17.9408 1.41788C17.7017 1.68523 17.4217 1.91621 17.1098 2.10239L17.4292 3.0277C17.6924 2.99426 17.9525 2.94993 18.2091 2.89471C17.9505 3.14359 17.6741 3.3734 17.3796 3.5824L17.1558 3.74122L17.1696 4.0153C17.1779 4.18164 17.1837 4.34491 17.1837 4.512C17.1837 9.63112 13.2886 15.5 6.19323 15.5C4.70979 15.5 3.3009 15.2104 2.01472 14.6804C3.61311 14.4861 5.07963 13.8545 6.27976 12.9157L7.38351 12.0522L5.9825 12.022Z"
                        />
                    </svg>
                </a>
            </div>
        </div>
        <template v-if="post.cover_image">
            <div class="w-10/12 mx-auto flex justify-center mb-16">
                <img
                    src="https://images.unsplash.com/photo-1589241584864-8cfee870b91f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt=""
                    class="rounded-lg cover-img"
                />
            </div>
        </template>

        <div class="w-9/12 mx-auto" v-html="post.body"></div>

        <div class="mt-16 w-9/12 mx-auto">
            <div class="flex items-center mb-4">
                <div class="flex items-center mr-3">
                    <template v-if="isLoggedIn">
                        <svg
                            width="37"
                            height="33"
                            viewBox="0 0 37 33"
                            xmlns="http://www.w3.org/2000/svg"
                            :class="`like ${liked ? 'liked' : ''}`"
                            @click="likePost"
                        >
                            <path
                                d="M18.6655 7.59786L18.6655 7.5979L18.6655 7.59797L19.0532 8.19883L18.6655 7.59786ZM18.6655 7.59786L18.6653 7.59765L18.6646 7.5966L18.66 7.58945L18.6387 7.5576C18.6193 7.52881 18.5894 7.48528 18.5496 7.42901C18.4698 7.31643 18.3501 7.15308 18.1932 6.95486C17.8791 6.55781 17.4186 6.02407 16.8351 5.4789C15.6586 4.37976 14.0315 3.28012 12.1316 3.09129L12.1268 3.09082L12.1268 3.0908C7.17755 2.55103 3.46738 6.06616 3.07167 10.0264L3.07057 10.0374L3.06899 10.0484C2.78512 12.0095 3.34519 13.9485 4.28213 15.7638C5.21859 17.5782 6.50934 19.2271 7.6355 20.6006C10.7519 24.2823 15.2898 27.9982 18.2251 29.7703C21.1458 28.0976 26.1373 24.8656 29.5229 21.5951L29.5314 21.5869L29.5315 21.587C32.157 19.1686 35.1741 15.6606 35.047 11.5917C34.9209 7.55202 31.7181 3.90473 26.486 3.85831L26.4824 3.85828C24.463 3.8257 22.7205 4.74731 21.4593 5.71312C20.8322 6.19333 20.3349 6.67633 19.995 7.03874C19.8253 7.21966 19.6955 7.36976 19.6092 7.47335C19.566 7.52513 19.5337 7.56523 19.5128 7.59168L19.4899 7.62084L19.485 7.62727L19.4844 7.62801L19.4843 7.62823L19.4842 7.62836L18.6655 7.59786Z"
                            />
                        </svg>
                    </template>

                    <p class="opacity-50 ml-2">{{ post.likes_count }} Like{{ post.likes_count > 1 ? 's' : '' }}</p>
                </div>
                <div></div>
            </div>

            <hr class="divider" />
            <template v-if="isLoggedIn">
                <form class="mt-8" @submit.prevent="postComment">
                    <h5>Leave a comment</h5>
                    <textarea
                        class="rounded-lg w-1/2 mt-4 p-6 duration-500"
                        rows="7"
                        placeholder="Type your comment here"
                        v-model="comment"
                        required
                    ></textarea>
                    <div class="mt-5">
                        <button
                            class="bg-blue-primary py-2 px-16 text-white rounded-full flex items-center justify-center"
                            :disabled="submittingComment"
                            type="submit"
                        >
                            Submit <img src="@/assets/svg/load.svg" class="ml-2" v-if="submittingComment" />
                        </button>
                    </div>

                    <template>
                        <p :class="`mt-2 text-sm ${message.type === 'Success' ? 'text-success' : 'text-danger'}`">
                            {{ message.note }}
                        </p>
                    </template>
                </form>
            </template>
            <template v-else>
                <div class="h-64 w-full flex items-center justify-center flex-col">
                    <p>Login to be able to like or comment on post</p>
                    <router-link
                        to="/login"
                        class="hover:bg-blue-primary text-blue-primary border border-blue-primary duration-500 py-2 px-16 hover:text-white rounded-full flex items-center justify-center mt-5"
                    >
                        Login
                    </router-link>
                </div>
            </template>
        </div>
    </default-layout>
</template>

<script>
/* eslint-disable no-unused-vars */
import { getPost, likePost, unLikePost, submitComment } from '@/services/blog'
export default {
    data() {
        return {
            post: {},
            liked: false,
            comment: '',
            submittingComment: false,
            message: {
                type: '',
                note: '',
            },
        }
    },
    computed: {
        id: function() {
            return this.$route.params.id
        },

        isLoggedIn: function() {
            return localStorage.getItem('user') || false
        },

        linkText() {
            return encodeURI(
                `I just read ${this.post ? this.post.title : ''} on CV genius' Blog
Check it out ${this.url}`
            )
        },

        url() {
            return process.env.VUE_APP_URL + '/blog'
        },
    },

    mounted() {
        getPost(this.id).then((data) => {
            this.post = data.data.message[0]
        })
    },

    methods: {
        likePost() {
            if (!this.liked) {
                likePost(this.id)
                    .then((data) => {
                        this.liked = true
                        this.post.likes_count = this.post.likes_count += 1
                    })
                    .catch((err) => {
                        console.dir(err)
                    })
            } else {
                unLikePost(this.id, this.post.user_id).then((data) => {
                    this.liked = false
                    this.post.likes_count = this.post.likes_count -= 1
                })
            }
        },

        postComment() {
            this.submittingComment = true
            submitComment(this.comment, this.id)
                .then((data) => {
                    this.submittingComment = false
                    this.message = {
                        type: 'Success',
                        note: 'Comment submitted successfully',
                    }
                })
                .catch((err) => {
                    this.submittingComment = false
                    this.message = {
                        type: 'Error',
                        note: 'Unable to submit comment at the moment. Please try again later',
                    }
                })

            setTimeout(() => {
                this.message = {
                    type: '',
                    note: '',
                }
            }, 4500)
        },
    },
}
</script>

<style lang="scss">
h1 {
    font-size: 48px;
}

.facebook {
    &:hover {
        fill: #4064ac;
        stroke: #4064ac;
    }
}

.twitter {
    &:hover {
        fill: #00acee;
        stroke: #00acee;
    }
}

.cover-img {
    max-height: 600px;
}

p {
    font-size: 17px;
    line-height: 36px;
    letter-spacing: 0.03em;
    color: rgba(0, 0, 0, 0.8);
}

.like {
    stroke: #b5b3b3;
    fill: none;
    transition: 500ms;
    cursor: pointer;
    &:hover {
        fill: #fe3c3c;
        stroke: #fe3c3c;
    }
}

button[disabled] {
    opacity: 0.7;
}

.liked {
    fill: #fe3c3c !important;
    stroke: #fe3c3c !important;
}

.divider {
    opacity: 0.1;
}
textarea {
    border: 1px solid rgba(0, 0, 0, 0.2) !important;
    outline: none !important;

    &:focus {
        border-color: theme('colors.blue.default') !important;
    }
}

button {
    outline: none !important;
}

.text-sm {
    font-size: 14px !important;
    letter-spacing: 0em !important;
}

.text-danger {
    color: red !important;
}

.text-success {
    color: green !important;
}

h5 {
    font-weight: 600;
    font-size: 19px;
    letter-spacing: 0.03em;
    color: #3f3d56;
}
</style>
