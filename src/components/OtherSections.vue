<template>
  <div class="box">
    <div class="other_top">
      Add new section
    </div>
    <div class="under">
      <b-row class="sections_wrapper">
        <b-col
          lg="3"
          sm="4"
          cols="6"
          class="mb-4"
          v-for="(section, i) in sections"
          :key="section.text"
        >
          <div
            class="section_card"
            @mouseover="hint = i"
            @click="$emit('addSection', section.text)"
          >
            <div>
              <img
                :src="require('@/assets/svg/' + section.icon)"
                width="40px"
                height="40px"
              />
            </div>
            <div class="text">
              <p>{{ section.text }}</p>
            </div>
          </div>
        </b-col>
      </b-row>

      <div class="hints">
        <div class="img">
          <img
            :src="require('@/assets/svg/' + sections[hint].icon)"
            width="80px"
            height="80px"
          />
        </div>

        <div class="info">
          <h4>{{ sections[hint].text }}</h4>
          <p>{{ sections[hint].desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */
export default {
  data() {
    return {
      sections: [
        {
          text: 'Experience',
          icon: 'brief-case.svg',
          desc:
            'Describe your previous achievements and tasks you excelled at. Don’t forget to explain how they were important.'
        },
        {
          text: 'Education',
          icon: 'grad-hat.svg',
          desc:
            'Provide more information about your educational background and courses you attended.'
        },
        {
          text: 'Skills',
          icon: 'skills.svg',
          desc:
            'List all your relevant hard skills. Hard skills are the ones it took you some time and effort to develop.'
        },
        {
          text: 'Awards',
          icon: 'award.svg',
          desc:
            'Have you ever participated in a hackathon, marathon or any competition? Mention it. It’s okay to brag a little.'
        },
        {
          text: 'Certificates',
          icon: 'certificates.svg',
          desc:
            'Education doesn’t end with graduation. Show that you still keep learning to gain an edge in your field.'
        },
        {
          text: 'References',
          icon: 'references.svg',
          desc:
            'You don’t always put references on your resume but when you do, make sure to include their contact information.'
        }
      ],
      hint: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.other_top {
  background: linear-gradient(165deg, #a9a9a9, #c2c2c2);
  color: #333333;
  border: none;
  border-radius: 10px 10px 0 0;
  min-height: 50px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}

.sections_wrapper {
  width: 75%;
  padding: 40px 50px;
  display: flex;
  flex-wrap: wrap;

  .section_card {
    background-color: #eeeeee;
    border: 1px solid #c2c2c2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: rgb(77, 77, 77);
    height: 120px;
    cursor: pointer;
    transition: 500ms;

    &:hover {
      background-color: $primary;
      color: white;
      background: #4461e0 linear-gradient(345deg, #4461e0 0%, #2983d8 100%);
      border: 1px solid #241e50;
    }

    .text {
      p {
        margin: 0px;
        padding: 0px;
        margin-top: 8px !important;
        font-size: 16px;
        // color: #565656;
      }
    }
  }
}

.hints {
  padding: 40px 0px;
  width: 25%;
  .img {
    display: flex;
    justify-content: center;
  }

  .info {
    text-align: left !important;
    margin-top: 10px;
    h4 {
      font-size: 18px;
      font-weight: 600;
    }

    p {
      font-size: 15px;
    }
  }
}
</style>
