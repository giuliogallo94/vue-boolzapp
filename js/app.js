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
      searchName: "",
    };
  },

  methods: {
    // Funzione per indicare a seguito del click quale chat visualizzare
    showActiveChat: function (index) {
      this.indexChat = index;
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
    // deleteMsg: function() {

    // },
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
