<template>
  <header class="header" :class="[{ hero, 'py-3': !hero, 'mb-5': !hero }]">
    <b-container v-if="hero" tag="section" class="hero">
      <b-row class="heroContent text-center" align-v="center" align-h="center">
        <b-col lg="5">
          <img class="logo" src="~assets/images/logo.svg" alt="Promcat logo">
          <h1 class="title">
            Discover and share Prometheus best practices and configurations
          </h1>
          <div class="sponsor text-uppercase">
            <div>A project by</div>
            <span class="sr-only">Sysdig</span>
            <SysdigLogo class="sysdig-logo" />
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
          <b-col cols="auto">
            <SearchBar v-if="!hero" reduced class="search-bar--reduced searchSmallForm justify-content-start" />
          </b-col>
          <b-col cols="auto">
            <div class="sponsor text-uppercase">
              <div>A project by</div>
              <span class="sr-only">Sysdig</span>
              <SysdigLogo class="sysdig-logo" />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import SysdigLogo from '~/assets/images/sysdig-logo.svg?inline'

export default {
  components: {
    SearchBar,
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
    background-image: url(~assets/images/lines-left.svg), url(~assets/images/lines-right.svg);
    background-position: -10rem top, 110% top;
    background-repeat: no-repeat, no-repeat;
    background-size: contain, contain;
  }
  &:not(.hero) {
    background-color: #FEF6F4;
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
