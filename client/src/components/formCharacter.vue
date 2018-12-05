<template>
    <form :character="character">
        Nom : <input type="text" id="nomP" v-bind:value="character.name" /><br>
        Âge : <input type="number" id="age" v-bind:value="character.age" /><br>
        Genre : <select id="genderSelect">
        <option value="M">M</option>
        <option value="F">F</option>
    </select><br>
        Race : <select id="selectP">
        <option v-for="option in races" v-bind:value="option._id">
            {{option.name}}
        </option>
    </select>
        <br> Groupe : <select id="selectGroup">
        <option v-for="option in groups" v-bind:value="option._id">
            {{option.name}}
        </option>
    </select><br>
        <input id="subButtonP" type='button' value='Valider' @click.prevent="createNewCharacter" />
    </form>
</template>

<script>
    export default {
        name: "formCharacter",
        data() {
            return {
                races: [],
                groups: [],
                character: {}
            }
        },
        created: function() {
            if(this.$route.params.id != null) {  fetch("http://localhost:3000/character/" + this.$route.params.id)
                .then(response => response.json())
                .then((json) => this.character = json)
                .catch(err => console.log(err));

            }


            fetch("http://localhost:3000/race/", {'method':"GET",
            })
                .then(response => response.json())
                .then((json) => this.races = json )
                .catch(err => console.log(err));
            fetch("http://localhost:3000/groups/", {'method':"GET",
            })
                .then(response => response.json())
                .then((json) => this.groups = json )
                .catch(err => console.log(err));

        },
        methods: {
            createNewCharacter: function () {
                let select = document.querySelector("#selectP");
                let selectG = document.querySelector("#selectGroup");
                let gender = document.querySelector("#genderSelect");
                this.character = {
                    name: document.querySelector("#nomP").value,
                    age: parseInt(document.querySelector("#age").value),
                    gender: gender.options[gender.selectedIndex].value,
                    race: select.options[select.selectedIndex].value,
                    mainGroup: selectG.options[selectG.selectedIndex].value
                };

                if (this.$route.params.id != null) {
                    fetch("http://localhost:3000/character/"+ this.$route.params.id, {
                            'method': "PUT",
                            headers: {
                                "Content-type": "application/json"
                            },
                            body: JSON.stringify(this.character)
                        }
                    )
                        .then(response => console.log(JSON.stringify(this.character)))
                        .catch(err => console.log(err));

                }
                else {
                    fetch("http://localhost:3000/character/", {
                            'method': "POST",
                            headers: {
                                "Content-type": "application/json"
                            },
                            body: JSON.stringify(this.character)
                        }
                    )
                        .then(response => console.log(JSON.stringify(this.character)))
                        .catch(err => console.log(err))
                }
            }
        }
    }
</script>

<style scoped>

</style>