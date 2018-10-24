<template>
  <section class="section section-home">
    <div class="main-img">
      <img 
        class="hacktoberfest-img" 
        src="/hacktoberfest.png" 
        alt="Hacktoberfest Brno">
    </div>
    <article>
      <h1>What is Hacktoberfest?</h1>
      Hacktoberfest — brought to you by DigitalOcean in partnership with GitHub and Twilio — is a month-long celebration of open source software. Maintainers are invited to guide would-be contributors towards issues that will help move the project forward, and contributors get the opportunity to give back to both projects they like, and ones they've just discovered. No contribution is too small—bug fixes and documentation updates are valid ways of participating.
    </article>
    <article 
      v-if="new Date() < new Date('2018-10-18')" 
      class="register">
      <a href="https://www.kentico.com/hacktoberfest-event-brno-2018?utm_campaign=f_hacktoberfest-event-brno-2018&utm_source=leaderboard"><button>Register for Event!</button></a>
    </article>
    <article>
      <h1>Hacktoberfest event Brno 2018</h1>
      <p>
        Since we in Kentico love open-source, especially <a href="https://kentico.github.io">Developer Community Team</a>. We decided to organize Hacktoberfest Event in Brno - the first event in the Czech Republic! In the following agenda, you could see what we were doing on 18th of October. You could also take a look at the <router-link to="/resources">resources</router-link> we have prepared to facilitate picking an issue as much as possible!
      </p>
      <h2>Agenda</h2>
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
      <h1>What's next?!</h1>
      That was not enough for us - we have decided to prolong our initiative for the whole of October. So you could <router-link to="/leaderboard">register</router-link> to the Brno Hacktoberfest, pick an issue from <router-link to="/resources">resources</router-link> and climb in the leaderboard!
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
    a
      color: $color-secondary
      margin: auto;
      &:hover
        border-bottom: 1px solid $color-cyan

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

  article.register
    width: 100%
    text-align: center
    h2
      font-size: 2em
    a
      color: white
      margin: auto;
      font-size: 2em
      &:hover
        border-bottom: 1px solid $color-cyan
</style>
