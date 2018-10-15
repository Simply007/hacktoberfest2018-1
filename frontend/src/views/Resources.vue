<template>
  <section class="section section-resources">
    <article class="article">
      <img 
        src="/hacktoberfest_title.png" 
        alt="hacktoberfest" 
        class="leaderboard-header">
      <h1 class="resources-heading">Contributing to Open Source</h1>
      <p>To get off to a great start, here are some resources that you may find of use. If you have any questions, please don't hesitate to talk to others at the event or reach out to any of the organisers. We are happy to help!</p>
      <p>Contributing to Open Source is actually quite easy once you find the right project and know how to use GitHub. For an awesome guide, checkout GitHub's own excellent guide <a 
        class="inline-link" 
        href="https://opensource.guide/how-to-contribute/">here</a>!</p>
      <p>Haven't signed up for Hacktoberfest yet? <a 
        class="inline-link" 
        href="https://hacktoberfest.digitalocean.com">Sign up now!</a></p>
      <h2>Where to contribute?</h2>
      <p>It can be find finding projects to contribute to, but we've put together a list of useful links you can check out to save yourself some time! We also encourage you to ask around at our event, maybe you find someone to collaborate with!</p>
      <h2>Kentico projects</h2>
      <ul class="project-list">
        <li 
          v-for="project in mainProjects"
          :key="project.index"
          class="main-project-item">
          <a 
            :href="project.url" 
            class="link-external list-link">
            <v-icon 
              small 
              class="icon icon-link" 
              v-text="'fas fa-link'"/>
            <p class="project-name">{{ project.title }}</p>
          <p class="project-description">{{ project.description }}</p></a>
        </li>
      </ul>
      <h2>Other projects</h2>
      <ul class="project-list">
        <li 
          v-for="project in projects"
          :class="{featured: project.featured}"
          :key="project.index"
          class="project-item">
          <a 
            v-if="!project.featured"
            :href="'https://github.com/' + project.title" 
            class="link-external list-link">
            <v-icon 
              small 
              class="icon icon-link" 
              v-text="'fas fa-link'"/>
            <p class="project-name">{{ project.title }}</p>
          <p class="project-description">{{ project.description }}</p></a>
          <a 
            v-if="project.featured"
            :href="project.url" 
            class="link-external list-link">
            <v-icon 
              small 
              class="icon icon-link" 
              v-text="'fas fa-link'"/>
            <p class="project-name">{{ project.title }}</p>
          <p class="project-description">{{ project.description }}</p></a>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  name: "Resources",
  data: () => ({
    mainProjects: [
      {
        title: "Kentico Hacktobest Issues",
        description: "Pick one of the Kentico projects issues.",
        url:
          "https://github.com/search?q=org%3Akentico+label%3Ahacktoberfest+label%3Agroomed&type=Issues&state=open"
      },
      {
        title: "Sample repository for beginners",
        description: "Create the pull request of your choce",
        url: "https://github.com/Kentico/hacktoberfest-event-brno-2018"
      }
    ],
    projects: [
      {
        featured: true,
        title: "Beginner Friendly Projects",
        description: "A great list of lots of beginner friendly projects!",
        url: "https://github.com/MunGell/awesome-for-beginners"
      },
      {
        title: "Did you know?",
        description:
          "This year, Microsoft joined Hacktoberfest. Anyone who submits a Pull Request to one of their repositories will earn an extra T-Shirt!",
        featured: true,
        url: "https://opensource.microsoft.com/"
      },
      {
        title: "freeCodeCamp/guide",
        description: "A collection of guides to programming"
      },
      {
        title: "30-seconds/30-seconds-of-code",
        description:
          "Curated collection of useful JavaScript snippets that you can understand in 30 seconds or less"
      },
      {
        title: "Did you know?",
        description:
          "Any GitHub issue labeled with Hacktoberfest is intended for Hacktoberfest contributions.",
        featured: true,
        url:
          "https://github.com/search?q=label:hacktoberfest+state:open+type:issue"
      },
      {
        title: "30-seconds/30-seconds-of-react",
        description:
          "Curated collection of useful React snippets that you can understand in 30 seconds or less"
      },
      {
        title: "Did you know?",
        description:
          "When looking for issues on GitHub, you can also filter issues based on language you know!",
        featured: true,
        url:
          "https://github.com/search?q=label:hacktoberfest+state:open+type:issue"
      },
      {
        title: "30-seconds/30-seconds-of-css",
        description:
          "Curated collection of useful CSS snippets that you can understand in 30 seconds or less"
      },
      {
        title: "30-seconds/30-seconds-of-interviews",
        description:
          "Common interview questions to help you prepare for your next interview"
      },
      {
        title: "cssfrankfurt/hacktoberfest2018",
        description: "The Hacktoberfest Frankfurt Website!"
      }
    ]
  })
};
</script>

<style lang="sass">

  .leaderboard-header
    max-height: 8rem
    width: 80%

  .section-resources
    max-width: 800px

  .resources-heading
    margin-top: 1rem
  
  .sign-up
    margin-bottom: 1rem

  .project-list
    list-style-type: none
    display: flex
    flex-wrap: wrap
    @media screen and (max-width: 768px)
      flex-direction: column

  .main-project-item
    position: relative
    flex-basis: calc(100% - 1rem)
    padding: 1rem
    margin: .5rem
    border-left: .5rem solid $color-secondary
    border-radius: .3rem
    background: white
    transition: all .3s ease-in-out
    max-width: 620px
    &:hover
      transform: scale(1.03)

  .project-item
    position: relative
    flex-basis: calc(50% - 1rem)
    padding: 1rem
    margin: .5rem
    border-left: .5rem solid $color-secondary
    border-radius: .3rem
    background: white
    transition: all .3s ease-in-out
    max-width: 310px
    &:hover
      transform: scale(1.03)

  .featured
    border-left: .5rem solid $color-cyan

  .project-name
    color: $color-primary
    font-weight: 500
    margin-bottom: .3rem
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis

  .project-description
    margin: 0
    margin: .5rem 0
    color: $color-primary

  .v-icon.icon-link
    position: absolute
    right: 0
    bottom: 0
    color: $color-accent
    margin-bottom: 3px
    padding: .5rem
    opacity: 0
    transition: opacity .3s ease-in-out

  .link-external:hover > .v-icon.icon-link
    opacity: 1

</style>
