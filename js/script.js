var app = new Vue({
  el: "#app",
  data: {
    inputMessage: "",
    openClass: "",
    indexChat: 0,
    contactsList: [
    {
      name: 'Michele',
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
     name: 'Rachele',
     contactPicture: 'img/avatar_2.jpg',
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
    name: 'Matteo',
    contactPicture: 'img/avatar_3.jpg',
    allMessages: [
      {
        message: "ciao",
        origin: "sent",
        hour: "12:09"
      },
      {
        message: "sto bene",
        origin: "received",
        hour: "08:09"
      },
      {
        message: "interessante",
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
         message: "ciao",
         origin: "sent",
         hour: "05:56"
       },
       {
         message: "sto bene",
         origin: "received",
         hour: "18:12"
       },
       {
         message: "interessante",
         origin: "sent",
         hour: "15:09"
       }
     ]
    },
    {
    name: 'Mattia',
    contactPicture: 'img/avatar_5.jpg',
    allMessages: [
      {
        message: "ciao",
        origin: "sent",
        hour: "12:19"
      },
      {
        message: "sto bene",
        origin: "received",
        hour: "14:04"
      },
      {
        message: "interessante",
        origin: "sent",
        hour: "18:10"
      }
    ]
   }
    ]
  },
  methods: {
     openChat: function(index) {

       this.indexChat = index;
       this.openClass = "opened";

     },
     sendMessage: function() {

       if (this.inputMessage == "") {

       }  else {

         this.contactsList[this.indexChat].allMessages.push(
           {
             message: this.inputMessage,
             origin: "sent",
             hour: "12:09"
           }

         );

         this.inputMessage = "";

         setTimeout(() => this.contactsList[this.indexChat].allMessages.push (
           {
           message: 'ok...',
           origin: 'received',
           hour: '12:10'
         }), 1500);

       }
     }
  },
  updated: function () {

    var container = document.querySelector(".chat-body");
    var scrollHeight = container.scrollHeight;
    container.scrollTop = scrollHeight;

  },
  // CURRENT HOUR
  hour: function() {

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

})
