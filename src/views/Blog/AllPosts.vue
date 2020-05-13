<template>
    <default-layout blog>
        <div class="h-32 w-full"></div>
        <div class="w-9/12 mx-auto">
            <div class="flex items-center justify-between">
                <h1>All Posts</h1>
                <router-link
                    to="/admin/blog/create"
                    class="border border-blue text-blue px-3 rounded-md plus font-semibold hover:bg-blue-deep hover:border-blue-deep hover:text-white duration-500 cursor-pointer"
                >
                    &#43;
                </router-link>
            </div>

            <div class="table-responsive mt-6">
                <table class="table w-full">
                    <tr class="">
                        <th>id</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Created at</th>
                    </tr>
                    <tr
                        class="cursor-pointer hover:bg-light-gray hover:text-white duration-500"
                        v-for="post in info"
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
        </div>
    </default-layout>
</template>

<script>
import { getAllPostsAdmin } from '@/services/blog'
export default {
    data() {
        return {
            info: [],
        }
    },
    mounted() {
        getAllPostsAdmin().then((data) => {
            this.info = data.data.message
        })
    },

    filters: {
        formatDate: (date) => {
            const newDate = new Date(date)
            return newDate
                .toString()
                .split(' ')
                .splice(0, 4)
                .join(' ')
        },
    },
}
</script>

<style lang="scss">
h1 {
    font-size: 46px;
    color: theme('colors.dark');
    font-weight: bold;
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
