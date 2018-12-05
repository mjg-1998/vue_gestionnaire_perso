<template>
    <div class="inside-app" ><br>
        <a href="#" id="character" @click="displayProductForm" >Créer un nouveau personnage</a> |
        <a href="#" id="race" @click="displayRaceForm">Ajouter une race</a> |
        <a href="#" id="group" @click="displayGroupForm">Ajouter un groupe</a>


        <form-character id="formcreateP"></form-character>
        <form-race id="formcreateE"></form-race>
        <form-group id="formcreateG"></form-group>
    </div>
</template>

<script>
    import FormCharacter from "./formCharacter";
    import FormRace from "./formRace";
    import FormGroup from "./formGroup";
    export default {
        name: "CreaForm",
        components: {FormGroup, FormRace, FormCharacter},
        data() {
            return {
                races: [],
                groups:[],
                group: {},
                character: {},
                race: {},
            }
        },
        created: function() {
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
            displayProductForm: function () {
                document.querySelector("#formcreateP").style.display="block";
                document.querySelector("#formcreateE").style.display="none";
                document.querySelector("#formcreateG").style.display="none";

            },

            displayGroupForm: function () {
                document.querySelector("#formcreateP").style.display="none";
                document.querySelector("#formcreateE").style.display="none";
                document.querySelector("#formcreateG").style.display="block";

            },

            displayRaceForm: function () {
                document.querySelector("#formcreateP").style.display="none";
                document.querySelector("#formcreateE").style.display="block";
                document.querySelector("#formcreateG").style.display="none";

            }
        }
    }
</script>

<style>
    #formcreateP, #formcreateG, #formcreateE {
        display: none;
    }

</style>