<script setup lang="ts">
  const pageUrl = 'Orion Accounts Manager';
  const pageTitle = 'Orion Accounts Manager';
  const pageDescription = 'Store your accounts, monitor key stats, and never lose access again.';
  useHead({
    htmlAttrs: {
      lang: 'pl'
    },
    meta: [
      { name: 'charset', content: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: pageDescription },
      { name: 'format-detection', content: 'telephone=yes'},
      { name: 'keywords', content: 'vue, nuxtjs'},
      { name: 'robots', content: 'index, follow'}
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
    ],
  });
  useSeoMeta({
    ogTitle: pageTitle,
    ogDescription: pageDescription,
    ogUrl: pageUrl,
    twitterTitle: pageTitle,
    twitterDescription: pageDescription,
  })
  // defineOgImageComponent('NuxtSeo', {
  //   title: pageUrl + '👋',
  //   description: pageDescription,
  //   theme: '#e13428',
  //   colorMode: 'dark',
  // })
</script>

<template>
  <NuxtPage />
</template>
