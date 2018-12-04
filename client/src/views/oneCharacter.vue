<template>
    <article class="perso">
        <character :character="character" />
    </article>
</template>

<script>
    import Character from "../components/Character";
    import Empire from "../components/Empire";
    export default {
        name: "oneCharacter",
        components: {Empire, Character},
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