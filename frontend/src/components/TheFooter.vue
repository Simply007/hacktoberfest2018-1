<template>
  <footer class="footer">
    <div 
      id="thanks" 
      class="bottom-line"><p>Special thanks to all organizators of the <a href="https://hacktoberfestffm.de">Hacktoberfest Event 2018 in Frankfurt</a>
        That have held a great Hacktoberfest Event.</p><p>Mainly <a href="https://twitter.com/flxwu">Felix Wu</a> and <a href="https://twitter.com/vicbergquist">Victoria Bergquist</a>.</p>
      I have forked their <a href="https://github.com/cssfrankfurt/hacktoberfest2018">the source code</a> of Hacktoberfest Event Frankfurt site to use it fot this site.
    </div>
    <div class="footer-wrapper">
      <a 
        class="footer-link" 
        href="https://docs.google.com/document/d/1gFKOhyUqMZzrZcbq8A_TpO5x9J9HK6agv70awCH8pyI">Code of Conduct</a>
      <a 
        class="footer-link" 
        href="https://hacktoberfest.digitalocean.com">Official Website</a>
      <a 
        class="footer-link" 
        href="https://kentico.github.io">Kentico Developer Community</a>
      <a 
        class="footer-link" 
        href="https://www.kentico.com/hacktoberfest-event-brno-2018">Event site</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="sass">

  .footer
    margin: 0 auto
    padding-bottom: .5rem
    justify-content: center
    text-align: center
    
    .footer-wrapper 
      margin: 0 auto
      justify-content: center
      display: flex
      padding-bottom: .5rem
      padding-top: .5rem

  .footer-link
    color: white
    font-size: .9rem
    font-weight: 500
    text-decoration: none
    margin: 0 1rem
    &:hover
      border-bottom: 1px solid $color-cyan

  .bottom-line
    max-width: 600px
    color: $color-cyan
    
    p
      margin: 0
    a
      color: $color-secondary
      font-weight: 500
      &:hover
        border-bottom: 1px solid $color-cyan

</style>
