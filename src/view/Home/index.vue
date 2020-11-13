<template>
  <div class="home">
    <div class="lin1">
      <span><img src=" http://localhost:8080/logo.png" alt="" /></span>
      <span>消息</span>
      <span>+</span>
    </div>
    <div class="lin2">
      <input type="text" placeholder="搜索" @input="seach" />
    </div>
    <div class="main">
      <dl v-for="(item, index) in list" :key="index">
        <dt>
          <img :src="item.url" alt="" />
        </dt>
        <dd>
          <h3>{{ item.title }}</h3>
          <p>{{ item.dest }}</p>
        </dd>
      </dl>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.getlist();
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getlist() {
      axios.get("api/list").then((res) => {
        this.list = res.data;
      });
    },
    seach(e) {
      let id = e.target.value;
      axios
        .get("/api/search", {
          params: {
            id: id,
          },
        })
        .then((res) => {
          this.getlist();
        });
    },
  },
};
</script>

<style lang="css" scoped>
.lin1 {
  display: flex;
  width: 100%;
  height: 60px;
  background: skyblue;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 15px;
  align-items: center;
}
.lin2 {
  text-align: center;
  margin-top: 10px;
}
.lin2 input {
  width: 90%;
  height: 30px;
  border-radius: 20px;
  text-align: center;
}
dl {
  display: flex;
  padding: 15px;
}
dd {
  margin-left: 20px;
}
dt img {
  border-radius: 50%;
}
</style>