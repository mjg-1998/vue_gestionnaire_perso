<template>
    <div class="inside-app">
    <h1>Les races</h1>
    <article class="races" v-for="race in races":key="race._id">
        <h2>{{race.name}}</h2>
        <small><router-link :to="{name:'race', params: { id:race._id}}">Voir la description</router-link></small>

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
        }
    }
</script>

<style scoped>

</style>