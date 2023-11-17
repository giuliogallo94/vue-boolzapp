const { createApp } = Vue;

const dt = luxon.DateTime;

const app = createApp({
  data() {
    return {
      contactList: contacts,
      msgToSend: "",
      date: "",
      chat: contacts,
      indexChat: "0",
      searchName: "",
      timeNow: dt.now().toFormat("dd/MM/yyyy HH:mm:ss"),
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
        date: this.timeNow,
        message: this.msgToSend,
        status: "sent",
      });
      this.msgToSend = "";
      // console.log(messagesList);
      setTimeout(() => {
        messagesList.push({
          date: timeNow,
          message: "ciao",
          status: "received",
        });
      }, 1000);
    },

    // Funzione per cancellare i messaggi al click dell'apposito div
    deleteMsg: function (index) {
      //   console.log("cancella");
      this.contactList[this.indexChat].messages.splice(index, 1);
    },
    // Funzione per modificare formato data
    fullDateWoSec: function (fullDate) {
      const luxonDate = dt.fromFormat(fullDate, "dd/MM/yyyy HH:mm:ss");
      return luxonDate.toFormat("dd/MM/yyyy HH:mm");
    },
    // Funzione per modificare formato data
    dateToHoursAndMin: function (fullDate) {
      const luxonDate = dt.fromFormat(fullDate, "dd/MM/yyyy HH:mm:ss");
      return luxonDate.toFormat("HH:mm");
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
