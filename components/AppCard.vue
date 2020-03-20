<template>
  <b-link :to="app.available ? `/apps/${app.id}` : ''" class="link">
    <b-card class="app my-1 h-100" :class="{ unavailable: !app.available }" header-bg-variant="transparent">
      <div slot="header" class="header d-flex align-items-center justify-content-center h-100">
        <b-card-img-lazy class="image" :src="app.icon" :alt="app.name" />
      </div>
      <h3 class="title">
        {{ app.name }}
      </h3>
      <div class="description">
        {{ app.shortDescription }}
      </div>
      <div slot="footer" class="footer" :class="['d-flex', 'align-items-center', { 'justify-content-between': !app.available, 'justify-content-end': app.available }]">
        <span v-if="!app.available" class="coming-soon text-uppercase">
          Coming soon
        </span>
        <ArrowRight class="icon" />
      </div>
    </b-card>
  </b-link>
</template>

<script>
import ArrowRight from '~/assets/icons/arrow-right.svg?inline'

export default {
  components: {
    ArrowRight
  },
  props: {
    app: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.link {
  color: #415564;
  text-decoration: none;
  &:hover, &:active {
    color: #253746;
  }
}
.app {
  margin-bottom: 1rem !important;
  border: 1px solid #F7C9BD;
  border-radius: 0.5rem;
  &.unavailable {
    .card-footer {
      .icon {
        opacity: 20%;
      }
    }
    &:hover {
      cursor: default;
    }
  }

  &:not(.unavailable):hover {
    .card-footer {
      .icon {
        transition: transform .25s;
        transform: scale(1.5);
      }
    }
    background-color: #FEF6F4;
    border-color: $primary;
    transition: .25s;
  }

  .card-header{
    padding: 1.25rem 2rem;;
    border: 0;
    height: 120px;
    .header {
      .image {
        max-height: 100%;
        max-width: 100%;
        width: auto;
        height: auto;
        display:block;
        margin:auto;
      }
    }
  }

  .card-body {
    padding: 0 0 0.5rem 2rem;
    height: 100%;
    .title {
      color: black;
      font-size: $font-L;
      line-height: 16px;
      text-transform: uppercase;
      font-weight: 700;
      border-top: 1px solid #F7C9BD;
      padding: 1rem 1rem 0 0;
    }
    .description {
      font-size: 1.125rem;
      max-height: 100%;
      overflow: hidden;
      line-height: 1.5rem;
    }
  }

  .card-footer {
    .footer {
      padding: 0.6rem 0 0 0;
    }
    color: $primary;
    font-size: 1.125rem;
    padding: 0 1rem 1rem 2rem;
    border: 0;
    background-color: transparent;
    .coming-soon {
      font-weight: $weight-bold;
      color: #F2A591;
    }
    .icon {
      height: 20px;
      width: 20px;
      fill: $primary;
    }
  }
}
</style>
