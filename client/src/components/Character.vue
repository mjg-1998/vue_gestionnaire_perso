<template>
    <div class="character-unit">
        <h4>Nom : {{ character.name}}</h4>
        <h4>Âge : {{ character.age}}</h4>
        <h4>Genre : {{ character.gender}}</h4>
        <h4>Empire : {{ character.empire}}</h4>
        <h4>Groupe : {{ character.mainGroup}}</h4>
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