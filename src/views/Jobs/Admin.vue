<template>
    <default-layout>
        <div class="h-32 w-full"></div>
        <div class="w-10/12 mx-auto">
            <div class="mb-10">
                <h1 class="text-blue-primary text-center font-semibold">All posted jobs</h1>
            </div>

            <template v-if="jobs.length">
                <div class="table-responsive mt-6">
                    <table class="table w-full">
                        <tr class="">
                            <th>id</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Created at</th>
                        </tr>
                        <tr
                            class="cursor-pointer hover:bg-blue-light hover:text-blue duration-500"
                            v-for="(post, i) in jobs"
                            :key="post.id"
                            @click="step = i"
                        >
                            <td>{{ post.id }}</td>
                            <td>{{ post.job_title }}</td>
                            <td>{{ post.status ? 'Published' : 'Not Published' }}</td>
                            <td>{{ (post.created_at || '2020-04-26 19:23:40') | formatDate }}</td>
                        </tr>
                    </table>
                </div>
            </template>
            <template v-else>
                <div class="h-64 w-full flex items-center justify-center">
                    <h3 class="w-3/5 mx-auto text-center text-dark opacity-75 font-medium">
                        There are no Job posts available at this moment, Please check back later
                    </h3>
                </div>
            </template>
        </div>
        <job-modal :isVisible="step !== ''" :data="jobs[step]" @close="step = ''" />
    </default-layout>
</template>

<script>
import { getAdminJobs } from '@/services/jobs'
import { formatDate } from '@/utils/formatDate'
import JobModal from '@/components/JobModal'
export default {
    data() {
        return {
            jobs: [],
            step: '',
        }
    },
    components: {
        JobModal,
    },
    mounted() {
        getAdminJobs().then((data) => {
            this.jobs = data.data.message
        })
    },
    filters: {
        formatDate(date) {
            return formatDate(date)
        },
    },
}
</script>

<style lang="scss" scoped>
h1 {
    font-size: 40px;
}

h3 {
    font-size: 26px !important;
}

th,
td {
    font-weight: normal;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 50%;
    margin: auto;
}
tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-align: center;

    &:last-child {
        border-bottom: 0px !important;
    }
}
</style>
