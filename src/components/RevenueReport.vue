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
    format: 'currencyCompact',
    group: 3,
  },
  {
    title: 'Bright Blue Rev',
    hint: '',
    format: 'currencyCompact',
    group: 2,
  },
  {
    title: 'Bold Blue Rev',
    hint: '',
    format: 'currencyCompact',
    group: 4,
  },
  {
    title: 'Big Blue Rev',
    hint: '',
    format: 'currencyCompact',
    group: 1,
  },
  {
    title: 'Total Revenue',
    hint: '',
    format: 'currencyCompact',
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
    <Table :fields="fields" :data="data" />
  </main>
</template>
