<script setup>
import Table from './Table.vue';

const title = 'Revenue Report';

const fields = [
  {
    title: 'Shift',
    tooltip: '',
  },
  {
    title: 'Baby Blue Rev',
    tooltip: '',
    format: 'currencyCompact',
    scale: 2,
    color: 'red',
  },
  {
    title: 'Bright Blue Rev',
    tooltip: '',
    format: 'currencyCompact',
    color: 'yellow',
  },
  {
    title: 'Bold Blue Rev',
    tooltip: '',
    format: 'currencyCompact',
    color: 'light-blue',
  },
  {
    title: 'Big Blue Rev',
    tooltip: '',
    format: 'currencyCompact',
    color: 'blue',
  },
  {
    title: 'Total Revenue',
    tooltip: '',
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

const topFields = [
  {
    title: 'Location(s)',
  },
  {
    title: 'Active Revenue',
    tooltip: 'Revenue received on the 1st for lessons occuring this month',
    format: 'currencyCompact',
    color: 'blue',
  },
  {
    title: 'New Revenue',
    tooltip: 'Revenue received mid-month for lesson occurring this month',
    format: 'currencyCompact',
    color: 'blue',
  },
  {
    title: 'Deferred Revenue',
    tooltip: 'Revenue previously received for lessons occuring this month',
    format: 'currencyCompact',
    color: 'blue',
  },
  {
    title: 'Total Revenue',
    tooltip: 'Total revenue received for the lessons occurring this month',
    format: 'currencyCompact',
    color: 'blue',
  },
  {
    title: 'Future Revenue',
    tooltip: 'Revenue received mid-month for lessons in future months',
    format: 'currencyCompact',
    color: 'yellow',
  },
];

const topData = [
  {
    locationName: 'Location Name',
    activeRevenue: 250000,
    newRevenue: 20000,
    deferredRevenue: 10000,
    totalRevenue: 280000,
    futureRevenue: 30000,
  },
];
</script>

<template>
  <main>
    <Table :fields="topFields" :data="topData" class="mb-16" />
    <Table :fields="fields" :data="data" />
  </main>
</template>
