<template>
    <div class="modal-container">
        <div class="modal-backdrop" v-bind:style="modalBackdropStyle"></div>
        <div class="modal-container__panel" v-bind:style="modalContainerPanelStyle" @click="close">
            <div
                class="modal bg-white rounded-lg pb-10 pt-8 px-16"
                role="modal"
                v-bind:style="modalStyle"
                v-on:click.stop
            >
                <div class="flex items-center justify-between">
                    <h2 class="title mb-2 font-semibold text-blue-primary ">{{ data.job_title }}</h2>
                    <button
                        class="bg-blue-primary text-white rounded-full px-10 h-10"
                        @click="publish"
                        :disabled="data.status"
                    >
                        {{ data.status ? 'Published' : 'Publish' }}
                    </button>
                </div>
                <hr class="divider mb-2" />
                <section class="container grid grid-cols-3 gap-10 ">
                    <div class="col-span-1">
                        <p class="title-sm">Location:</p>
                        <p class="stuff">{{ data.location }}</p>
                    </div>
                    <div class="col-span-1">
                        <p class="title-sm">Skills:</p>
                        <p class="stuff">{{ data.skills }}</p>
                    </div>
                    <div class="col-span-1">
                        <p class="title-sm">Experience:</p>
                        <p class="stuff">{{ data.experience }}</p>
                    </div>
                    <div class="col-span-1">
                        <p class="title-sm">Requirement:</p>
                        <p class="stuff">{{ data.requirement }}</p>
                    </div>
                    <div class="col-span-2">
                        <p class="title-sm">Responsibility:</p>
                        <p class="stuff">{{ data.responsibility }}</p>
                    </div>
                    <div class="col-span-1">
                        <p class="title-sm">Qualification:</p>
                        <p class="stuff">{{ data.qualification }}</p>
                    </div>
                    <div class="col-span-2 ">
                        <p class="title-sm">Description:</p>
                        <p class="stuff">{{ data.description }}</p>
                    </div>
                    <div class="col-span-1 ">
                        <p class="title-sm">Closing Date:</p>
                        <p class="stuff">{{ data.closing_date }}</p>
                    </div>
                    <div class="col-span-2 ">
                        <p class="title-sm">Scope of Work:</p>
                        <p class="stuff">{{ data.scope_of_work }}</p>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable vue/return-in-computed-property */
/* eslint-disable no-unused-vars */
import { publishJob } from '@/services/jobs'
export default {
    props: {
        isVisible: {
            type: Boolean,
            default: false,
        },
        data: {
            type: Object,
            default: () => ({}),
        },
    },
    watch: {
        isVisible() {
            if (this.isVisible) {
                document.body.style.overflowY = 'hidden'
            } else {
                document.body.style.overflowY = 'scroll'
            }
        },
    },
    computed: {
        player() {
            return this.$refs.videoPlayer.player
        },
        modalContainerPanelStyle() {
            if (this.isVisible) {
                return {
                    visibility: 'visible',
                }
            }
        },
        modalStyle() {
            if (this.isVisible) {
                return {
                    transform: 'scale(1)',
                    opacity: 1,
                    WebkitTransform: 'scale(1)',
                }
            }
        },
        modalBackdropStyle() {
            if (this.isVisible) {
                return {
                    opacity: 0.9,
                    visibility: 'visible',
                }
            }
        },
    },
    methods: {
        close() {
            this.$emit('close')
        },

        publish() {
            publishJob(this.data.id)
                .then((data) => {
                    this.$swal({
                        icon: 'success',
                        title: 'Success',
                        text: data.data.message,
                    }).then((_data) => {
                        this.$router.go()
                    })
                })
                .catch((err) => {
                    this.$swal({
                        icon: 'error',
                        title: 'Error',
                        text: err.response.message,
                    })
                })
        },
    },
}
</script>

<style lang="scss" scoped>
.modal-backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    // z-index: 9999;
    visibility: hidden;
    background: rgb(2, 16, 22);
    opacity: 0;
    will-change: opacity;
    transition: opacity 0.233s cubic-bezier(0, 0, 0.21, 1);
}
.modal-container__panel {
    position: relative;
    overflow-y: auto;
    height: 100vh;
    position: fixed;
    padding: 30px 0;
    left: 0;
    top: 0;
    // z-index: 9999;
    visibility: hidden;
    right: 0;
    width: 100%;
    background: none;
    .title {
        // color: #fff;
        font-size: 1.5rem;
    }
    .modal {
        max-width: 850px;
        margin: 0 auto;
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.09);
        transition: transform 0.3s ease-out;
        transition: -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1);
        transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1);
        transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1), -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1);
        transition: all 0.3s cubic-bezier(0, 0, 0.21, 1);
        opacity: 0;
        outline: none;
        will-change: transform;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        @media screen and (max-width: 1000px) {
            margin: 70px 20px;
        }
    }
}
.container {
    width: 100%;

    .title-sm {
        font-size: 15px !important;
        color: theme('colors.dark') !important;
    }

    .stuff {
        // letter-spacing: 0em !important;
        font-size: 18px !important;
    }
}

.divider {
    opacity: 0.1;
}
</style>
