const { createApp } = Vue;

const app = createApp({
  data() {
    // console.log(contacts[0].messages[this.length - 1].date);
    console.log(contacts[0].messages);
    return {
      contactList: contacts,
      msgToSend: "",
      date: "",
      chat: contacts,
      indexChat: "0",
      //   lastAcces: contacts[indexChat].messages,
    };
  },

  methods: {
    showActiveChat(index) {
      this.indexChat = index;
    },
    sendMsg: function () {
      console.log("ciao");
      let messagesList = this.contactList[this.indexChat].messages;
      messagesList.push({
        date: "",
        message: this.msgToSend,
        status: "sent",
      });
      this.msgToSend = "";
      console.log(messagesList);
    },
  },
});

app.mount("#app");
