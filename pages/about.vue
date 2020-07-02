<template>
  <b-row>
    <b-col>
      <h1 class="title">
        PromCat: A resource catalog for enterprise-class Prometheus monitoring
      </h1>

      <p>PromCat, short for Prometheus Catalog, is a resource catalog for enterprise-class Prometheus monitoring.</p>

      <b-img block center :src="`https://github.com/sysdiglabs/promcat-frontend/raw/${repoBranch}/assets/images/about/01_features.png`" alt="Features" />

      <p>Prometheus has been revolutionary in the way we monitor our cloud-native environments, attracting immense attention from the open-source community and making the amount of Prometheus monitoring resources explode. Now, there are so many resources available that it's no longer easy to filter out the good ones and discard those that are poorly documented or obsolete.</p>
      <p>On our journey to provide a scalable Prometheus monitoring experience, we found that companies need a reliable toolbox of monitoring integrations to succeed. In addition to scale and security controls, they need a quick answer to the following question: "How can I monitor X, Y and Z in my environment?"</p>
      <p>This is why we created PromCat, a resource catalog in which you can find curated, documented and supported <strong>monitoring integrations</strong> for Kubernetes platforms and cloud-native services.</p>

      <h2>Prometheus ecosystem issues for enterprise monitoring</h2>
      <p>The strong growth of the Prometheus ecosystem has brought a tremendous amount of monitoring resources. There is more content than ever, but how can we distinguish production-ready resources for enterprise environments from untested DIY experiments? The challenge now isn’t finding content, but finding the right resource to be production-ready without investing days on setup and maintenance.</p>
      <p>
        Implementing a reliable <b-link href="https://sysdig.com/blog/kubernetes-monitoring-prometheus/" target="_blank">
          Prometheus monitoring
        </b-link> system requires a tight integration between <strong>metrics sources</strong> (exporters, instrumented services or instrumentation libraries for your applications), Prometheus <strong>metrics collection</strong> (service discovery, jobs, filtering and relabeling or recording rules), <strong>dashboards</strong> and <strong>alerts</strong>. Making all of these different pieces work together is strenuous and requires a significant amount of effort to set up and maintain over time.
      </p>

      <b-img block center :src="`https://github.com/sysdiglabs/promcat-frontend/raw/${repoBranch}/assets/images/about/02_prometheus_monitoring_diagram.png`" alt="Features" />

      <p>
        Here are some examples of resources you can find:
        <ul>
          <li>Multiple exporters for different services and platforms in Github.</li>
          <li>Many different dashboards, often Grafana dashboards.</li>
          <li>
            <b-link href="https://github.com/kubernetes-monitoring/kubernetes-mixin" targat="_blank">
              Kubernetes mixin
            </b-link>, which is great, but just scoped to Kubernetes.
          </li>
        </ul>
      </p>
      <p>With this content, the enterprise monitoring users find multiple issues.</p>
      <p>The first one is <strong>segmentation</strong>; there are too many services, platforms, versions and places to look for. It just takes too much time to find the right tools.</p>
      <p>Once found, how can you <strong>evaluate</strong> them and make sure the resources are feature-complete and production-grade? How can you be sure they aren't just proof of concepts?</p>
      <p>And before you can even test the resources, how should you <strong>download</strong> them? Sometimes they are packaged as container images in DockerHub, but occasionally they are not.</p>
      <b-img block center :src="`https://github.com/sysdiglabs/promcat-frontend/raw/${repoBranch}/assets/images/about/03_incomplete_building.png`" alt="Features" />

      <p>It’s hard to <strong>put everything together</strong>, even when using really good exporters or dashboards. The different pieces of the puzzle use various metric names, labels and groupings that aren't necessarily compatible with what you use. You might find compatibility issues between different versions of exporters and specific app versions, dashboards or alerts.</p>

      <b-img block center :src="`https://github.com/sysdiglabs/promcat-frontend/raw/${repoBranch}/assets/images/about/04_mismatching_pieces.png`" alt="Features" />

      <p>To complicate things even further, there is a <strong>lack of documentation</strong> on how to use and integrate these resources.</p>
      <p>Enterprise monitoring requires <strong>confidence</strong> in the integrations you use, with <strong>support</strong> when you configure monitoring for your environment or when things break. We have heard from our customers that they can easily spend a week trying to figure out which version of a Prometheus exporter, dashboards and alerts they should use for an integration, and how to keep up with changes.</p>

      <b-img block center :src="`https://github.com/sysdiglabs/promcat-frontend/raw/${repoBranch}/assets/images/about/05_missing_instructions.png`" alt="Features" />

      <h2>Supported Prometheus integrations for enterprise-class monitoring</h2>
      <p>The path is pretty clear for us; we want to provide an <strong>enterprise-grade</strong> Prometheus monitoring experience. To achieve this, we are offering a backend that <strong>scales to millions of time series</strong> per second, as well as <strong>long term storage</strong>. On top of this, our product <strong>adapts</strong> to customer workflows with full <strong>Prometheus</strong> compatibility through API and <strong>PromQL</strong> queries, dashboards and alerts. You can keep using the tools that work for you, like Prometheus open-source exporters, or Grafana dashboards.</p>
      <p>But all of this <strong>is not enough</strong>.</p>
      <p>This is why we decided to bring together all of the awesome monitoring resources that we already recommend to our customers. And going one step further, we’re sharing them so everyone can benefit. This is why PromCat was born.</p>

      <p>
        Our main goal is not to list all of the available content; <b-link href="https://prometheus.io/docs/instrumenting/exporters/" target="_blank">
          the Prometheus project already lists exporters
        </b-link>. Instead, we want to raise the bar and list the content we have curated, tested, documented and, most importantly, that we support for Sysdig customers, including:
        <ul>
          <li><strong>Prometheus and third-party exporters</strong>, packaged as container images with deployment manifests for Kubernetes.</li>
          <li>
            Both <strong>Grafana and Sysdig dashboards</strong>. Most of our customers love Sysdig integrated dashboards, with Team scope and RBAC, which are available alongside our <b-link href="https://sysdig.com/use-cases/kubernetes-troubleshooting/" target="_blank">
              troubleshooting
            </b-link> and security functionality. But some advanced users prefer Grafana with Sysdig metrics so they can customize every single detail of their dashboarding experience. Both are supported in this catalog.
          </li>
          <li>Both AlertManager and Sysdig PromQL <strong>alerts definition</strong>.</li>
          <li><strong>Recording rules</strong>, in order to pre-calculate metrics when you have tons of them.</li>
        </ul>
      </p>
      <p>Because many of these resources are already available as open-source software, our compromise is to also <strong>give back to the community</strong> that has originally created them. We'll contribute any bug fixes and improvements we do as part of our maintenance and support.</p>
    </b-col>
  </b-row>
</template>

<script>

export default {
  layout: 'content',
  computed: {
    repoBranch () {
      if (process.env.REPO_BRANCH === undefined) {
        return 'master'
      } else {
        return process.env.REPO_BRANCH
      }
    }
  },
  head () {
    return {
      title: 'About Prometheus Catalog',
      meta: [
        { hid: 'description', name: 'description', content: 'PromCat: A resource catalog for enterprise-class Prometheus monitoring' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  width: 50%;
  margin-bottom: 6rem;
}
::v-deep img {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
