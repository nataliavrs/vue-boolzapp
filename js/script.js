var app = new Vue({
  el: "#app",
  data: {
    openClass: "",
    indexChat: 0,
    allChats: contacts = [
       {
        name: 'Michele',
        contactMessage: 'Coucou',
        userMessage: 'On se voit quand?',
        contactPicture: 'img/avatar_1.jpg'
      },
      {
        name: 'Fabio',
        contactMessage: 'Ciao',
        userMessage: 'Che fai?',
        contactPicture: 'img/avatar_2.jpg'
      },
      {
        name: 'Giovanni',
        contactMessage: 'Hello',
        userMessage: 'How are you?',
        contactPicture: 'img/avatar_3.jpg'
      },
      {
       name: 'Antonio',
       contactMessage: 'Oi',
       userMessage: 'Tudo bem?',
       contactPicture: 'img/avatar_4.jpg'
     },
     {
       name: 'Rachele',
       contactMessage: 'Hola',
       userMessage: '¿Cómo estás?',
       contactPicture: 'img/avatar_6.jpg'
     },
    ]
  },
   methods: {
     openChat: function(index) {
       this.indexChat = index;
       this.openClass = "opened";
     },

  }
})
