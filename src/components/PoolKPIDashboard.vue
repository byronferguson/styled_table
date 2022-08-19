<script setup>
import Table from './Table.vue';

const title = 'Promo Sales';

const fields = [
  {
    title: '',
    color: 'white',
  },
  {
    title: 'Financial Performance',
    color: 'dark-blue',
    children: [
      {
        title: 'Total Revenue',
        format: 'currency',
        scale: 0,
      },
      {
        title: 'ARPU',
        format: 'currency',
        scale: 0,
      },
      {
        title: 'VC % of Rev',
        format: 'currency',
        scale: 0,
      },
    ],
  },
  {
    title: 'Lesson Performance',
    format: 'currency',
    scale: 0,
    color: 'blue',
    children: [
      {
        title: 'ATLs',
        format: 'currency',
        scale: 0,
      },
      {
        title: 'AWLs',
        format: 'currency',
        scale: 0,
      },
      {
        title: 'Net Lessons',
        format: 'currency',
        scale: 0,
      },
      {
        title: 'Churn Rate',
        format: 'currency',
        scale: 0,
      },
    ],
  },
  {
    title: 'Trial Performance',
    format: 'currency',
    scale: 0,
    color: 'light-blue',
    children: [
      {
        title: 'Attended Trials',
        format: 'currency',
        scale: 0,
      },
      {
        title: 'Total Trial Conversions',
        format: 'currency',
        scale: 0,
      },
    ],
  },
  {
    title: 'Operational Performance',
    format: 'integer',
    color: 'yellow',
    children: [
      {
        title: 'Deployed Capacity',
        format: 'currency',
        scale: 0,
      },
      {
        title: 'ATL Capacity Utilization',
        format: 'currency',
        scale: 0,
      },
      {
        title: 'AQL Capacity Utilization',
        format: 'currency',
        scale: 0,
      },
      {
        title: 'NPS Score',
        format: 'currency',
        scale: 0,
      },
    ],
  },
];

const data = [
  {
    locationName: 'Buffalo Grove',
    salesTotal: 90.5,
    salesGoal: 100,
    goalPercent: 0.9,
    salesAverage: 10,
    scheduleTotal: 10,
    schedulePercent: 0.5,
    withdrawals: 5,
    withdrawalsPercent: 0.15,
  },
  {
    locationName: 'Chicago - North Center',
    salesTotal: 90,
    salesGoal: 100,
    goalPercent: 0.9,
    salesAverage: 10,
    scheduleTotal: 10,
    schedulePercent: 0.5,
    withdrawals: 5,
    withdrawalsPercent: 0.15,
  },
  {
    locationName: 'Hoffman Estates',
    salesTotal: 90,
    salesGoal: 100,
    goalPercent: 0.9,
    salesAverage: 10,
    scheduleTotal: 10,
    schedulePercent: 0.5,
    withdrawals: 5,
    withdrawalsPercent: 0.15,
  },
  {
    locationName: 'Niles',
    salesTotal: 90,
    salesGoal: 100,
    goalPercent: 0.9,
    salesAverage: 10,
    scheduleTotal: 10,
    schedulePercent: 0.5,
    withdrawals: 5,
    withdrawalsPercent: 0.15,
  },
  {
    locationName: 'Wilmette',
    salesTotal: 90,
    salesGoal: 100,
    goalPercent: 0.9,
    salesAverage: 10,
    scheduleTotal: 10,
    schedulePercent: 0.5,
    withdrawals: 5,
    withdrawalsPercent: 0.15,
  },
  {
    locationName: 'Johns Creek',
    salesTotal: 90,
    salesGoal: 100,
    goalPercent: 0.9,
    salesAverage: 10,
    scheduleTotal: 10,
    schedulePercent: 0.5,
    withdrawals: 5,
    withdrawalsPercent: 0.15,
  },
  {
    locationName: 'Total',
    salesTotal: 90,
    salesGoal: 100,
    goalPercent: 0.9,
    salesAverage: 10,
    scheduleTotal: 10,
    schedulePercent: 0.5,
    withdrawals: 5,
    withdrawalsPercent: 0.15,
  },
];
</script>

<template>
  <main>
    <Table :fields="fields" :data="[]" />
  </main>
</template>
