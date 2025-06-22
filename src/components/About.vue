<script setup>
  
  const about = computed(() => [
    {
      icon: 'lock',
      title: 'Secure Account Storage',
      description: 'Keep all your League of Legends account details safe in one place. Multiple encryption layers ensure your data is protected at all times.',
    },
    {
      icon: 'notif',
      title: 'Game Stats & Decay Alerts',
      description: 'Track your League of Legends stats, including win rates, champion pool, and match history — all in one place. Stay ahead of rank decay with handy notifications when it’s time to play again.',
    },
    {
      icon: 'passwd',
      title: 'Easy Password & Multi-Account Management',
      description: 'Effortlessly manage all your League of Legends accounts and their credentials. Switch between accounts with a click and securely store usernames, passwords, and other critical data — so you never lose access again.',
    },
  ])
</script>

<template>
    <Section anchor="About" title="What Makes OAM Unique?" subtitle="We designed Orion Accounts Manager to keep everything you need at your fingertips. Here’s what you get:" grid="3">
      <div v-for="item in about" :key="item.title" class="about__card">
        <div class="about__card--img">
          <NuxtImg :src="`/images/about/${item.icon}.png`"/>
        </div>
        <div class="about__card--right">
          <div class="about__card--title">
            <p>{{ item.title }}</p>
          </div>
          <div class="about__card--description">
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </Section>
</template>