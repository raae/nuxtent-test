<template>
  <section class="home-container">
    <div>
      <h2 class="home-slogan">
        Seamlessly use content files in your Nuxt.js sites.
      </h2>
      <div class="home-links">
        <nuxt-link to="/posts/post1" class="button--green">Post</nuxt-link>
        <nuxt-link to="/projects/project1" class="button--green">Project</nuxt-link>
      </div>
      {{ projects }}
      <br/>
      <br/>
      {{ posts }}
    </div>
  </section>
</template>

<script>
export default {
  asyncData: async ({ app, route, payload }) => {
    console.log("INDEX");
    console.log(route.path);
    return {
      projects: (await app.$content("/projects").getAll()) || payload,
      posts: (await app.$content("/posts").getAll()) || payload
      // archives: await app.$content('/archives').getAll() || payload,
      // projects: await app.$content('/projects').getAll() || payload
    };
  }
};
</script>

<style>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.home-slogan {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.home-links {
  padding-top: 15px;
}
</style>
