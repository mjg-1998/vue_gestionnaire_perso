<template>
    <div class="character-unit">
        <h4>Nom : {{ character.name}}</h4>
        <h4>Âge : {{ character.age}}</h4>
        <h4>Genre : {{ character.gender}}</h4>
        <h4>Race :</h4><p v-if="character.race" > {{ character.race.name}}
         <router-link :to="{name:'race', params: { id: character.race._id}}"> Voir les informations</router-link></p>
        <p v-else>SANS RACE DÉFINIE</p>
        <h4>Groupe :</h4><p v-if="character.mainGroup">  {{ character.mainGroup.name}} <router-link :to="{name:'group', params: { id: character.mainGroup._id}}"> Voir les informations</router-link></p>
        <p v-else>SANS GROUPE DÉFINI</p>
        <router-link :to="{name:'editCharacter', params: { id: character._id}}"> Modifier</router-link>
    </div>
</template>

<script>
    export default {
        name: "character",
        props: {
            character: Object,
        },
        created: function(){
            if(character.race == null) {
                character.race = {};
            }
            if(character.mainGroup == null) {
                character.mainGroup = {};
            }
        }
    }
</script>

<style scoped>

</style>