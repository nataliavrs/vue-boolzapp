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
          hour: "12:19"
        },
        {
          message: "Hey",
          origin: "received",
          hour: "14:04"
        },
        {
          message: "How are you?",
          origin: "sent",
          hour: "18:10"
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
         hour: "12:19"
       },
       {
         message: "Ehi...",
         origin: "received",
         hour: "14:04"
       },
       {
         message: "Come stai?",
         origin: "sent",
         hour: "18:10"
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
    },
    {
     name: 'Giorgio',
     contactPicture: 'img/avatar_4.jpg',
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
     sendMessage: function(index) {

      this.contactsList[index].allMessages = [

        // ...allMessages,
        {
          message: this.inputMessage,
          origin: "sent",
          hour: "20:20"
        }
      ]

       console.log(this.inputMessage);

     }

  }
})
