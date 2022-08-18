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
    scale: 2,
    color: 'red',
  },
  {
    title: 'Bright Blue Rev',
    hint: '',
    format: 'currencyCompact',
    color: 'yellow',
  },
  {
    title: 'Bold Blue Rev',
    hint: '',
    format: 'currencyCompact',
    color: 'light-blue',
  },
  {
    title: 'Big Blue Rev',
    hint: '',
    format: 'currencyCompact',
    color: 'blue',
  },
  {
    title: 'Total Revenue',
    hint: '',
    format: 'currencyCompact',
    scale: 2,
  },
];

const data = [
  {
    shiftName: 'Weekend AM',
    babyBlueRevenue: 5500,
    brightBlueRevenue: 40000,
    boldBlueRevenue: 40000,
    bigBlueRevenue: 15000,
    totalRevenue: 1111001,
  },
  {
    shiftName: 'Weekend AM',
    babyBlueRevenue: 5000,
    brightBlueRevenue: 40000,
    boldBlueRevenue: 40000,
    bigBlueRevenue: 15000,
    totalRevenue: 100000,
  },
  {
    shiftName: 'Weekend AM',
    babyBlueRevenue: 5000,
    brightBlueRevenue: 40000,
    boldBlueRevenue: 40000,
    bigBlueRevenue: 15000,
    totalRevenue: 100000,
  },
  {
    shiftName: 'Weekend AM',
    babyBlueRevenue: 5000,
    brightBlueRevenue: 40000,
    boldBlueRevenue: 40000,
    bigBlueRevenue: 15000,
    totalRevenue: 100000,
  },
  {
    shiftName: 'Total',
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
