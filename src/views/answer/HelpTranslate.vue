<template>
  <div>
    View Help Translate

    <h1>Chasse aux erreurs de traductions</h1>

    <h2>
      O.o vous avez trouver une erreur dans l'une des langues que nous proposons
      ? Oups j'espère que ce n'est pas trop grave. Dans tout les cas n'hésite
      pas à nous communiquer l'erreur et si tu le souhaite la correction, afin
      que nous puissions effectuer la modification le plus rapidement possible.
      Tu peu si tu le souhaite nous laisser ton pseudo ainsi que ton adresse
      mail afin que l'on t'ajoute dans la liste des participant aux traductions.
      Merci encore à toi sage érudit.
    </h2>

    <Button
      text="Signaler un problème de traduction"
      @click.native="openDialog"
    ></Button>

    <Dialog :show.sync="dialog" size="xl" :action="true">
      <template v-slot:content>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12">
              <v-select
                v-model="selectLang"
                :items="langs"
                :rules="[v => !!v || 'Item is required']"
                label="Language"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" v-if="selectLang">
              <v-select
                v-model="selectType"
                :items="typeError"
                :rules="[v => !!v || 'Item is required']"
                label="Type"
                required
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="text-center" v-if="selectType">
            <v-col cols="12" sm="5">
              <v-textarea
                v-model="lastTranslate"
                :rules="lastTranslateRules"
                label="Translation cible"
                required
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="2">
              <span>to</span>
            </v-col>
            <v-col cols="12" sm="5">
              <v-textarea
                v-model="newTranslate"
                :rules="newTranslateRules"
                label="Your translation"
                required
              ></v-textarea
            ></v-col>
          </v-row>

          <v-row v-if="selectType">
            <v-col cols="12">
              <v-textarea
                v-model="comment"
                :counter="500"
                :rules="commentRules"
                label="Comment"
                required
              ></v-textarea>
            </v-col>
          </v-row>

          <v-row v-if="selectType">
            <v-col cols="12">
              <v-text-field
                v-model="pseudo"
                :counter="10"
                :rules="pseudoRules"
                label="URL"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="email" label="E-mail"></v-text-field>
            </v-col>
          </v-row>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Validate
          </v-btn>
        </v-form>
      </template>
    </Dialog>

    <h2>Remerciments spéciaux à:</h2>

    <v-row>
      <v-col v-for="user in userList" :key="user" cols="6">
        {{ user }}
      </v-col>
    </v-row>
    <v-container> </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

//templates
import Dialog from "@/components/templates/Dialog.vue";
import Button from "@/components/templates/Button.vue";

export default Vue.extend({
  name: "FormTranslate",
  components: {
    Dialog,
    Button,
  },
  data() {
    return {
      valid: true,
      dialog: false,

      //emailRules: [v => /.+@.+\..+/.test(v) || "E-mail must be valid"],

      selectLang: null,
      selectType: null,

      pseudo: "",
      email: "",

      lastTranslate: "",
      newTranslate: "",

      comment: "",

      langs: ["fr", "en"],
      typeError: ["update", "translate_unknow", "error"],

      //rules
      lastTranslateRules: [v => !!v || "Name is required"],
      newTranslateRules: [v => !!v || "Name is required"],
      commentRules: [v => !!v || "Name is required"],
      pseudoRules: [v => !!v || "Name is required"],

      //users
      userList: ["Lalattyna", "Sérac", "Syko", "Roland"],
    };
  },
  methods: {
    validate() {
      //this.$refs.form.validate();
    },
    openDialog() {
      this.dialog = true;
    },
  },
});
</script>
