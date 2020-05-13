<template>
    <default-layout blog>
        <div class="h-32 w-full"></div>
        <section>
            <form class="w-8/12 mx-auto" @submit.prevent="submitPost">
                <input type="text" placeholder="Title" class="title w-full mb-4" v-model="title" required />
                <!-- <input type="file" name="" id="" placeholder="upload cover photo" /> -->
                <ckeditor
                    :editor="editor"
                    v-model="editorData"
                    :config="editorConfig"
                    @input="storeInLocalStorage"
                    class="w-full"
                ></ckeditor>

                <div class="mt-20 flex justify-center">
                    <button
                        type="submit"
                        :disabled="loading"
                        class="hover:bg-blue-primary text-blue-primary border border-blue-primary duration-500 py-2 px-16 hover:text-white rounded-full flex items-center justify-center"
                    >
                        Submit Post
                        <img src="@/assets/svg/load.svg" class="ml-2" v-if="loading" />
                    </button>
                </div>
            </form>
        </section>
    </default-layout>
</template>

<script>
/* eslint-disable no-unused-vars */
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { submitPost } from '@/services/blog'
export default {
    data() {
        return {
            loading: false,
            title: '',
            editor: ClassicEditor,
            editorData: '<p class="placeholder">Body.</p>',
            editorConfig: {
                // The configuration of the editor.
            },
            timer: '',
        }
    },

    methods: {
        storeInLocalStorage(e) {
            if (this.timer) clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                localStorage.setItem('new-blog', this.editorData)
            }, 3000)
        },

        submitPost() {
            this.loading = true
            submitPost({ title: this.title, body: this.editorData }).then((data) => {
                this.loading = false
                this.$swal({
                    icon: 'success',
                    title: 'Success',
                    text: 'Blog was submitted successfully',
                })
                    .then((data) => {
                        this.$router.push('/admin/blog')
                    })
                    .catch((err) => {
                        this.loading = false
                        this.$swal({
                            type: 'error',
                            title: 'Error',
                            text: err.response.data.message,
                        })
                    })
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.title {
    border: 0px !important;
    outline: none !important;
    font-size: 42px;

    &::placeholder {
        opacity: 0.7;
    }
}

.placeholder {
    opacity: 0.7;
}
</style>
