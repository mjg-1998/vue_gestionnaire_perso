<template>
    <form-race :race="race"></form-race>
</template>

<script>
    import FormRace from "../../components/formRace";
    export default {
        name: "modifRace",
        components: {FormRace},
        data() {
            return {
                race: {}
            }
        },
        created:function() {
            fetch("http://localhost:3000/race/" + this.$route.params.id)
                .then(response => response.json())
                .then((json) => this.race = json)
                .catch(err => console.log(err));
        }
    }
</script>

<style scoped>

</style>