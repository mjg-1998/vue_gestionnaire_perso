<template>
    <div class="inside-app">
    <h1>Les empires</h1>
    <article class="empires" v-for="empire in empires":key="empire._id">
        <h2>{{empire.name}}</h2>
        <small><router-link :to="{name:'empire', params: { id:empire._id}}">Voir la description</router-link></small>

    </article>
    </div>
</template>

<script>
    import Empire from "@/components/Empire";
    export default {
        components: {Empire},
        data() {
            return {
                empires: [],
                empire:{}
            }
        },
        created:function () {
            fetch("http://localhost:3000/empire/", {'method':"GET"})
                .then(response => response.json())
                .then((json) => this.empires = json )
                .catch(err => console.log(err));
        }
    }
</script>

<style scoped>

</style>