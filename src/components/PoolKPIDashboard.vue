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
    dataFields: [
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
        format: 'percent',
        scale: 0,
      },
    ],
  },
  {
    title: 'Lesson Performance',
    color: 'blue',
    dataFields: [
      {
        title: 'ATLs',
        format: 'integer',
      },
      {
        title: 'AWLs',
        format: 'integer',
      },
      {
        title: 'Net Lessons',
        format: 'integer',
      },
      {
        title: 'Churn Rate',
        format: 'percent',
        scale: 2,
      },
    ],
  },
  {
    title: 'Trial Performance',
    color: 'light-blue',
    dataFields: [
      {
        title: 'Attended Trials',
        format: 'integer',
      },
      {
        title: 'Total Trial Conversions',
        format: 'integer',
      },
    ],
  },
  {
    title: 'Operational Performance',
    color: 'yellow',
    dataFields: [
      {
        title: 'Deployed Capacity',
        format: 'decimal',
        scale: 1,
      },
      {
        title: 'ATL Capacity Utilization',
        format: 'percent',
        scale: 2,
      },
      {
        title: 'AQL Capacity Utilization',
        format: 'percent',
        scale: 2,
      },
      {
        title: 'NPS Score',
        format: 'decimal',
        scale: 2,
      },
    ],
  },
];

const data = [
  {
    month: 'Aug',
    totalRevenue: 90.5,
    arpu: 100,
    vcPctOfRevenue: 0.9,
    atls: 10,
    awls: 10,
    netLessons: 0.5,
    churnRate: 0.08,
    attendedTrials: 15,
    totalTrialConverstions: 9,
    deployedCapacity: 108,
    atlCapacityUtilization: 0.5,
    awlCapacityUtilization: 0.5,
    npsScore: 75,
  },
  {
    month: 'Jul',
    totalRevenue: 90.5,
    arpu: 100,
    vcPctOfRevenue: 0.9,
    atls: 10,
    awls: 10,
    netLessons: 0.5,
    churnRate: 0.08,
    attendedTrials: 15,
    totalTrialConverstions: 9,
    deployedCapacity: 108,
    atlCapacityUtilization: 0.5,
    awlCapacityUtilization: 0.5,
    npsScore: 75,
  },
  {
    month: 'Jun',
    totalRevenue: 90.5,
    arpu: 100,
    vcPctOfRevenue: 0.9,
    atls: 10,
    awls: 10,
    netLessons: 0.5,
    churnRate: 0.085,
    attendedTrials: 15,
    totalTrialConverstions: 9,
    deployedCapacity: 108,
    atlCapacityUtilization: 0.5,
    awlCapacityUtilization: 0.5,
    npsScore: 75,
  },
  {
    month: 'May',
    totalRevenue: 90.5,
    arpu: 100,
    vcPctOfRevenue: 0.9,
    atls: 10,
    awls: 10,
    netLessons: 0.5,
    churnRate: 0.08,
    attendedTrials: 15,
    totalTrialConverstions: 9,
    deployedCapacity: 108,
    atlCapacityUtilization: 0.5,
    awlCapacityUtilization: 0.5,
    npsScore: 75,
  },
  {
    month: 'Apr',
    totalRevenue: 90.5,
    arpu: 100,
    vcPctOfRevenue: 0.9,
    atls: 10,
    awls: 10,
    netLessons: 0.5,
    churnRate: 0.057,
    attendedTrials: 15,
    totalTrialConverstions: 9,
    deployedCapacity: 108,
    atlCapacityUtilization: 0.5,
    awlCapacityUtilization: 0.5,
    npsScore: 75,
  },
  {
    month: 'Mar',
    totalRevenue: 90.5,
    arpu: 100,
    vcPctOfRevenue: 0.9,
    atls: 10,
    awls: 10,
    netLessons: 0.5,
    churnRate: 0.08,
    attendedTrials: 15,
    totalTrialConverstions: 9,
    deployedCapacity: 108,
    atlCapacityUtilization: 0.5,
    awlCapacityUtilization: 0.5,
    npsScore: 75,
  },
  {
    month: 'Feb',
    totalRevenue: 90.5,
    arpu: 100,
    vcPctOfRevenue: 0.9,
    atls: 10,
    awls: 10,
    netLessons: 0.5,
    churnRate: 0.08,
    attendedTrials: 15,
    totalTrialConverstions: 9,
    deployedCapacity: 108,
    atlCapacityUtilization: 0.5,
    awlCapacityUtilization: 0.5,
    npsScore: 75,
  },
  {
    month: 'Jan',
    totalRevenue: 90.5,
    arpu: 100,
    vcPctOfRevenue: 0.9,
    atls: 10,
    awls: 10,
    netLessons: 0.5,
    churnRate: 0.08,
    attendedTrials: 15,
    totalTrialConverstions: 9,
    deployedCapacity: 108,
    atlCapacityUtilization: 0.5,
    awlCapacityUtilization: 0.5,
    npsScore: 75,
  },
];
</script>

<template>
  <main>
    <Table :fields="fields" :data="data" />
  </main>
</template>
