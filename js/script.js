var app = new Vue({
  el: "#app",
  data: {
    userName: "Natália Veras",

    inputMessage: "",
    openClass: "",
    indexChat: 0,

    todayDate: new Date (),
    nowHour: new Date (),

    searchInput: '',


    contactsList: [
    {
      name: 'michele',
      contactPicture: 'img/avatar_1.jpg',
      allMessages: [
        {
          message: "Hello",
          origin: "sent",
          hour: "21:43"
        },
        {
          message: "Hey",
          origin: "received",
          hour: "15:43"
        },
        {
          message: "How are you?",
          origin: "sent",
          hour: "17:24"
        }
      ]
    },
    {
     name: 'rachele',
     contactPicture: 'img/avatar_6.jpg',
     allMessages: [
       {
         message: "Ciao!",
         origin: "sent",
         hour: "12:09"
       },
       {
         message: "Ehi...",
         origin: "received",
         hour: "23:09"
       },
       {
         message: "Come stai?",
         origin: "sent",
         hour: "07:56"
       }
     ]
    },
    {
    name: 'matteo',
    contactPicture: 'img/avatar_3.jpg',
    allMessages: [
      {
        message: "Let's hang out later?",
        origin: "sent",
        hour: "12:09"
      },
      {
        message: "Uhmm, where?",
        origin: "received",
        hour: "08:09"
      },
      {
        message: "I don't know, let me think...",
        origin: "sent",
        hour: "10:39"
      }
    ]
    },
    {
     name: 'Giorgio',
     contactPicture: 'img/avatar_4.jpg',
     allMessages: [
       {
         message: "Mamma mia, che dire",
         origin: "sent",
         hour: "05:56"
       },
       {
         message: "Che ne so",
         origin: "received",
         hour: "18:12"
       },
       {
         message: "Va bene, dai",
         origin: "sent",
         hour: "15:09"
       }
     ]
    },
    {
    name: 'Antonio',
    contactPicture: 'img/avatar_2.jpg',
    allMessages: [
      {
        message: "Beh, o que dizer",
        origin: "sent",
        hour: "12:19"
      },
      {
        message: "Sono un lumacoide",
        origin: "received",
        hour: "14:04"
      },
      {
        message: "Certo che sì",
        origin: "sent",
        hour: "18:10"
      }
    ]
  },
    {
  name: 'Antonio',
  contactPicture: 'img/avatar_2.jpg',
  allMessages: [
    {
      message: "Beh, o que dizer",
      origin: "sent",
      hour: "12:19"
    },
    {
      message: "Sono un lumacoide",
      origin: "received",
      hour: "14:04"
    },
    {
      message: "Certo che sì",
      origin: "sent",
      hour: "18:10"
    }
  ]
  },
    {
  name: 'Antonio',
  contactPicture: 'img/avatar_2.jpg',
  allMessages: [
    {
      message: "Beh, o que dizer",
      origin: "sent",
      hour: "12:19"
    },
    {
      message: "Sono un lumacoide",
      origin: "received",
      hour: "14:04"
    },
    {
      message: "Certo che sì",
      origin: "sent",
      hour: "18:10"
    }
  ]
  },
    {
  name: 'Antonio',
  contactPicture: 'img/avatar_2.jpg',
  allMessages: [
    {
      message: "Beh, o que dizer",
      origin: "sent",
      hour: "12:19"
    },
    {
      message: "Sono un lumacoide",
      origin: "received",
      hour: "14:04"
    },
    {
      message: "Certo che sì",
      origin: "sent",
      hour: "18:10"
    }
  ]
  },
    ]
  },
  methods: {
    // SHOW CLICKED CHAT
     openChat: function(index) {

       this.indexChat = index;
       this.openClass = "opened";

     },
     // SEND MESSAGE & AUTOMATIC ANSWER
     sendMessage: function() {

       if (this.inputMessage == "") {

       }  else {

         this.contactsList[this.indexChat].allMessages.push(
           {
             message: this.inputMessage,
             origin: "sent",
             hour: this.currentHour()
           }
         );

         this.inputMessage = "";

         setTimeout(() => this.contactsList[this.indexChat].allMessages.push (
           {
           message: 'Sì, hai ragione secondo me. Ci penserò, grazie!',
           origin: 'received',
           hour: this.currentHour()
         }), 1500);

       }
     },
     // FILTER
     filterContacts: function() {

      // const filter = this.contactsList.filter((element) => {
      //   return element.name === this.searchInput;
      // });


      console.log(filter);
      console.log(this.searchInput);

     },
     // CURRENT HOUR
     currentHour: function() {

       let seconds = this.nowHour.getSeconds();
       if (seconds < 10) {
         seconds = "0" + seconds;
       }
       let hour = this.nowHour.getHours()
       let minute = this.nowHour.getMinutes()
       if (minute < 10) {
         minute = "0" + minute;
       }

       return `${hour}:${minute}:${seconds}`

     },
     // CURRENT DAY
     currentDay: function() {

       let day = this.todayDate.getDate();
       let month = this.todayDate.getMonth() + 1
       let year = this.todayDate.getFullYear()

       return `${day}/${month}/${year}`

     },
  },
  // SCROLL TO LAST MESSAGE
  updated: function () {

    var container = document.querySelector(".chat-body");
    var scrollHeight = container.scrollHeight;
    container.scrollTop = scrollHeight;

  },

})
