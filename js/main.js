const { createApp } = Vue

createApp({
    data() {
        return {
            chiave: "valore",
            booleanApi: 'https://flynn.boolean.careers/exercises/api/random/boolean',
            intPath: 'https://flynn.boolean.careers/exercises/api/random/int',
            wordPath: 'https://flynn.boolean.careers/exercises/api/random/word',
            sentencePath: 'https://flynn.boolean.careers/exercises/api/random/sentence',
            risposta: null
        }
    },
    methods: {
        metodo() {
            console.log("metodo che stampa un dato: ", this.chiave);
        }
    },
    mounted() {
        console.log("Mounted iniziato");

        axios.get( this.sentencePath ).then((risposta) => {
            // debugger;
            console.log(risposta);
            this.risposta = risposta.data.response;
            this.chiave = risposta.data.response;
        });

        console.log("Mounted terminato");
    }
}).mount('#app')
