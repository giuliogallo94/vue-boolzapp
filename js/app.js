const { createApp } = Vue;

const app = createApp({
  data() {
    console.log(contacts[0].messages);
    console.log(contacts[0].messages[contacts[0].messages.length - 1].message);
    return {
      contactList: contacts,
      msgToSend: "",
      date: "",
      chat: contacts,
      indexChat: "0",
      searchName: "",
      //   lastMessageIndex:
      // contacts[indexChat].messages[contacts[indexChat].messages.length - 1]
      //   .message,
    };
  },

  methods: {
    // Funzione per indicare a seguito del click quale chat visualizzare
    showActiveChat: function (index) {
      this.indexChat = index;
      this.searchName = "";
    },
    // Funzione che permette di inviare messaggi e ricevere una risposta
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
      setTimeout(() => {
        messagesList.push({
          date: "",
          message: "ciao",
          status: "received",
        });
      }, 1000);
    },
    deleteMsg: function (index) {
      //   console.log("cancella");
      this.contactList[this.indexChat].messages.splice(index, 1);
    },

    // searchContact() {
    //   let searchText = this.searchName.toLowerCase();
    //   this.contactList.forEach((name) => {
    //     if (name.name.toLowerCase().includes(searchText)) {
    //       name.visible = true;
    //     } else {
    //       name.visible = false;
    //     }
    //   });
    // },
  },
});

app.mount("#app");
