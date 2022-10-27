<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
      <h3>View Recent Blogs</h3>
      <div class="blog-cards">
        <BlogCard
          :post="post"
          v-for="(post, index) in blogPostsCards"
          :key="index"
        />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "@/components/BlogCard.vue";
import BlogPost from "@/components/BlogPost.vue";
export default {
  name: "HomePage",
  components: {
    BlogPost,
    BlogCard,
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
      blogPostsCards: [
        {
          blogTitle: "Blog Card #1",
          blogCoverPhoto: "stock-1",
          blogDate: "April 4, 2021",
        },
        {
          blogTitle: "Blog Card #2",
          blogCoverPhoto: "stock-2",
          blogDate: "April 4, 2021",
        },
        {
          blogTitle: "Blog Card #3",
          blogCoverPhoto: "stock-3",
          blogDate: "April 4, 2021",
        },
        {
          blogTitle: "Blog Card #4",
          blogCoverPhoto: "stock-4",
          blogDate: "April 4, 2021",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
</style>
