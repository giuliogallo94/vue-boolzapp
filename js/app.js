const { createApp } = Vue;

const app = createApp({
  data() {
    console.log(contacts);
    return {
      users: contacts,
    };
  },

  methods: {},
});

app.mount("#app");
