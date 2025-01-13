const app3 = Vue.createApp({
    data() {
        return {
            commentText: null,
            commentPlace: []
        }
    },
    methods: {
        sendComment() {
            if (this.commentText) { // Ensure commentText is not null
                let comment = {
                    name: this.commentText,
                    found: false
                }
                this.commentPlace.push(comment);
                this.commentText = null; // Clear the input field
            }
        }
    }
});

app3.mount('#app3');