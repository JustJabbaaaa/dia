<script setup>
  const pageTitle = 'Home';
  useHead({
    title: pageTitle,
  });
  
  const about = computed(() => [
    {
      icon: 'logo',
      title: 'Lorem, ipsum.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quam nobis eveniet vero! Ea, facere, natus sint velit odit iusto amet quibusdam deleniti possimus, vitae esse exercitationem eius earum temporibus?',
    },
    {
      icon: 'logo',
      title: 'Lorem, ipsum.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quam nobis eveniet vero! Ea, facere, natus sint velit odit iusto amet quibusdam deleniti possimus, vitae esse exercitationem eius earum temporibus?',
    },
    {
      icon: 'logo',
      title: 'Lorem, ipsum.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quam nobis eveniet vero! Ea, facere, natus sint velit odit iusto amet quibusdam deleniti possimus, vitae esse exercitationem eius earum temporibus?',
    },
  ])
</script>

<template>
  <div class="app home">
    <Navbar />
    <Header />
    <!-- <Section anchor="About" title="About us" subtitle="The power of Vue Components" grid="2">
      <div class="about__content">
        <h3>{{ about.title }}</h3>
        <p>{{ about.description }}</p>
      </div>
      <div class="about__image">
        <NuxtImg src="/images/about/about_image.webp" alt="Section Image" height="800" width="800" loading="lazy" />
      </div>
    </Section> -->
    <Section anchor="About" title="Lorem ipsum." subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quam nobis eveniet vero! Ea, facere, natus sint velit odit iusto amet quibusdam deleniti" grid="3">
      <!-- <div class="services__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi, fuga ut vel velit tempora iusto, optio in atque earum molestias deserunt nobis nemo excepturi! Ad molestias consectetur minima itaque.
      Voluptas error molestiae, est illum culpa repudiandae ducimus fugiat atque totam voluptatem, quod officiis nostrum eum ad quae accusantium cumque sint. Soluta magnam similique reprehenderit in numquam facilis vero tenetur!</div> -->
      <div v-for="item in about" :key="item.title" class="about__card">
        <div class="about__card--img">
          <NuxtImg :src="`/images/logo/${item.icon}.png`"/>
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
    <Numbers />
    <Pricing />
    <Faq />
    <Contact />
    <!-- <Section anchor="Contact" title="Contact" subtitle="Build amazing web sites." grid="1">
      <div class="contact__content">
        <div class="contact__content--title">
          <h3>{{ contact.title }}</h3>
        </div>
        <div class="contact__content--description">
          <p>{{ contact.description }}</p>
        </div>
        <div class="contact__content--buttons">
          <NuxtLink :to="`mailto:${contact.mail}`" class="btn btn-primary" target="_blank">{{ contact.btnMail }}</NuxtLink>
          <NuxtLink :to="`tel:${contact.phone}`" class="btn btn-secondary--outline" target="_blank">{{ contact.btnCall }}</NuxtLink>
        </div>
      </div>
    </Section> -->
    <Footer />
  </div>
</template>
<!-- <style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
</style> -->