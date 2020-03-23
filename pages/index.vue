<template>
  <div>
    <Header hero />
    <b-container class="search-bar mx-0" fluid>
      <b-container>
        <b-row no-gutters>
          <b-col offset-md="3" cols="12" lg="6" class="py-2">
            <Search />
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <main>
      <b-container class="content">
        <b-row>
          <b-col sm="12" md="4" xl="3" class="filter-panel">
            <CategoryFilters />
          </b-col>
          <b-col sm="12" md="8" xl="9" tag="section" class="apps">
            <transition-group name="zoom" tag="b-row" appear>
              <b-col
                v-for="app in apps"
                :key="app.id"
                tag="div"
                lg="4"
                class="mb-4"
              >
                <AppCard :app="app" />
              </b-col>
            </transition-group>
          </b-col>
        </b-row>
      </b-container>
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AppCard from '@/components/AppCard'
import Search from '@/components/Search'
import CategoryFilters from '@/components/CategoryFilters'

export default {
  components: {
    Header,
    Footer,
    AppCard,
    Search,
    CategoryFilters
  },
  computed: {
    ...mapGetters(['apps'])
  }
}
</script>

<style scoped lang="scss">
  .content {
    margin-top: 2rem;
    margin-bottom: 2rem;
    min-height: calc(100vh - var(--footer-height) - var(--header-height) - var(--header-margin));
  }
  .title {
    text-align: center;
    width: 100%;
    margin-top: 0.5rem;
    font-size: $font-L;
    line-height: 19px
  }

  .search-bar {
    margin-top: 2rem;
    background-color: $secondary-background;
  }
</style>
