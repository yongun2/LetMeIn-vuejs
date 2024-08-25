<template>
  <v-app-bar scroll-behavior="elevate" class="bg-primary">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-menu" v-bind="props" class="d-sm-none"></v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="nav in navs"
          :key="nav.name"
          @click="onClickNav(nav.path)"
        >
          <v-list-item-title>
            {{ nav.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-app-bar-title> LetMeIn </v-app-bar-title>
    <v-btn
      class="d-none d-sm-flex"
      v-for="nav in navs"
      :key="nav.name"
      @click="onClickNav(nav.path)"
    >
      {{ nav.name }}
    </v-btn>
    <v-btn color="light" variant="outlined">로그인</v-btn>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Logo from "@assets/logo.png";

// vue-router
const route = useRoute();
const router = useRouter();

// nav 눌렀을 때 path로 routing
const onClickNav = (path) => router.push(path);

const navs = [
  {
    name: "포트폴리오",
    path: `/${route.params.username}/portfolio`,
  },
  {
    name: "프로젝트",
    path: `/${route.params.username}/project`,
  },
  {
    name: "이력서",
    path: `/${route.params.username}/resume`,
  },
  {
    name: "블로그",
    path: `/${route.params.username}/blog`,
  },
  {
    name: "Contact",
    path: `/${route.params.username}/contact`,
  },
];
</script>

<style></style>
