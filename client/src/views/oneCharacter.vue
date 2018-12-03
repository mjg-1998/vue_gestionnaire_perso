<template>
    <article class="perso">
        <h2 class="title">{{character.mainGroup}}</h2>
        <character :character="character" />
    </article>
</template>

<script>
    import Character from "../components/Character";
    export default {
        name: "oneCharacter",
        components: {Character},
        data() {
            return {
                Character: 1,
                character: {}
            }
        },
        created: function () {
            fetch("http://localhost:3000/character/" + this.$route.params.id)
                .then(response => response.json())
                .then((json) => this.character = json)
                .catch(err => console.log(err));
        }}
</script>

<style scoped>

</style>