<template>
  <div>
    <b-row class="dashboard-list">
      <b-col
        v-for="dashboard in resource.configurations"
        :key="`${dashboard.name}-${dashboard.kind}`"
        tag="div"
        lg="6"
        class="dashboard-wrapper mb-4 d-flex align-items-stretch"
      >
        <b-card class="dashboard">
          <div slot="header" class="header">
            <b-link
              target="_blank"
              :href="`https://raw.githubusercontent.com/sysdiglabs/prometheus-hub-resources/${repoBranch}/resources/${dashboard.image}`"
            >
              <b-img
                left
                class="image"
                :src="`https://raw.githubusercontent.com/sysdiglabs/prometheus-hub-resources/${repoBranch}/resources/${dashboard.image}`"
                :alt="dashboard.name"
              />
            </b-link>
            <b-img v-if="dashboard.kind === 'Sysdig'" src="~assets/icons/sysdig-shovel.svg" class="icon sysdig" alt="Sysdig logo" />
            <b-img v-if="dashboard.kind === 'Grafana'" src="~assets/icons/grafana-logo.svg" class="icon grafana" alt="Grafana logo" />
            <span class="sr-only">{{ dashboard.kind }}</span>
          </div>
          <h3 class="title">
            {{ dashboard.name }}
          </h3>
          <markdown :header-level-start="2" :content="dashboard.description" />
          <div slot="footer" class="footer">
            <Download :data="dashboard.data" :filename="`${dashboard.name}.json`">
              Download
            </Download>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown'
import Download from '@/components/Download'

export default {
  components: {
    Markdown,
    Download
  },
  props: {
    resource: {
      type: Object,
      required: true
    },
    resources: {
      type: Object,
      required: true
    }
  },
  computed: {
    repoBranch () {
      if (process.env.REPO_BRANCH === undefined) {
        return 'master'
      } else {
        return process.env.REPO_BRANCH
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.dashboard {
  border-color: $secondary;
  width: 100%;
  .card-header, .card-footer {
    border: none;
    background-color: $white;
  }
  .card-body {
    padding-top: 0;
    padding-bottom: 0;
  }
  .title {
    margin: 1rem 1rem 0 0;
  }
  .image {
    width: 50%;
  }
  .icon {
    width: 60px;
    height: 60px;
    position: absolute;
    right: 0px;
    top: 0px;
    padding: 10px;
    border-color: $secondary;
    border-style: solid;
    border-width: 0 0 1px 1px;
  }
}
</style>
