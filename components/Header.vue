<template>
  <header class="header" :class="[{ hero, 'py-3': !hero, 'mb-5': !hero }]">
    <b-container v-if="hero" tag="section" class="hero">
      <b-row class="heroContent text-center" align-v="center" align-h="center">
        <b-col lg="5">
          <img class="logo" src="~assets/images/logo.svg" alt="Promcat logo">
          <h1 class="title">
            A resource catalog for enterprise-class Prometheus monitoring
          </h1>
          <div class="sponsor text-uppercase">
            <div>A project by</div>
            <b-link href="https://sysdig.com/" target="_blank">
              <span class="sr-only">Sysdig</span>
              <SysdigLogo class="sysdig-logo" />
            </b-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-navbar v-else type="dark" class="navbar transparent">
      <b-container>
        <b-row class="justify-content-between w-100">
          <b-col cols="auto" class="align-self-center">
            <b-navbar-brand to="/">
              <img class="logo" src="~assets/images/logo.svg" alt="Promcat logo">
            </b-navbar-brand>
          </b-col>
          <b-col cols="12" lg="5">
            <Search />
          </b-col>
          <b-col cols="auto">
            <div class="sponsor text-uppercase">
              <div>A project by</div>
              <b-link href="https://sysdig.com/" target="_blank">
                <span class="sr-only">Sysdig</span>
                <SysdigLogo class="sysdig-logo" />
              </b-link>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
import Search from '@/components/Search'
import SysdigLogo from '~/assets/images/sysdig-logo.svg?inline'

export default {
  components: {
    Search,
    SysdigLogo
  },
  props: {
    hero: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  color: $black;
  position: relative;
  &.hero {
    @include media-breakpoint-up(xl) {
      background-image: url(~assets/images/lines-left.svg), url(~assets/images/lines-right.svg);
      background-position: 0 top, 100% top;
      background-repeat: no-repeat, no-repeat;
      background-size: contain, contain;
    }
  }
  &:not(.hero) {
    background-color: $secondary-background;
    &::after {
      content: " ";
      position: absolute;
      bottom: -24px;
      background: url(~assets/images/lines-head-int.svg) no-repeat;
      height: 68px;
      width: 100%;
      z-index: 1;
      @include media-breakpoint-down(lg) {
        content: none;
      }
    }
  }
  .navbar {
    .container {
      padding-left: 15px;
      padding-right: 15px;
    }
    .logo {
      height: auto;
      max-width: 250px;
      width: 100%;
    }
    .contribute {
      background-color: $white;
      color: $primary;
      &:hover {
        background-color: $primary;
        color: $white;
      }
      padding: 0.6rem 2.6875rem;
      text-transform: uppercase;
    }

    .sponsor {
      font-size: 10px;
      line-height: 24px;
      letter-spacing: 0.83px;
      color: $black;
      text-align: center;
      .sysdig-logo {
        width: 120px;
        height: 44px;
        color: $white;
      }
    }
  }
  .hero {
    .logo {
      height: 40px;
      max-width: 400px;
      width: 100%;
      margin-bottom: 1rem;
    }

    .heroContent {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
    .brand {
      text-transform: uppercase;
      font-size: 40px;
      letter-spacing: 12px;
      line-height: 40px;
      font-weight: 800;
      margin-bottom: 10px;
    }
    .title {
      font-size: 22px;
      line-height: 28px;
    }
    .sponsor {
      font-size: 13px;
      line-height: 24px;
    }
    .sysdig-logo {
      width: 120px;
      height: 44px;
      color: $white;
    }
  }
}
.transparent {
  background-color: transparent;
}
</style>
