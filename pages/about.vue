<template>
  <div>
    <Header hero />
    <main>
      <b-container class="content">
        <b-row>
          <p>
            Leo, quis cubilia quisque. Felis commodo euismod facilisis imperdiet turpis per pellentesque nisi, pulvinar dapibus augue. Duis, laoreet laoreet quis litora fames consectetur faucibus nisl non enim tempor semper. Parturient commodo mus ultrices adipiscing sollicitudin rutrum suspendisse congue phasellus! Pretium; varius netus tempus massa tellus dis fermentum aliquet. Vehicula suspendisse torquent quam, nibh cubilia commodo! Massa vitae bibendum ac. Aliquam mauris proin metus tempus phasellus vulputate diam. Ligula maecenas viverra vehicula, ultricies nulla. Morbi dis augue lacinia per commodo netus maecenas feugiat nulla litora porta conubia. Vestibulum ad eget suscipit habitasse curae; facilisi curae;. Gravida consectetur nostra dolor varius penatibus eget donec curae; habitant class augue magna. Pulvinar ut sit arcu purus augue penatibus lacus facilisi viverra nulla nisl curae;. Sem tristique.
          </p>
          <p>
            Ultrices mus sapien primis consectetur. Consequat sollicitudin ornare feugiat venenatis a molestie ad orci convallis mus elit. Hendrerit praesent leo justo quisque fames senectus phasellus faucibus. Sagittis semper aliquet est ante at parturient tristique eu taciti. Neque maecenas volutpat vehicula senectus ante etiam parturient. Per torquent iaculis et suspendisse erat ipsum dignissim neque natoque venenatis. Urna scelerisque tincidunt tincidunt vel nisl, pharetra elit. Pulvinar eget curae; montes vitae natoque lacus fusce. Pulvinar auctor tincidunt nisl vivamus vestibulum. Nisi lectus nostra augue aliquet primis curabitur tortor class, pellentesque sed! Egestas nam laoreet magnis quis a sociis penatibus congue at nisi phasellus lectus. Fames neque enim mi dui posuere. Vel quam neque interdum. Habitasse massa cum nulla urna hac. Est pharetra neque donec vitae, platea curae; per. Venenatis gravida nunc, facilisi tristique curabitur? Tempus tristique curabitur ornare posuere proin ultricies donec vitae ipsum. Adipiscing dolor dis penatibus velit.
          </p>
          <p>
            Fusce suspendisse tempus lorem vitae scelerisque ac sociosqu diam. Tortor class, sociosqu duis id lacinia purus. Aliquam nullam vehicula convallis quam taciti aliquam, dui venenatis imperdiet tortor. Faucibus pulvinar felis gravida sagittis cras ante hac turpis dolor sagittis. Est senectus porttitor posuere ridiculus at justo. Lorem lorem dignissim curabitur netus per vivamus augue ipsum. Bibendum eu, sociis vivamus! At commodo faucibus faucibus mi, etiam adipiscing quis. Pellentesque mi ac porta libero est. Tincidunt, in integer morbi diam fringilla dictum vitae tempus mollis. Parturient sapien primis est urna eget. Luctus dignissim potenti nisl lorem lectus torquent semper elementum. Nostra suspendisse torquent auctor odio tempus montes elit ac nisi. Aliquet dictumst.
          </p>
          <p>
            Quisque sem est enim leo augue. Dignissim orci non rhoncus vestibulum mauris fames, iaculis porttitor convallis fusce lectus. Massa iaculis, ipsum nascetur enim lectus vivamus hendrerit. Consequat orci venenatis urna. Pretium senectus pretium aliquam ultrices aptent quisque! Enim porttitor aptent montes scelerisque ornare dis integer ut himenaeos congue nibh torquent. Sociis tincidunt, urna lobortis libero cras ornare eros odio. Turpis lacinia ridiculus nulla vestibulum. Faucibus ipsum, posuere parturient. Volutpat torquent fermentum nisi himenaeos. Ullamcorper magna non curabitur sollicitudin adipiscing gravida nibh. Per bibendum fusce sit vitae scelerisque. Purus tempus urna vulputate netus cras luctus. Dapibus ultrices parturient rutrum velit sapien litora conubia integer feugiat leo eget faucibus. Dis neque fringilla sollicitudin posuere natoque felis vivamus per. Arcu duis lacus ornare penatibus a taciti. Lacinia vulputate habitasse mus curae;. Elementum habitasse dapibus praesent viverra class lectus nullam sociis! Facilisis cras.
          </p>
          <p>
            Vitae commodo accumsan, facilisis tellus hac aliquet sociosqu curabitur risus aenean himenaeos? Tortor, vitae malesuada litora porta. Hac dolor aliquam aenean, proin nunc sem pellentesque phasellus aenean. Penatibus ridiculus nec mattis sagittis felis lectus, tempor varius senectus. Iaculis facilisi ipsum tempus taciti sagittis aliquet lacinia ligula eu, nibh vestibulum magnis. Leo laoreet diam massa consectetur bibendum vivamus ipsum nibh interdum. Donec quis phasellus arcu accumsan. Est porttitor sem duis malesuada. Dapibus volutpat quis natoque sollicitudin neque platea varius elit scelerisque, ridiculus enim praesent. Praesent, aliquet laoreet dictumst nascetur imperdiet. Ac semper, egestas ultricies dignissim vestibulum. Hendrerit mus eros ipsum sollicitudin facilisi quisque mauris semper parturient lacus etiam. Rutrum lacinia scelerisque ligula. Dui dictumst curae; massa conubia ligula massa dictumst lobortis. Libero euismod, urna eleifend risus elementum faucibus. Fames.
          </p>
        </b-row>
      </b-container>
    </main>
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
</style>
