<template>
    <default-layout>
        <div class="h-40 w-full"></div>
        <section>
            <div class="w-9/12 mx-auto">
                <div class="flex items-center justify-between w-11/12 mx-auto">
                    <h1>All Job Posts</h1>
    
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
                                v-for="post in jobs"
                                :key="post.id"
                                @click="$router.push('/blog/' + post.id)"
                            >
                                <td>{{ post.id }}</td>
                                <td>{{ post.title }}</td>
                                <td>{{ post.status ? 'Published' : 'Not Published' }}</td>
                                <td>{{ (post.created_at || '2020-04-26 19:23:40') | formatDate }}</td>
                            </tr>
                        </table>
                    </div>
                </template>
                <template v-else>
                    <div class="h-64 w-full flex items-center justify-center">
                        <h3 class="w-3/5 mx-auto text-center text-dark opacity-75 font-medium">
                            Sorry, There are no Job posts available at this moment, Please check back later
                        </h3>
                    </div>
                </template>
            </div>
        </section>
    </default-layout>
</template>

<script>
import { getJobs } from '@/services/jobs'
export default {
    data() {
        return {
            jobs: [],
        }
    },
    mounted() {
        getJobs().then((data) => {
            this.jobs = data.data.message
        })
    },
}
</script>

<style lang="scss" scoped>
h1 {
    font-size: 46px;
    color: theme('colors.dark');
    font-weight: bold;
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

.plus {
    font-size: 20px;
}
</style>
