const { createApp } = Vue;

const app = createApp({
  data() {
    // console.log(contacts[0].messages[this.length - 1].date);

    return {
      contactList: contacts,
      msgToSend: "",
      date: "",
      chat: contacts,
      indexUser: "0",
      //   lastAcces: contacts[indexUser].messages,
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
