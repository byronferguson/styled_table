<script setup>
import PromoSales from './components/PromoSales.vue';
import RevenueReport from './components/RevenueReport.vue';
import PoolKPIDashboard from './components/PoolKPIDashboard.vue';
</script>

<template>
  <main class="min-h-screen bg-gray-100 p-12 flex flex-col space-y-8">
    <PoolKPIDashboard />

    <hr class="border-2 border-primary rounded" />

    <PromoSales />

    <hr class="border-2 border-primary rounded" />

    <RevenueReport />
  </main>
</template>
