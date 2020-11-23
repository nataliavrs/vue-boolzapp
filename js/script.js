var app = new Vue({
  el: "#app",
  data: {
    indexChat: 0,
    allChats: contacts = [
       {
        name: 'Michele',
        contactMessage: 'Coucou',
        userMessage: 'On se vois quand?',
        contactPicture: 'img/avatar_1.jpg'
      },
      {
        name: 'Fabio',
        contactMessage: 'Ciao',
        userMessage: 'Che fai',
        contactPicture: 'img/avatar_2.jpg'
      }
    ]
  },
   methods: {
     openChat: function (index) {

       this.indexChat = 10;

       console.log(this.indexChat);

     },

  }
})
