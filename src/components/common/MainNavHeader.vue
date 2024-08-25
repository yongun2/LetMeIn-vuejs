<template>
  <v-app-bar scroll-behavior="elevate" class="bg-primary">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-menu" v-bind="props" class="d-sm-none"></v-btn>
      </template>
      <v-list>
        <v-list-item v-for="nav in navs" :key="nav.name">
          <v-list-item-title>{{ nav.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-app-bar-title> LetMeIn </v-app-bar-title>
    <v-btn class="d-none d-sm-flex" v-for="nav in navs" :key="nav.name">
      {{ nav.name }}
    </v-btn>
    <v-btn color="light" variant="outlined">로그인</v-btn>
  </v-app-bar>
</template>

<script setup>
import { ref, mergeProps } from "vue";
import { useRoute } from "vue-router";
import Logo from "@assets/logo.png";

const route = useRoute();

const menu = ref(false);

const navs = [
  {
    name: "포트폴리오",
    path: "",
  },
  {
    name: "프로젝트",
    path: "",
  },
  {
    name: "이력서",
    path: "",
  },
  {
    name: "블로그",
    path: "",
  },
  {
    name: "Contact",
    path: "",
  },
];
</script>

<style></style>
