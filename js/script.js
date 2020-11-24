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
          hour: "1111"
        },
        {
          message: "Hey",
          origin: "received",
          hour: "1111"
        },
        {
          message: "How are you?",
          origin: "sent",
          hour: "1111"
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
         hour: "2222"
       },
       {
         message: "Ehi...",
         origin: "received",
         hour: "2222"
       },
       {
         message: "Come stai?",
         origin: "sent",
         hour: "2222"
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
        hour: "3333"
      },
      {
        message: "sto bene",
        origin: "received",
        hour: "3333"
      },
      {
        message: "interessante",
        origin: "sent",
        hour: "3333"
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
         hour: "4444"
       },
       {
         message: "sto bene",
         origin: "received",
         hour: "4444"
       },
       {
         message: "interessante",
         origin: "sent",
         hour: "4444"
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

      this.contactsList[this.indexChat].allMessages.push(
        {
          message: this.inputMessage,
          origin: "sent",
          hour: "0000"

        }

      );

      setTimeout(() => this.contactsList[this.indexChat].allMessages.push ({
        message: 'ok...',
        origin: 'received',
        hour: '0000'
      }), 1000);
     }

  }
})
