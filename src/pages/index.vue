<script setup>
  const pageTitle = 'Home';
  useHead({
    title: pageTitle,
  });

  const about = computed(() => ({
    title: 'Lorem, ipsum.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quam nobis eveniet vero! Ea, facere, natus sint velit odit iusto amet quibusdam deleniti possimus, vitae esse exercitationem eius earum temporibus?',
  }))

  const services = computed(() => [
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
  const contact = computed(() => ({
    title: 'Get in touch with us to create lightning-fast websites.',
    description: 'Our team specializes in creating lightning-fast websites that deliver exceptional user experiences. We are dedicated to building web solutions optimized for speed and reliability. Contact us today to discuss how we can help you achieve your website performance goals.',
    mail: 'contact@kdproject.pl',
    phone: '+48 123 123 123',
    btnMail: 'Send Mail',
    btnCall: 'Call us',
  }))
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
    <Section anchor="Services" title="Lorem ipsum." grid="3">
      <div class="services__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi, fuga ut vel velit tempora iusto, optio in atque earum molestias deserunt nobis nemo excepturi! Ad molestias consectetur minima itaque.
      Voluptas error molestiae, est illum culpa repudiandae ducimus fugiat atque totam voluptatem, quod officiis nostrum eum ad quae accusantium cumque sint. Soluta magnam similique reprehenderit in numquam facilis vero tenetur!</div>
      <div v-for="item in services" :key="item.title" class="services__card">
        <div class="services__card--img">
          <NuxtImg :src="`/images/logo/${item.icon}.png`"/>
        </div>
        <div class="services__card--right">
          <div class="services__card--title">
            <p>{{ item.title }}</p>
          </div>
          <div class="services__card--description">
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