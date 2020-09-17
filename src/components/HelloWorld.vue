<template>
  <div class="hello">
    <Menu itemName="aitemu" />
    <div>{{ msg }}</div>
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
    <button v-on:click="getSong">get lyric path</button>
    <p>This is the result: {{ songAPIresult }}</p>
    <button v-on:click="getLyric">get lyric</button>
    <p>This is the lyric: {{ songLyricResult }}</p>
    <div>to do is: {{ todosList }}</div>
  </div>
</template>

<script>
import Menu from "./menu.vue";
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    getSong: function() {
      // console.log(this.message);
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/" +
            "https://lyricsapiforme.herokuapp.com/lyric_path/?data=" +
            this.message,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.songAPIresult = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    getLyric: function() {
      // console.log(this.message);
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/" +
            "https://lyricsapiforme.herokuapp.com/lyric_content/?data=" +
            this.songAPIresult,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.songLyricResult = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  components: {
    Menu,
  },
  data() {
    return {
      todosList: null,
      message: "",
      songAPIresult: "",
      songLyricResult: "",
    };
  },
  mounted() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/" +
          "https://lyricsapiforme.herokuapp.com/?data=" +
          "adhd",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        console.log(response);
        this.todosList = response.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
