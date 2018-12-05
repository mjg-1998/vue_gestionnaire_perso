<template>
    <article class="race">
        <race :race="race"></race>
    </article>
</template>

<script>
    import Race from "../../components/Race";
    export default {
        name: "oneRace",
        components: {Race},
        data() {
            return {
                Race: 1,
                race: {}
            }
        },
        created: function () {
            fetch("http://localhost:3000/race/" + this.$route.params.id)
                .then(response => response.json())
                .then((json) => this.race = json)
                .catch(err => console.log(err));
        }}
</script>

<style scoped>

</style>