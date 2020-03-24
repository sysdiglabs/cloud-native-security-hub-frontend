<template>
  <div>
    <Header />
    <div class="lines" />
    <b-container tag="main" class="content">
      <Nuxt />
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped lang="scss">
.lines {
  @include media-breakpoint-up(lg) {
    background-image: url(~assets/images/lines-right-int.svg);
    background-position: top right;
    background-repeat: no-repeat;
    position: absolute;
    width: 100%;
    height: 250px;
    margin-top: -2.5rem;
  }
}
.content {
  margin-top: 4rem;
  margin-bottom: 2rem;
  min-height: calc(100vh - var(--footer-height) - var(--header-height) - var(--header-margin));
  ::v-deep {
    h2 {
      color: black;
      font-size: $font-L;
      line-height: 19px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 40px;
      &:after {
        content: " ";
        border-top: 2px solid $primary;
        margin-top: $separator-margin;
        margin-bottom: $separator-margin;
        display: block;
        max-width: $separator-width;
      }
    }
    h3 {
      color: black;
      font-size: $font-L;
      font-weight: $weight-bold;
      line-height: 19px;
      letter-spacing: 1px;
      margin-top: 40px;
      &:after {
        content: " ";
        border-top: 1px solid black;
        margin-top: $separator-margin;
        margin-bottom: $separator-margin;
        display: block;
        max-width: $separator-width;
      }
    }
  }
}
</style>
