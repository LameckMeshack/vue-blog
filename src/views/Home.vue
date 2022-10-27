<template>
  <div class="home"></div>
</template>

<script>
export default {
  name: "HomePage",
  components: {},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost:
          "Weekly blog articles with all things Vue.js, JavaScript, and web development.Register to get the latest blog posts delivered to your inbox.",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a filler title!",
          blogHTML: "This is a filler blog post Title!",
          blogCoverPhoto: "coding",
        },
        {
          title: "This is a filler title!",
          blogHTML: "This is a filler blog post Title!",
          blogCoverPhoto: "coding",
        },
      ],
    };
  },
};
</script>
