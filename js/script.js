var app = new Vue({
  el: "#app",
  data: {
    userName: "Natália Veras",
    indexChat: 0,
    inputMessage: "",
    searchInput: "",
    indexMessage: 0,

    contactsList: [
    {
      name: 'Michele',
      contactPicture: 'img/avatar_1.jpg',
      status: true,
      allMessages: [
        {
          message: "Hello",
          origin: "sent",
          hour: "21:43",
          dropdown: '',
        },
        {
          message: "Hey",
          origin: "received",
          hour: "21:45",
          dropdown: '',
        },
        {
          message: "How are you?",
          origin: "sent",
          hour: "21:52",
          dropdown: '',
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
         hour: "12:09",
         dropdown: '',
       },
       {
         message: "Beh, come dimenticare, amica mia. Cos'è successo?",
         origin: "received",
         hour: "23:09",
         dropdown: '',
       },
       {
         message: "La stavo cercando oggi e non la trovavo... Alla fine ho scoperto che l'aveva presa mia madre!!!",
         origin: "sent",
         hour: "07:56",
         dropdown: '',
       }
     ]
    },
    {
    name: 'Britney Spears',
    contactPicture: 'img/britney-avatar.jpg',
    status: true,
    allMessages: [
      {
        message: "You tell me you're in love with me, like you can't take your pretty eyes away from me",
        origin: "sent",
        hour: "12:19",
        dropdown: '',
      },
      {
        message: "It's not that I don't wanna stay, but every time you come too close I move away",
        origin: "received",
        hour: "14:04",
        dropdown: '',
      },
      {
        message: "You'll see that you're the only one for me",
        origin: "sent",
        hour: "18:10",
        dropdown: '',
      },
      {
        message: "I wanna believe in everything that you say, 'cause it sounds so good. But if you really want me move slow",
        origin: "received",
        hour: "18:10",
        dropdown: '',
      },
      {
        message: "There are many things about me that you should know",
        origin: "sent",
        hour: "18:10",
        dropdown: '',
      }
  ]
  },
    {
    name: 'Matteo',
    contactPicture: 'img/avatar_3.jpg',
    status: true,
    allMessages: [
      {
        message: "Ehi, Natália",
        origin: "received",
        hour: "05:56",
        dropdown: '',
      },

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
         hour: "05:56",
         dropdown: '',
       },
       {
         message: "Che ne so",
         origin: "received",
         hour: "18:12",
         dropdown: '',
       },
       {
         message: "Va bene, dai",
         origin: "sent",
         hour: "15:09",
         dropdown: '',
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
        hour: "12:19",
        dropdown: '',
      },
      {
        message: "Sono un lumacoide",
        origin: "received",
        hour: "14:04",
        dropdown: '',
      },
      {
        message: "Certo che sì",
        origin: "sent",
        hour: "18:10",
        dropdown: '',
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
        hour: "12:19",
        dropdown: '',
      },
      {
        message: "Sì, a che ora?",
        origin: "received",
        hour: "14:04",
        dropdown: '',
      },
      {
        message: "Ti farò sapere!",
        origin: "sent",
        hour: "18:10",
        dropdown: '',
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
        hour: "12:19",
        dropdown: '',
      },
      {
        message: "Troppi impegni, purtroppo.",
        origin: "received",
        hour: "14:04",
        dropdown: '',
      },
      {
        message: "Vero, sto lavorando sempre.",
        origin: "sent",
        hour: "18:10",
        dropdown: '',
      }
    ]
  },
    ]
  },
  methods: {
    // SHOW OPENED CHAT
    openChat: function(index) {

       this.indexChat = index;
       this.scrollDown()

     },
    // SEND MESSAGE
    sendMessage: function() {

       if (this.inputMessage !== "") {

         this.contactsList[this.indexChat].allMessages.push(
           {
             message: this.inputMessage,
             origin: "sent",
             hour: this.currentHour(),
             dropdown: false,
           }
         );

         this.inputMessage = "";
         this.sentAudio();
         this.scrollDown();
         this.automaticAnswer();

       }

     },
    // AUTOMATIC ANSWER
    automaticAnswer: function (){

      const randomanswers = ['Bah secondo me dovremmo tutti andare su una montagna e non tornare più',
      '*nubi sticker*', 'Ma che dici', 'Che slurpina', 'Ma queste cose... nel 2020!', 'Beh, che dire',
      'Un bel lorem ipsum ci stava però', 'Vita nubi anche oggi', 'I <3 cuccioline'];

      let random = Math.floor(Math.random() * randomanswers.length);

       setTimeout(() =>
       this.contactsList[this.indexChat].allMessages.push (
         {
         message: randomanswers[random],
         origin: 'received',
         hour: this.currentHour(),
         dropdown: false,
        }
      )
      , 1500);

     setTimeout( () => this.receivedAudio() , 1500 );
     setTimeout( () => this.scrollDown(), 1500 );

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

      let nowHour = new Date ();

      let seconds = nowHour.getSeconds();
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      let hour = nowHour.getHours()
      let minute = nowHour.getMinutes()
      if (minute < 10) {
        minute = "0" + minute;
      }

      return `${hour}:${minute}:${seconds}`
     },
    // CURRENT DAY
    currentDay: function() {

      let todayDate = new Date ();

       let day = todayDate.getDate();
       let month = todayDate.getMonth() + 1
       let year = todayDate.getFullYear()

       return `${day}/${month}/${year}`

     },
    // MESSAGE DROP-DOWN MENU
    dropDown: function(index) {

     let message = this.contactsList[this.indexChat].allMessages[index];

     if (message.dropdown == false) {
      message.dropdown = true;
    } else {
      message.dropdown = false;
    }

    console.log(this.contactsList[this.indexChat].allMessages[index]);

    },
    // DELETE MESSAGE
    deleteMessage: function(index) {

     this.contactsList[this.indexChat].allMessages.splice(index, 1);

     console.log(index);
     console.log(this.contactsList[this.indexChat].allMessages[index]);

    },
    // SENT MESSAGE AUDIO
    sentAudio: function () {
      let audio = new Audio("sounds/message_sent.mp3");
      audio.volume = 0.5;
      audio.play();
    },
    // RECEIVED MESSAGE AUDIO
    receivedAudio: function () {
      let audio = new Audio("sounds/message_received.mp3");
      audio.volume = 0.5;
      audio.play();
    },
    // SCROLL TO LAST MESSAGE
    scrollDown: function () {

      setTimeout(()=>{
        var container = document.querySelector(".chat-body");
        var scrollHeight = container.scrollHeight;
        container.scrollTop = scrollHeight;
      },5);

    },
  },

})
