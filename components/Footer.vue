<template>
  <footer class="footer">
    <b-container>
      <b-row align-h="end">
        <b-col md="12" lg="8" class="d-flex align-items-center justify-content-center align-items-lg-start justify-content-lg-start">
          <div class="footer-about">
            <div class="footer-about__promcat">
              <b-link to="/">
                <Logo class="logo" />
              </b-link>
              <div class="contribute">
                <ul class="link-list">
                  <b-link tag="li" class="link" to="/about">
                    What is PromCat?<ArrowRight class="icon" />
                  </b-link>
                </ul>
              </div>
            </div>
            <div class="footer-about__social-network">
              <ul class="link-list">
                <li>
                  <b-link class="link github" target="_blank" href="https://github.com/sysdiglabs/promcat-resources">
                    <GitHub />
                    GitHub
                  </b-link>
                </li>
                <li>
                  <b-link class="link slack" target="_blank" href="https://slack.sysdig.com/">
                    <Slack />
                    Join us on Slack
                  </b-link>
                </li>
                <li>
                  <b-link class="link issue" target="_blank" href="https://github.com/sysdiglabs/promcat-resources/issues">
                    <Issue />
                    File an issue
                  </b-link>
                </li>
              </ul>
            </div>
            <p class="footer-about__copyright">
              © Copyright {{ (new Date()).getFullYear() }} Sysdig, Inc. All Rights Reserved.
            </p>
          </div>
        </b-col>
        <b-col md="12" lg="4" class="d-flex align-items-center justify-content-center align-items-lg-end justify-content-lg-end">
          <div class="sponsor text-uppercase">
            <span class="sponsored-by">A project by</span>
            <b-link href="https://sysdig.com/" target="_blank">
              <span class="sr-only">Sysdig</span>
              <SysdigLogo class="sysdig-logo" />
            </b-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import Logo from '~/assets/images/logo-grey.svg?inline'
import SysdigLogo from '~/assets/images/sysdig-logo.svg?inline'
import ArrowRight from '~/assets/icons/arrow-right.svg?inline'
import GitHub from '~/assets/icons/github.svg?inline'
import Slack from '~/assets/icons/slack.svg?inline'
import Issue from '~/assets/icons/issue.svg?inline'

export default {
  components: {
    Logo,
    SysdigLogo,
    ArrowRight,
    GitHub,
    Slack,
    Issue
  }
}
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  background-color: $secondary-background;
  color: gray("600");
  text-align: left;
  padding-top: 2.75rem;
  padding-bottom: 2.75rem;

  .link {
    .icon {
      margin-left: 0.3rem;
      height: 20px;
      width: 20px;
      g {
        fill: $footer-color;
      }
    }
  }

  .sponsor {
    font-size: 10px;
    line-height: 24px;

    @include media-breakpoint-down(md) {
      margin-top: 5rem;
    }

    .sponsored-by {
      vertical-align: bottom;
    }

    .sysdig-logo {
      width: 208px;
      color: $white;
    }
  }

  .link-list {
    list-style: none;
    padding: 0;
    li {
      display: inline-block;
      margin-right: 3.25rem;

      &:last-child {
        margin-right: 0;
      }

      @include media-breakpoint-down(md) {
        margin-bottom: 0.5rem;
        display: block;
      }
    }

    .link {
      color: $footer-color;
    }
  }

  .footer-about {
    &__promcat {
      .logo {
        margin-bottom: 2rem;
      }
      .contribute {
        margin-bottom: 2rem;
      }
    }

    &__social-network {
      margin-bottom: 2rem;
    }

    &__copyright {
      margin: 0;
    }
  }
}
</style>
