const { createApp } = Vue;

const dt = luxon.DateTime;

const app = createApp({
  data() {
    return {
      backgrounds: ["bg_01.jpeg", "bg_02.jpeg", "bg_03.jpeg"],
      contactList: contacts,
      msgToSend: "",
      date: "",
      chat: contacts,
      indexChat: "0",
      searchName: "",
      newBg: "",
    };
  },

  methods: {
    // Function to select a single chat by clicking on its preview
    showActiveChat: function (index) {
      this.indexChat = index;
      this.searchName = "";
    },
    // Function that able the user to send messages and recive an automatic response
    sendMsg: function () {
      if (this.msgToSend.length > 0) {
        let timeNow = dt.now().toFormat("dd/MM/yyyy HH:mm:ss");
        let messagesList = this.contactList[this.indexChat].messages;
        messagesList.push({
          date: timeNow,
          message: this.msgToSend,
          status: "sent",
        });
        this.msgToSend = "";
        this.recieveReply(this.indexChat);
      }
    },

    recieveReply: function (replyIndex) {
      setTimeout(() => {
        this.contactList[replyIndex].messages.push({
          date: dt.now().toFormat("dd/MM/yyyy HH:mm:ss"),
          message: "ciao",
          status: "received",
        });
      }, 1000);
    },

    // Function to delete messages
    deleteMsg: function (index) {
      //   console.log("cancella");
      this.contactList[this.indexChat].messages.splice(index, 1);
    },

    // Function to cut message on preview
    cutMessage: function (message) {
      if (message.length > 20) {
        const messagePreview = message.substring(0, 20) + "...";
        return messagePreview;
      } else {
        return message;
      }
    },

    // Functions to format date
    fullDateWoSec: function (fullDate) {
      const luxonDate = dt.fromFormat(fullDate, "dd/MM/yyyy HH:mm:ss");
      return luxonDate.toFormat("dd/MM/yyyy HH:mm");
    },
    dateToHoursAndMin: function (fullDate) {
      const luxonDate = dt.fromFormat(fullDate, "dd/MM/yyyy HH:mm:ss");
      return luxonDate.toFormat("HH:mm");
    },

    // Function to search contact
    searchContact: function (contactName) {
      let searchText = this.searchName.toLowerCase();

      return contactName.toLowerCase().includes(searchText);
    },

    // Function to change chat background
    changeBg: function (value) {
      this.newBg = `url(assets/img/backgrounds/${value})`;
      // console.log(this.newBg);
    },
    resetBg: function () {
      this.newBg = "url(assets/img/backgrounds/mine.jpg)";
    },
  },
});

app.mount("#app");
