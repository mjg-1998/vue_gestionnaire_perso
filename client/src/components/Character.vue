<template>
    <div class="character-unit">
        <h4>Nom : {{ character.name}}</h4>
        <h4>Âge : {{ character.age}}</h4>
        <h4>Genre : {{ character.gender}}</h4>
        <h4>Race :{{ character.race.name}} <router-link :to="{name:'race', params: { id: character.race._id}}"> Voir les informations</router-link></h4>
        <h4>Groupe : {{ character.mainGroup.name}} <router-link :to="{name:'group', params: { id: character.mainGroup._id}}"> Voir les informations</router-link></h4>
    </div>
</template>

<script>
    export default {
        name: "character",
        props: {
            character: Object
        }
    }
</script>

<style scoped>

</style>