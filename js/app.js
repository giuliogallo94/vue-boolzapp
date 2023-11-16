const { createApp } = Vue;

const app = createApp({
  data() {
    // console.log(contacts[1].messages);

    return {
      contactList: contacts,
      msgToSend: "",
      date: "",
      chat: contacts,
      indexUser: "0",
    };
  },

  methods: {
    showActiveChat(index) {
      this.indexUser = index;
    },
    // sendMsg: function () {
    //   let chat = this.contactList[0].messages;
    //   //   console.log(chat);
    //   chat.push({
    //     date: "",
    //     message: this.msgToSend,
    //     status: "sent",
    //   });
    // },
  },
});

app.mount("#app");
