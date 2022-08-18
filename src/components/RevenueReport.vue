<script setup>
import Table from './Table.vue';

const title = 'Revenue Report';

const fields = [
  {
    title: 'Shift',
    hint: '',
  },
  {
    title: 'Baby Blue Rev',
    hint: '',
    format: 'currency',
    scale: 0,
    group: 1,
  },
  {
    title: 'Bright Blue Rev',
    hint: '',
    format: 'currency',
    scale: 0,
    group: 1,
  },
  {
    title: 'Bold Blue Rev',
    hint: '',
    format: 'percent',
    scale: 0,
    group: 1,
  },
  {
    title: 'Big Blue Rev',
    hint: '',
    format: 'currency',
    scale: 0,
    group: 1,
  },
  {
    title: 'Total Revenue',
    hint: '',
    format: 'integer',
    group: 2,
  },
];

const data = [
  {
    shiftName: 'Weekend AM',
    babyBlueRevenue: 5000,
    brightBlueRevenue: 40000,
    boldBlueRevenue: 40000,
    bigBlueRevenue: 15000,
    totalRevenue: 100000,
  },
];
</script>

<template>
  <main>
    <Table :title="title" :fields="fields" :data="data" />
  </main>
</template>
