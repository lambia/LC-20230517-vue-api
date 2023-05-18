const { createApp } = Vue

createApp({
    data() {
        return {
            apiPath: {
                baseUrl: "https://flynn.boolean.careers/exercises/api/",
                boolean: 'random/boolean',
                int: 'random/int',
                word: 'random/word',
                sentence: 'random/sentence',
                mail: 'random/mail',
            },
            listaMail: [],
            nuovaMail: ""
        }
    },
    methods: {
        addMail() {
            console.log(this.listaMail);
            this.listaMail.push( this.nuovaMail );
            this.nuovaMail = "";
            console.log(this.listaMail);
        },
        caricaTutto() {
            for (let i = 1; i <= 10; i++) {
                axios.get( this.apiPath.baseUrl + this.apiPath.mail ).then((risposta) => {
                    this.listaMail.push( risposta.data.response );
                });
            }
        }
    },
    mounted() {
        console.log("Mounted iniziato");
        console.log(this.apiPath.baseUrl + this.apiPath.mail);

        this.caricaTutto();

        console.log("Mounted terminato");
    }
}).mount('#app')
