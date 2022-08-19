<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  title: String,
  fields: Array,
  fieldDescriptions: Array,
  data: Array,
});

const dataArr = computed(() => {
  return props.data.map((record) => Object.values(record));
});

const hasSubTitles = computed(() =>
  props.fields.some((field) => field.subTitle)
);

const hasDataFields = computed(() =>
  props.fields.some((field) => field.dataFields)
);

const fieldCount = computed(() => {
  if (!hasDataFields.value) return props.fields.length;

  return props.fields.reduce(
    (count, field) => count + (field?.dataFields?.length ?? 1),
    0
  );
});

const dataFields = computed(() => {
  if (!hasDataFields.value) return props.fields;

  return props.fields.reduce((fields, field) => {
    const dataFields = field?.dataFields?.map((child) => ({
      ...child,
      color: `${field.color}/40`,
    })) ?? [field];

    return [...fields, ...dataFields];
  }, []);
});

const titleColSpan = computed(() => props.fields.length - 1);
const titleRowSpan = computed(() => {
  const initialSpan = props.title ? 2 : 1;
  const subTitleOffest = hasSubTitles.value ? 1 : 0;

  return initialSpan + subTitleOffest;
});

const colWidth = computed(() => `${100 / fieldCount.value}%`);

function isPrimitiveValue(value) {
  return ['number', 'string'].includes(typeof value);
}

function formatField(value, config = {}) {
  const { format = 'string', scale = 2 } = config;

  const FORMATTERS = {
    currency: (val, scale) => formatCurrency(val, scale),
    currencyCompact: formatCurrencyCompact,
    percent: formatPercent,
    integer: (val) => val.toFixed(0),
    decimal: (val, scale) => val.toFixed(scale),
  };

  return FORMATTERS?.[format]?.(value, scale) ?? value;
}

function formatCurrency(value, scale, currency = 'USD', i18n = 'en-US') {
  const integerFormatter = new Intl.NumberFormat(i18n, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const fractionFormatter = new Intl.NumberFormat(i18n, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  });

  return value % 1 === 0
    ? integerFormatter.format(value)
    : fractionFormatter.format(value);
}

function formatCurrencyCompact(value, scale = 2) {
  let suffix;
  let _value;

  const kValue = value / 1000;
  const mValue = kValue / 1000;

  if (mValue >= 1) {
    _value = mValue;
    suffix = 'M';
  } else if (kValue >= 1) {
    _value = kValue;
    suffix = 'K';
  } else {
    _value = value;
    suffix = '';
  }

  const fixedValue = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: scale,
  }).format(_value);

  return '$' + fixedValue + suffix;
}

function formatPercent(value, scale = 0) {
  return new Intl.NumberFormat('en-us', {
    style: 'percent',
    maximumFractionDigits: scale,
  }).format(value);
}
</script>

<template>
  <table>
    <thead>
      <!-- Title Row -->
      <tr v-if="title">
        <th :rowspan="titleRowSpan">{{ fields[0].title }}</th>
        <th :colspan="titleColSpan">{{ title }}</th>
      </tr>

      <!-- Group Field Row -->
      <tr v-if="hasDataFields">
        <th
          v-if="!title"
          :rowspan="titleRowSpan"
          :data-color="dataFields[0].color"
        >
          {{ dataFields[0].title }}
        </th>
        <th
          v-for="(group, groupIndex) in fields.slice(1)"
          :key="`group-${groupIndex}`"
          :colspan="group?.dataFields?.length ?? 1"
          :data-color="group.color"
        >
          {{ group.title }}
        </th>
      </tr>

      <!-- Data Field Row -->
      <tr>
        <th
          v-if="!title"
          :rowspan="titleRowSpan"
          :data-color="dataFields[0].color"
        >
          {{ dataFields[0].title }}
        </th>
        <th
          v-for="(field, fieldIndex) in dataFields.slice(1)"
          :key="`${field.title}-${fieldIndex}`"
          :data-group="field.group"
          :data-color="field.color"
          v-tooltip="{ text: field?.tooltip ?? '', displayArrow: true }"
        >
          <div class="flex justify-center align-center space-x-1">
            <span>
              {{ field.title }}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 fill-primary-dark"
              viewBox="0 0 20 20"
              v-if="field.tooltip"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </th>
      </tr>

      <!-- Sub-Title Row -->
      <tr v-if="hasSubTitles">
        <td
          v-for="(field, fieldIndex) in fields.slice(1)"
          :key="`${field.title}-${fieldIndex}`"
        >
          {{ field.subTitle }}
        </td>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(record, recordIndex) in dataArr" :key="recordIndex">
        <component
          :is="fieldIndex === 0 ? 'th' : 'td'"
          v-for="(fieldValue, fieldIndex) in record"
          :key="fieldIndex"
          v-tooltip="{ text: fieldValue?.tooltip ?? '', displayArrow: true }"
        >
          <template v-if="isPrimitiveValue(fieldValue)">
            {{ formatField(fieldValue, dataFields[fieldIndex]) }}
          </template>
          <template v-else>
            <div class="flex justify-center align-center space-x-1">
              <span>{{
                formatField(fieldValue.value, dataFields[fieldIndex])
              }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 fill-primary-dark"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </template>
        </component>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="postcss">
table {
  @apply text-primary-dark;
  border-collapse: collapse;
  border-style: hidden;
  text-align: center;
  vertical-align: middle;
  width: 100%;
}

thead {
  @apply bg-white;
  color: white;
  font-size: 1rem;
  font-weight: 900;
}

th,
td {
  padding: 8px;
  border: 2px solid white;
  position: relative;
}

th {
  width: v-bind(colWidth);
  font-weight: 600;
}

thead th {
  @apply bg-primary-dark;
}

thead td {
  @apply bg-slate-300 text-primary-dark;
  font-size: 0.85rem;
  font-weight: 400;
}

thead tr:first-of-type th:first-of-type {
  text-align: left;
}

thead th[data-color='white'] {
  @apply text-primary-dark bg-white;
}

thead th[data-color='dark-blue'] {
  @apply text-white bg-primary-dark;
}

thead th[data-color='dark-blue/40'] {
  @apply text-primary-dark bg-primary-dark/40;
}

thead th[data-color='blue'] {
  @apply text-white bg-primary;
}

thead th[data-color='blue/40'] {
  @apply text-primary-dark bg-primary/40;
}

thead th[data-color='light-blue'] {
  @apply text-primary-dark bg-primary-light;
}

thead th[data-color='light-blue/40'] {
  @apply text-primary-dark bg-primary-light/40;
}

thead th[data-color='red'] {
  @apply text-primary-dark bg-secondary;
}

thead th[data-color='red/40'] {
  @apply text-primary-dark bg-secondary/40;
}

thead th[data-color='pink'] {
  @apply text-primary-dark bg-secondary-light;
}

thead th[data-color='pink/40'] {
  @apply text-primary-dark bg-secondary-light/40;
}

thead th[data-color='yellow'] {
  @apply text-primary-dark bg-accent;
}

thead th[data-color='yellow/40'] {
  @apply text-primary-dark bg-accent/40;
}

tbody th {
  text-align: left;
}

tbody tr:nth-child(odd) {
  @apply bg-slate-100;
}

tbody tr:nth-child(even) {
  @apply bg-slate-300;
}

/* Adds/alternates first field
 * not loving the look
tbody th {
  @apply bg-slate-300;
  text-align: left;
}

tbody tr:nth-child(even) th {
  @apply bg-slate-100;
}
*/

tbody tr:hover th {
  @apply bg-accent;
}

tbody tr:hover td {
  @apply bg-accent;
  font-weight: 600;
}

/** Adds upper-right triangle to element
.tooltip {
  position: relative;
}

.tooltip:after {
  --tooltip-color: #2157d6;
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  display: block;
  border-left: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-top: 12px solid var(--tooltip-color);
} */
</style>
