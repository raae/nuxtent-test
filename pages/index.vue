<template>
  <section class="home-container">
    <div>
      <h2 class="home-slogan">
        Seamlessly use content files in your Nuxt.js sites.
      </h2>
      <div class="home-links">
        <nuxt-link to="/post1" class="button--green">Post</nuxt-link>
        <nuxt-link to="/project1" class="button--green">Project</nuxt-link>
      </div>
    </div>
  </section>
</template>

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
