<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";
export default {
  name: "HomePage",
  components: {
    BlogPost,
  },
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
          title: "This is a filler title!2  ",
          blogHTML: "This is a filler blog post Title!",
          blogCoverPhoto: "coding",
        },
      ],
    };
  },
};
</script>
