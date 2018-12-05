<template>
    <Form :group="group">

    </Form>
</template>

<script>
    import Form from "../../components/formGroup";
    export default {
        name: "modifGroup",
        components: {Form},
        data() {
            return {
                group: {}
            }
        },
        created:function() {
            fetch("http://localhost:3000/groups/" + this.$route.params.id)
                .then(response => response.json())
                .then((json) => this.group = json)
                .catch(err => console.log(err));
        }
    }
</script>

<style scoped>

</style>