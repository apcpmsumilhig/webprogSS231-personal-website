const app = Vue.createApp({
    data() {
     return {
       manyFoods: [
         {name: 'Friends', url: 'gallery/css/assets/1.JPG'},
         {name: 'Cover', url: 'gallery/css/assets/5.jpg.svg'},
         {name: 'Sun', url: 'gallery/css/assets/7.jpg'},
         {name: 'Plant', url: 'gallery/css/assets/8.jpg'},
         {name: 'Me', url: 'gallery/css/assets/9.jpg'},
         {name: 'Wife', url: 'gallery/css/assets/profile.jpeg'},
         {name: 'Cat', url: 'gallery/css/assets/11.png'}
       ]
     }
    }
   })
   
   app.mount('#app')