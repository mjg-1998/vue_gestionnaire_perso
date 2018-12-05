<template>
    <form :race="race">
        Nom : <input type="text" id="nomE" /><br>
        Localisation : <input type="text" id ="locationE"/>
        Pouvoir caractéristique : <input type="text" id ="powersE"/>
        Description : <textarea id="descE"> </textarea>

        <input id="subButtonE" type='button' value='CREER' @click.prevent="createNewRace" />
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
        methods: {
            createNewRace: function () {
                this.race = {
                    name: document.querySelector("#nomE").value,
                    location: document.querySelector("#locationE").value,
                    power: document.querySelector("#powersE").value,
                    description: document.querySelector("#descE").value
                };

                fetch("http://localhost:3000/race/", {'method':"POST",
                    headers: {
                        "Content-type":"application/json"
                    },
                    body: JSON.stringify(this.race) }
                )
                    .then(response => console.log(JSON.stringify(this.race)))
                    .catch(err => console.log(err))
            }
        }
    }
</script>

<style scoped>

</style>