var app = new Vue({
  el: "#app",
  data: {
    userName: "Natália Veras",

    inputMessage: "",
    // openClass: "",
    indexChat: 0,

    todayDate: new Date (),
    nowHour: new Date (),

    searchInput: "",

    contactsList: [
    {
      name: 'Michele',
      contactPicture: 'img/avatar_1.jpg',
      status: true,
      allMessages: [
        {
          message: "Hello",
          origin: "sent",
          hour: "21:43"
        },
        {
          message: "Hey",
          origin: "received",
          hour: "21:45"
        },
        {
          message: "How are you?",
          origin: "sent",
          hour: "21:52"
        }
      ]
    },
    {
     name: 'Rachele',
     contactPicture: 'img/avatar_6.jpg',
     status: true,
     allMessages: [
       {
         message: "Ciao! Ti ricordi quella cosa che avevo lasciato a casa tua?",
         origin: "sent",
         hour: "12:09"
       },
       {
         message: "Beh, come dimenticare, amica mia. Cos'è successo?",
         origin: "received",
         hour: "23:09"
       },
       {
         message: "La stavo cercando oggi e non la trovavo... Alla fine ho scoperto che l'aveva presa mia madre!!!",
         origin: "sent",
         hour: "07:56"
       }
     ]
    },
    {
  name: 'Britney',
  contactPicture: 'img/avatar_8.jpg',
  status: true,
  allMessages: [
    {
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      origin: "sent",
      hour: "12:19"
    },
    {
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      origin: "received",
      hour: "14:04"
    },
    {
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      origin: "sent",
      hour: "18:10"
    }
  ]
  },
    {
    name: 'Matteo',
    contactPicture: 'img/avatar_3.jpg',
    status: true,
    allMessages: [
      {},
    ]
    },
    {
     name: 'Giorgio',
     contactPicture: 'img/avatar_4.jpg',
     status: true,
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
    status: true,
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
  name: 'Giuseppe',
  contactPicture: 'img/avatar_5.jpg',
  status: true,
  allMessages: [
    {
      message: "Studiamo insieme?",
      origin: "sent",
      hour: "12:19"
    },
    {
      message: "Sì, a che ora?",
      origin: "received",
      hour: "14:04"
    },
    {
      message: "Ti farò sapere!",
      origin: "sent",
      hour: "18:10"
    }
  ]
  },
    {
  name: 'Alberto',
  contactPicture: 'img/avatar_7.jpg',
  status: true,
  allMessages: [
    {
      message: "E' da un po' che non ci vediamo...",
      origin: "sent",
      hour: "12:19"
    },
    {
      message: "Troppi impegni, purtroppo.",
      origin: "received",
      hour: "14:04"
    },
    {
      message: "Vero, sto lavorando sempre.",
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
       // this.openClass = "opened";

     },
    // SEND MESSAGE
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
         this.automaticAnswer();

       }
     },
    // AUTOMATIC ANSWER
    automaticAnswer: function (){

       const randomanswers = ['Bah secondo me dovremmo tutti andare su una montagna e non tornare più', '*nubi sticker*', 'Ma che dici', 'Che slurpina', 'Ma queste cose... nel 2020!', 'Beh, che dire', 'Un bel lorem ipsum ci stava però', 'Vita nubi anche oggi', 'I <3 cuccioline'];

       setTimeout(() => this.contactsList[this.indexChat].allMessages.push (
         {
         message: randomanswers[random],
         origin: 'received',
         hour: this.currentHour()
       }), 1500);

       let random = Math.floor(Math.random() * randomanswers.length);

     },
    // FILTER
    filterContacts: function() {

      this.contactsList.forEach((element) => {

        if ( element.name.toLowerCase().includes(this.searchInput.toLowerCase()) ) {
          element.status = true;
        } else {
          element.status = false;
        }

      });

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
