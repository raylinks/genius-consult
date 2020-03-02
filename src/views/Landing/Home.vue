<template>
  <div>
    <div class="landing-home"></div>
    <div class="text">
      <div class="text-inner">
        <h1>Get hired fast with a resume that catches the eye.</h1>
        <p class="sub-text">
          Create a standout resume, cover letter and personal website in
          minutes.
        </p>
        <div class="button">
          <b-button pill variant="primary" type="submit" class="btn-genius"
            >Try it now</b-button
          >
          <p>*Join Genius Consult Now*</p>
        </div>
      </div>
    </div>

    <div class="section-know">
      <div class="intro-text">
        <h2>Everything you need to know to get hired fast. In one stop.</h2>
        <p>Choose from over 50 resume templates that recruiters love.</p>

        <ul class="tabs">
          <li class="active">Resumes</li>
          <li>Cover Letters</li>
        </ul>
      </div>

      <div class="row holders">
        <div class="col-lg-3 holder-inner">
          <div class="placeholder"></div>
        </div>

        <div class="col-lg-3 holder-inner">
          <div class="placeholder"></div>
        </div>
        <div class="col-lg-3 holder-inner">
          <div class="placeholder"></div>
        </div>
        <div class="col-lg-3 holder-inner">
          <div class="placeholder"></div>
        </div>
        <div class="col-lg-3 holder-inner">
          <div class="placeholder"></div>
        </div>
        <div class="col-lg-3 holder-inner">
          <div class="placeholder"></div>
        </div>
        <div class="col-lg-3 holder-inner">
          <div class="placeholder"></div>
        </div>
        <div class="col-lg-3 holder-inner">
          <div class="placeholder"></div>
        </div>
      </div>
      <div class="button">
        <b-button pill variant="primary" type="submit" class="btn-genius"
          >Try it now</b-button
        >
      </div>
    </div>

    <div class="info-one">
      <div class="info-one-inner">
        <div class="left">
          <div class="left-inner">
            <h2>
              A resume that gets noticed is a resume that lands interviews.
            </h2>
            <p>
              Choose from over 50 designer resume templates and create a resume
              that shows your personality. Are you a student, nurse, or an
              engineer? We have a career-specific template for everyone.
            </p>

            <a href="">Create my resume within minutes</a>
          </div>
        </div>

        <div class="right">
          <img
            src="https://d1civoyjepycei.cloudfront.net/static/img/feature_slides/slide_1.0ee68deac65f.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="info-two">
      <div class="info-two-inner">
        <div class="left">
          <img
            src="https://d1civoyjepycei.cloudfront.net/static/img/feature_slides/slide_2.cf42aa00b29a.png"
            alt=""
          />
        </div>

        <div class="right">
          <div class="right-inner">
            <h2>
              So easy to use that your resume writes itself. (No, really.)
            </h2>
            <p>
              Choose from over 20,000 pre-written phrases for more than 3,200
              job titles. Or import your LinkedIn profile and get your resume
              instantly.
            </p>

            <a href="">Watch your resume write itself</a>
          </div>
        </div>
      </div>
    </div>

    <div class="info-one">
      <div class="info-one-inner">
        <div class="left">
          <div class="left-inner">
            <h2>
              Over 100 resume examples by people who scored your dream job
              before you.
            </h2>
            <p>
              Follow in the footsteps of those who already know the way. Learn
              from real resume examples and cover letter examples, sorted by
              profession and company.
            </p>

            <a href="">Browse resume examples</a>
          </div>
        </div>

        <div class="right">
          <img
            src="https://d1civoyjepycei.cloudfront.net/static/img/feature_slides/slide_3.c8a953bbb752.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="tools">
      <h2>The only career toolbox you'll ever need</h2>

      <div class="tools-inner">
        <div class="tool">
          <img src="" alt="somethin" />
          <h4>Resume Builder</h4>
          <h6>
            Choose from 50+ customizable resume templates and have your resume
            ready in minutes.
          </h6>
        </div>

        <div class="tool">
          <img src="" alt="somethin" />
          <h4>Resume Builder</h4>
          <h6>
            Choose from 50+ customizable resume templates and have your resume
            ready in minutes.
          </h6>
        </div>

        <div class="tool">
          <img src="" alt="somethin" />
          <h4>Resume Builder</h4>
          <h6>
            Choose from 50+ customizable resume templates and have your resume
            ready in minutes.
          </h6>
        </div>

        <div class="tool">
          <img src="" alt="somethin" />
          <h4>Resume Builder</h4>
          <h6>
            Choose from 50+ customizable resume templates and have your resume
            ready in minutes.
          </h6>
        </div>
      </div>
    </div>

    <div class="final-section">
      <div>
        <h2>Are you ready to land your dream job?</h2>
        <p>
          Join over 600,000 people who landed their dream job with Genius
          Consult.
        </p>

        <b-button pill variant="primary" type="submit" class="btn-genius"
          >Try it now</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.landing-home {
  background: url('https://d1civoyjepycei.cloudfront.net/static/img/coverimages/2880/landing-page-photo-4.c0f4fa98174c.webp');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
}

.text {
  width: 55%;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: left !important;
  .text-inner {
    width: 70%;
    margin: auto;
    color: #4b4b4b;

    h1 {
      font-size: 2.2rem;
      line-height: 1.3;
      letter-spacing: 1px;
      font-weight: 800;
    }

    .sub-text {
      margin-top: 14px;
      font-size: 1.4rem;
      letter-spacing: 1px;
      line-height: 30px;
      font-weight: 400;
    }
    .button {
      margin-top: 70px;
      .btn-genius {
        padding: 16px 25px;
        font-size: 1.2rem !important;
      }

      p {
        margin-left: 30px;
        margin-top: 10px;
      }
    }
  }
}

.section-know {
  min-height: 100vh;
  background: $primary;

  .intro-text {
    color: white;
    text-align: center;
    padding-top: 70px;

    h2 {
      font-size: 2.3rem;
      font-weight: 800;
    }

    .tabs {
      display: flex;
      justify-content: center;
      margin-top: 50px;
      margin-bottom: 50px;

      li {
        padding: 8px 15px !important;
      }

      li.active {
        background: white;
        color: $primary;
      }

      li:first-child {
        border: 1px solid white;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
      }

      li:last-child {
        border: 1px solid white;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        border-left: 0px !important;
      }
    }
  }
  .holders {
    width: 95%;
    margin: auto;
    justify-content: center;
    .holder-inner {
      margin: 5px;
      max-width: 23% !important;
      margin-bottom: 30px;
    }
    .placeholder {
      background: #4b4b4b;
      height: 405px;
      width: 100%;
    }
  }
  .btn-genius {
    padding: 16px 25px;
    font-size: 1.2rem !important;
    background: transparent !important;
    border: 1px solid white;
    margin-bottom: 70px;
    margin-top: 70px;
  }
}

.info-one {
  height: 65vh;
  border-bottom: 1px solid #cfcfcf;
  .info-one-inner {
    display: flex;
    align-items: center;
    height: 100%;
    width: 90%;
    margin: auto;

    .left {
      width: 50%;
      .left-inner {
        width: 75%;
        margin: auto;
        text-align: left !important;
        h2 {
          font-size: 2rem;
          font-weight: 900;
          margin-bottom: 20px;
        }
        p {
          font-size: 1.1rem;
          margin-bottom: 50px;
        }

        a {
          font-weight: 600;
          font-size: 1.05rem;
        }
      }
    }

    .right {
      width: 50%;

      img {
        width: 70%;
      }
    }
  }
}

.info-two {
  height: 65vh;
  border-bottom: 1px solid #cfcfcf;

  .info-two-inner {
    display: flex;
    align-items: center;
    height: 100%;

    .left {
      width: 50%;
      img {
        width: 70%;
        margin-left: auto;
      }
    }

    .right {
      width: 50%;

      .right-inner {
        width: 60%;
        text-align: left;

        h2 {
          font-size: 2rem;
          font-weight: 900;
          margin-bottom: 20px;
        }
        p {
          font-size: 1.1rem;
          margin-bottom: 50px;
        }

        a {
          font-weight: 600;
          font-size: 1.05rem;
        }
      }
    }
  }
}

.tools {
  background-color: #fafafa;
  min-height: 100vh;

  h2 {
    font-weight: 900;
    padding-top: 70px;
  }

  .tools-inner {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-row-gap: 40px;

    .tool {
      width: 50%;
      margin: auto;
      h4 {
        margin-bottom: 10px;
        font-size: 1.4rem;
        font-weight: 900;
      }

      h6 {
        font-weight: 400;
        font-size: 1rem;
        line-height: 28px;
      }
    }
  }
}

.final-section {
  background: url('https://d1civoyjepycei.cloudfront.net/static/img/coverimages/1440/people.ba2e0ec63b60.webp');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding-top: 70px;

  h2 {
    font-weight: 900;
    font-size: 2rem;
  }
  p {
    font-size: 1.3rem;
  }
  .btn-genius {
    padding: 13px 25px;
    font-size: 1.2rem !important;
    background: $primary !important;
    border: 1px solid $primary;
    color: white;
  }
}
</style>
