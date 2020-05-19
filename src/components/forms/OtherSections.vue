<template>
    <div class="wrapper lg:rounded-lg mt-20">
        <div class="bg-dark h-16 w-full lg:rounded-tl-lg lg:rounded-tr-lg flex items-center justify-center">
            <h2 class="font-semibold text-white">Add new section</h2>
        </div>

        <div class="grid  grid-cols-4">
            <div class="col-span-4 md:col-span-3">
                <div class="flex items-center flex-wrap mt-10 w-11/12 ml-auto">
                    <div
                        class="section_wrapper wrapper rounded-lg h-24 w-32 flex flex-col items-center justify-center mr-10 mb-10 cursor-pointer duration-500"
                        v-for="(section, i) in sections"
                        :key="section.icon"
                        @mouseover="hint = i"
                        @click="$emit('addSection', section.text)"
                    >
                        <img
                            :src="require(`@/assets/svg/${section.icon}`)"
                            :alt="section.text"
                            width="40px"
                            height="40px"
                        />
                        <p class="font-semi-bold text-dark">{{ section.text }}</p>
                    </div>
                </div>
            </div>

            <div class="col-span-4 md:col-span-1 hidden md:block">
                <div class="flex items-center flex-col mt-10 w-10/12 ml-4">
                    <div class="mb-2">
                        <img
                            :src="require(`@/assets/svg/${sections[hint].icon}`)"
                            :alt="sections[hint].text"
                            width="80px"
                            height="80px"
                        />
                    </div>
                    <div class="info">
                        <h4 class="mb-2">{{ sections[hint].text }}</h4>
                        <p>{{ sections[hint].desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sections: [
                {
                    text: 'Experience',
                    icon: 'brief-case.svg',
                    desc:
                        'Describe your previous achievements and tasks you excelled at. Don’t forget to explain how they were important.',
                },
                {
                    text: 'Education',
                    icon: 'grad-hat.svg',
                    desc: 'Provide more information about your educational background and courses you attended.',
                },
                {
                    text: 'Skills',
                    icon: 'skills.svg',
                    desc:
                        'List all your relevant hard skills. Hard skills are the ones it took you some time and effort to develop.',
                },
                {
                    text: 'Awards',
                    icon: 'award.svg',
                    desc:
                        'Have you ever participated in a hackathon, marathon or any competition? Mention it. It’s okay to brag a little.',
                },
                {
                    text: 'Certificates',
                    icon: 'certificates.svg',
                    desc:
                        'Education doesn’t end with graduation. Show that you still keep learning to gain an edge in your field.',
                },
                {
                    text: 'References',
                    icon: 'references.svg',
                    desc:
                        'You don’t always put references on your resume but when you do, make sure to include their contact information.',
                },
            ],
            hint: 0,
        }
    },
}
</script>

<style lang="scss" scoped>
.section_wrapper {
    &:hover {
        border-color: theme('colors.blue.primary') !important;
    }
}
p {
    font-size: 14px !important;
}

h2 {
    font-size: 24px !important;
}

.info {
    text-align: left !important;
    margin-top: 10px;
    h4 {
        font-size: 18px !important;
        font-weight: 600;
    }
    p {
        font-size: 15px !important;
        line-height: 24px !important;
    }
}
</style>
