<template>
  <section class="section section-home">
    <div class="main-img">
      <img 
        class="hacktoberfest-img" 
        src="/hacktoberfest.png" 
        alt="Hacktoberfest Brno">
    </div>
    <article>
      Hacktoberfest — brought to you by DigitalOcean in partnership with GitHub and Twilio — is a month-long celebration of open source software. Maintainers are invited to guide would-be contributors towards issues that will help move the project forward, and contributors get the opportunity to give back to both projects they like, and ones they've just discovered. No contribution is too small—bug fixes and documentation updates are valid ways of participating.
    </article>
    <article>
      <h1>Agenda</h1>
      <ul class="agenda">
        <li>17:30 Doors open</li>
        <li>18:00 Talk 1: Open-source intro</li>
        <li>18:20 Talk 2: What we use open source for in Kentico</li>
        <li>18:40 Talk 3: What is Hacktoberfest</li>
        <li>19:30 HACKING TIME &amp; Networking &amp; Beer</li>
        <li>22:00 We are going home</li>
      </ul>
    </article>
    <article>
      <h2 class="sponsor-heading">Sponsored by</h2>
      <list-component 
        :items="sponsors" 
        :item-type="'sponsor'" 
        class="sponsor-list"/>
    </article>
  </section>
</template>

<script>
import ListComponent from "@/components/ListComponent";
import { mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    ListComponent
  },
  data: () => ({
    sponsors: [
      {
        name: "DigitalOcean",
        url: "https://digitalocean.com",
        img: "./sponsors/digitalocean.svg"
      },
      {
        name: "GitHub",
        url: "https://github.com",
        img: "./sponsors/github.svg"
      },
      {
        name: "Twilio",
        url: "https://twilio.com",
        img: "./sponsors/twilio.svg"
      }
    ]
  }),
  methods: {
    ...mapActions({
      login: "login/login"
    })
  }
};
</script>

<style lang="sass">
  .section-home
    min-height: 100vh

  .main-img
    max-width: 500px
    text-align: center
    padding: 1rem 0
    margin: 0 auto

  .hacktoberfest-img
    width: 100%

  article
    flex-basis: 100%
    padding-bottom: .5rem
    max-width: 700px
    margin: 0 auto

    ul.agenda
      margin: 2em

  .list-stats
    flex-basis: 100%
    text-align: center
    padding-bottom: .5rem
    max-width: 700px
    margin: 0 auto
    justify-content: center

    .list-item
      margin: 0 1.5rem

  .stat-number
    font-size: 2.5rem
    font-weight: 700

  .stat-name
    text-align: center
    text-transform: uppercase
    font-size: .9rem
    font-weight: 700
    letter-spacing: 1px
    opacity: .7

    h1
      text-align: center
      font-size: 2em
      margin: 1em
      
</style>
