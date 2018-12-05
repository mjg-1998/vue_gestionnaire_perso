<template>
<Form :character="character">

</Form>
</template>

<script>
    import Form from "../../components/formCharacter";
    export default {
        name: "modifForm",
        components: {Form},
        data() {
            return {
                character: {}
            }
        },
        created:function() {
            fetch("http://localhost:3000/character/" + this.$route.params.id)
                .then(response => response.json())
                .then((json) => this.character = json)
                .catch(err => console.log(err));
        }
    }
</script>

<style scoped>

</style>