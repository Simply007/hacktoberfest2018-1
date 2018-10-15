<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <a 
        class="footer-link" 
        href="https://docs.google.com/document/d/1gFKOhyUqMZzrZcbq8A_TpO5x9J9HK6agv70awCH8pyI">Code of Conduct</a>
      <a 
        class="footer-link" 
        href="https://hacktoberfest.digitalocean.com">Official Website</a>
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
    display: flex
    justify-content: center
    padding-bottom: .5rem
    text-align: center

  .footer-link
    color: white
    font-size: .9rem
    font-weight: 500
    text-decoration: none
    margin: 0 1rem
    &:hover
      border-bottom: 1px solid $color-cyan

</style>
