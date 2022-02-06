const app = Vue.createApp({
    data(){
        return {
            array:[]
        }
    },
    methods: {
        getFn(){
            axios.get('https://randomuser.me/api/?results=20')
            
            .then(
                (res)=>{console.log(res)
                this.array=res.data.results
                this.array.forEach(array => {
                    array.heart=false;
                });
            }
            )
        }
    },
    created() {
        this.getFn()
    },
})


app.mount('#app')