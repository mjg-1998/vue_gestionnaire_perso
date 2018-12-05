<template>
    <div class="race-unit">
        <h4>Nom : {{ race.name}}</h4>
        <h4>Description :</h4> <p>{{ race.description}}</p>
        <h4>Localisation :</h4> <p>{{ race.location}}</p>
        <h4>Pouvoir spécifique :</h4> <p>{{ race.power}}</p>
        <router-link :to="{name:'editRace', params: { id: race._id}}"> Modifier</router-link>

    </div>
</template>

<script>
    export default {
        name: "race",
        props: {
            race: Object
        }
    }
</script>

<style scoped>

</style>