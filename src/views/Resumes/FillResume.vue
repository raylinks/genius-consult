<template>
  <div class="fillResume">
    <personal-questions @submitted="moveToNext"></personal-questions>
    <education-questions></education-questions>
    <skills-questions></skills-questions>
    <experience-questions></experience-questions>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */
import PersonalQuestions from '../../components/PersonalQuestions.vue'
import EducationQuestions from '../../components/EducationQuestions.vue'
import SkillsQuestions from '../../components/SkillsQuestions.vue'
import ExperienceQuestions from '../../components/ExperienceQuestions.vue'

export default {
  components: {
    'personal-questions': PersonalQuestions,
    'education-questions': EducationQuestions,
    'skills-questions': SkillsQuestions,
    'experience-questions': ExperienceQuestions
  },

  methods: {
    moveToNext() {}
  }
}
</script>
<style lang="scss">
@media screen and (max-width: 1200px) {
  .box {
    width: 95% !important;
  }
}

@media screen and (max-width: 500px) {
  .box {
    width: 100% !important;
    border-radius: 0px !important;
    .top {
      border-top-left-radius: 0px !important;
      border-top-right-radius: 0px !important;
    }
  }
  .under {
    flex-wrap: wrap;

    .picture-col {
      width: 100% !important;
    }

    .questions {
      width: 100% !important;
    }
  }
}
.fillResume {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #e5eaee;
  .box {
    // display: flex;
    width: 80%;
    margin: auto;
    background: white;
    border-radius: 10px;
    margin-top: 4rem;
    margin-bottom: 2rem !important;

    .top {
      background: linear-gradient(165deg, #395ebe, #54a1e3);
      width: 100%;
      padding: 10px 20px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      h4 {
        margin: 0 !important;
      }
      p {
        margin: 0 !important;
      }
      .bold {
        font-weight: 900;
        font-size: 20px;
      }
    }
    .picture-col {
      width: 25%;
      border-right: 1px solid #eeeeee;
      padding: 10px;

      .btn-primary-outline {
        color: $primary;
        border: 1px solid $primary;
        padding: 10px 20px;
        border-radius: 45px;
        font-size: 1.1rem;
        margin-top: 20px;
        background: white;
      }
    }

    .under {
      display: flex;
      .questions {
        padding: 20px;
        width: 80%;
        .form-group {
          text-align: left !important;
          font-size: 1rem !important;
          color: black !important;
          margin-bottom: 3px !important;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .form-control {
          display: block;
          position: relative;
          box-sizing: border-box;
          width: 100%;
          height: 38px;
          background-color: #eeeeee;
          z-index: 1;
          margin-bottom: 0px;
          padding: 0 8px;
          border: 1px solid #c2c2c2;
          border-radius: 10px;
          line-height: 35px;
          font-size: 1rem;
          box-shadow: none;
        }
      }
    }
  }
}
</style>
