<template>
    <div class="min-h-screen w-10/12 mx-auto mt-20">
        <p class="page-title">Select Package</p>
        <p class=" sm">Click one of these packages to proceed</p>
        <div class="grid gap-10 xl:gap-20 grid-cols-6 mt-10">
            <div class="col-span-6 md:col-span-3 xl:col-span-2" v-for="price in pricing" :key="price.color">
                <div class="mx-auto">
                    <card
                        :item="price"
                        :active="price.title === chosenPrice.title"
                        @select="(value) => (chosenPrice = value)"
                    />
                </div>
            </div>
        </div>

        <div class="mt-20 flex justify-center">
            <button
                class="border border-blue-prmary hover:bg-blue-primary hover:text-white py-3 px-24 text-blue-primary rounded-full duration-500"
                @click="proceed"
            >
                Proceed
            </button>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import { pay } from '@/services/payment'
export default {
    components: {
        Card,
    },
    data() {
        return {
            chosenPrice: {},
            pricing: [
                {
                    title: 'Basic CV',
                    desc: 'This package is specifically designed for 0-3 years work experience',
                    color: '#31ABDF',
                    price: '3,000',
                },
                {
                    title: 'Diamond CV',
                    desc: 'This package is specifically designed for 3-5 years work experience',
                    color: '#9231DF',
                    price: '5,000',
                },
                {
                    title: 'Premium CV',
                    desc: 'This package is specifically designed for 5-10 years work experience',
                    color: '#DF315B',
                    price: '7,500',
                },
                {
                    title: 'Gold CV',
                    desc: 'This package is specifically designed for above 10 years work experience',
                    color: '#31DF62',
                    price: '10,000',
                },
                {
                    title: 'Gold Plus CV',
                    desc:
                        'For CEOs, Presidents of Organization, Vice Presidents, Board members and Other Top Executive and sensitive Roles. ',
                    color: '#DF6531',
                    price: '30,000',
                },
            ],
        }
    },
    methods: {
        proceed() {
            if (this.chosenPrice && this.chosenPrice.price) {
                const amount = Number(this.chosenPrice.price.split(',').join(''))
                pay(amount)
                    .then((data) => {
                        this.$swal({
                            icon: 'success',
                            text: 'You are going to be redirected to fluterwave to complete payment',
                            // eslint-disable-next-line no-unused-vars
                        }).then((_data) => {
                            window.open(data.data, '_blank')
                        })
                    })
                    .catch((err) => {
                        this.$swal({
                            icon: 'error',
                            title: 'An Error Occured',
                            text: err.response.data.message,
                        })
                    })
            } else {
                this.$swal({
                    icon: 'warning',
                    text: 'Please select a package',
                })
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.page-title {
    color: #9f9eaa;
    font-size: 20px;
    font-weight: 600;
}
.sm {
    font-size: 16px;
    opacity: 0.8;
    letter-spacing: 0.03em;
}
</style>
