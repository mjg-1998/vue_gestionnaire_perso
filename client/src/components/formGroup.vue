<template>
    <form :group="group">
        Nom : <input type="text" id="nomG" v-bind:value="group.name"/><br>
        Description : <textarea id="descG" v-bind:value="group.description"> </textarea>

        <input id="subButtonG" type='button' value='CREER' @click.prevent="createNewGroup" />
    </form>

</template>

<script>
    export default {
        name: "formGroup",
        data() {
            return {
                group:{}
            }
        },
        created: function() {
            if (this.$route.params.id != null) {
                fetch("http://localhost:3000/groups/" + this.$route.params.id)
                    .then(response => response.json())
                    .then((json) => this.group = json)
                    .catch(err => console.log(err));

            }
        },
        methods: {
                createNewGroup: function () {
                    this.group = {
                        name: document.querySelector("#nomG").value,
                        description: document.querySelector("#descG").value
                    };
                    if (this.$route.params.id != null) {
                        fetch("http://localhost:3000/groups/"+ this.$route.params.id, {
                                'method': "PUT",
                                headers: {
                                    "Content-type": "application/json"
                                },
                                body: JSON.stringify(this.group)
                            }
                        )
                            .then(response => console.log(JSON.stringify(this.group)))
                            .catch(err => console.log(err))
                    }
                    else {
                        fetch("http://localhost:3000/groups/", {
                                'method': "POST",
                                headers: {
                                    "Content-type": "application/json"
                                },
                                body: JSON.stringify(this.group)
                            }
                        )
                            .then(response => console.log(JSON.stringify(this.group)))
                            .catch(err => console.log(err))
                    }
                    this.$router.push({name:'home'});
                }
            }
    }
</script>

<style scoped>

</style>