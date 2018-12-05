<template>
    <div class="inside-app">
    <h1>Les races</h1>
    <article class="races" v-for="race in races":key="race._id">
        <h2>{{race.name}}</h2>
        <small><router-link :to="{name:'race', params: { id:race._id}}">Voir la description</router-link></small>
        <a href="#" @click="deleteARace(race)" >Supprimer</a>
    </article>
    </div>
</template>

<script>
    import Race from "@/components/Race";
    export default {
        components: {Race},
        data() {
            return {
                races: [],
                race:{}
            }
        },
        created:function () {
            fetch("http://localhost:3000/race/", {'method':"GET"})
                .then(response => response.json())
                .then((json) => this.races = json )
                .catch(err => console.log(err));
        },methods: {
            deleteARace(race){
                this.$router.go('races');

                fetch("http://localhost:3000/race/"+race._id, {'method':"DELETE",
                    headers: {
                        "Content-type": "application/json"
                    }})
                    .then(response => response.json())
                    .then((json) => this.races = json )
                    .catch(err => console.log(err));


            }
        }
    }
</script>

<style scoped>

</style>