<template>
    <div class="inside-app">
        <h1>Personnages</h1>
        <article class="characters" id="test"  v-for="Character in characters" :key="Character._id">
            <h2>{{Character.name}}</h2>
            <small><router-link :to="{name:'character', params: { id:Character._id}}">Voir la fiche perso</router-link></small>
            <a href="#" @click="deleteACharacter(Character)" >Supprimer</a>
        </article>
    </div>
</template>


<script>
    import Character from "@/components/Character";

    export default {
        components: {Character},
        data() {
            return {
                characters : null,
            }
        },
        created:function () {
            fetch("http://localhost:3000/character/", {'method':"GET"})
                .then(response => response.json())
                .then((json) => this.characters = json )
                .catch(err => console.log(err));
        },methods: {
            deleteACharacter(character){
                this.$router.go('characters');

                fetch("http://localhost:3000/character/"+character._id, {'method':"DELETE",
                    headers: {
                        "Content-type": "application/json"
                    }})
                    .then(response => response.json())
                    .then((json) => this.characters = json )
                    .catch(err => console.log(err));


            }
        }
    }
</script>

<style scoped>

</style>