<template>
    <article class="race">
        <race :race="race"></race> <table>
        <tr v-for="chara in characters">
            <td><router-link :to="{name:'character', params: { id: chara._id}}">
                {{chara.name}}</router-link></td>

        </tr>
    </table>
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
                race: {},
                characters:[]
            }
        },
        created: function () {
            fetch("http://localhost:3000/race/" + this.$route.params.id)
                .then(response => response.json())
                .then((json) => this.race = json)
                .catch(err => console.log(err));
            fetch("http://localhost:3000/race/" + this.$route.params.id+"/characters")
                .then(response => response.json())
                .then((json) => this.characters = json)
                .catch(err => console.log(err));
        }}
</script>

<style scoped>

</style>