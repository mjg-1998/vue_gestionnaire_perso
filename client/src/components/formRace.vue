<template>
    <form :race="race">
        Nom : <input type="text" id="nomE" v-bind:value="race.name"/><br>
        Localisation : <input type="text" id ="locationE" v-bind:value="race.location"/>
        Pouvoir caractéristique : <input type="text" id ="powersE" v-bind:value="race.power"/>
        Description : <textarea id="descE" v-bind:value="race.description"> </textarea>

        <input id="subButtonE" type='button' value='Valider' @click="createNewRace" />
    </form>
</template>

<script>
    export default {
        name: "formRace",
        data() {
            return {
                race:{}
            }
        },
        created: function() {
            if (this.$route.params.id != null) {
                fetch("http://localhost:3000/race/" + this.$route.params.id)
                    .then(response => response.json())
                    .then((json) => this.race = json)
                    .catch(err => console.log(err));

            }
        },
        methods: {
            createNewRace: function () {
                this.race = {
                    name: document.querySelector("#nomE").value,
                    location: document.querySelector("#locationE").value,
                    power: document.querySelector("#powersE").value,
                    description: document.querySelector("#descE").value
                };
                if (this.$route.params.id != null) {

                    fetch("http://localhost:3000/race/"+ this.$route.params.id, {
                            'method': "PUT",
                            headers: {
                                "Content-type": "application/json"
                            },
                            body: JSON.stringify(this.race)
                        }
                    )
                        .then(response => console.log(JSON.stringify(this.race)))
                        .catch(err => console.log(err));


                }
                else {
                    fetch("http://localhost:3000/race/", {
                            'method': "POST",
                            headers: {
                                "Content-type": "application/json"
                            },
                            body: JSON.stringify(this.race)
                        }
                    )
                        .then(response => console.log(JSON.stringify(this.race)))
                        .catch(err => console.log(err));

                }
                this.$router.push({name:'home'});
            }
        }
    }
</script>

<style scoped>

</style>