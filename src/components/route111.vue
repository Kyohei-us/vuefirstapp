<template>
  <div>
    <div>this is route111</div>
    <input v-model="name" placeholder="name" />
    <input v-model="name_type" placeholder="name type" />
    <button @click="addNewPost">add new post</button>
    <p>Post is: {{ post_content }}</p>
    <input v-model="nameQuery" placeholder="name query" />
    <button @click="getPost">get post</button>
    <!-- <button @click="findOne">get a thing</button>
    <p>{{ result }}</p> -->
  </div>
</template>

<script>
// import * as dbconn from "../assets/js/dbconn.js";
import axios from "axios";

export default {
  data() {
    return {
      result: null,
      post_content: null,
      name: null,
      name_type: null,
      nameQuery: null,
    };
  },
  methods: {
    getPost: function () {
      // console.log(this.message);

      var uriForGetPost =
        "https://cors-anywhere.herokuapp.com/" +
        "https://lyricsapiforme.herokuapp.com/post/content/";

      if (this.nameQuery != null) {
        uriForGetPost = uriForGetPost + "?name=" + this.nameQuery;
      }

      axios
        .get(uriForGetPost, {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          console.log(response);
          this.post_content = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    addNewPost: function () {
      // console.log(this.message);
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/" +
            "https://lyricsapiforme.herokuapp.com/post/new_post/?" +
            "name=" +
            this.name +
            "&name_type=" +
            this.name_type,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.post_content = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
