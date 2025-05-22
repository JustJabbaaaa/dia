<script setup lang="ts">
const active = ref(false);

const navigation = computed(() => [
  { name: 'Home', link: '/#Header' },
  { name: 'About', link: '/#About' },
  { name: 'FAQ', link: '/#FAQ' },
  { name: 'Contact', link: '/#Contact' },
])
const colorMode = useColorMode()
console.log(colorMode.preference)
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
};
const handleScroll = () => {
  const navbar = document.getElementById("Navbar")
  const navClasses = navbar?.classList
  if (navbar && navClasses) {
    if(document.documentElement.scrollTop > 50) {
      if (navClasses.contains("active") === false) {
        navClasses.toggle("active");
      }
    }
    else {
      (navClasses.contains("active") === true) 
      navClasses.toggle("active"); 
    }
  }
}

onMounted(() => {
  window.addEventListener("scroll", function(){
    handleScroll();
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <div id="Navbar">
    <nav class="nav">
      <div class="container">
        <NuxtLink to="/" class="nav__brand" aria-label="Go to homepage"><NuxtImg src="/images/logo/logo.png" alt="Nuxt logo" /></NuxtLink>
        <button class="nav__toggler" type="button" aria-label="Toggle navigation" @click="active = !active">
          <div class="nav__toggler--btn" :class="{ 'active': active }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div class="nav__collapse" :class="{ 'show': active }">
          <NuxtLink to="/" class="nav__brand menux" aria-label="Go to homepage" ><NuxtImg src="/images/logo/logo.png" alt="Nuxt logo" /></NuxtLink>
          <div class="nav__menu">
            <ul class="nav__list">
              <li class="nav__item" v-for="item in navigation" :key="item.name">
                <NuxtLink :to="item.link" class="nav__link" @click="active = !active">{{ item.name }}</NuxtLink> 
              </li>
            </ul>
          </div>
          <div class="nav__menu--right">
            <NuxtLink to="https://app.orionaccountsmanager.com/" class="nav__link btn btn-primary" target="_blank">Go to App</NuxtLink>
            <button class="btn" @click="toggleColorMode">
              <span class="darkmode" v-if="colorMode.value === 'dark'">
                <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-light-bulb" fill="#000000">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier"> <defs> </defs> 
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> 
                      <g transform="translate(3.000000, 0.000000)" fill="black"> 
                        <path d="M10,3.991 C10,1.422 7.729,0.015 5,0.015 C2.271,0.015 0,1.421 0,3.991 C0,7.29 2.087,8.188 3.312,10.269 C3.576,10.718 2.822,10.496 3.077,10.952 L6.895,10.952 C7.147,10.5 6.3,10.723 6.562,10.276 C7.782,8.192 10,7.375 10,3.991 L10,3.991 Z" class="si-glyph-fill bulb"> </path> 
                        <rect x="3" y="12" width="3.953" height="0.922" class="si-glyph-fill"> </rect> 
                        <path d="M6.969,14.968 C6.969,15.529 6.535,15.985 5.998,15.985 L4.014,15.985 C3.476,15.985 3.042,15.529 3.042,14.968 L3.042,14.021 L6.969,14.021 L6.969,14.968 L6.969,14.968 Z" class="si-glyph-fill"> </path> 
                      </g> 
                    </g> 
                  </g>
                </svg>
              </span>
              <span class="lightmode" v-else>
                <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-light-bulb" fill="#000000">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier"> <defs> </defs> 
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> 
                      <g transform="translate(3.000000, 0.000000)" fill="black"> 
                        <path d="M10,3.991 C10,1.422 7.729,0.015 5,0.015 C2.271,0.015 0,1.421 0,3.991 C0,7.29 2.087,8.188 3.312,10.269 C3.576,10.718 2.822,10.496 3.077,10.952 L6.895,10.952 C7.147,10.5 6.3,10.723 6.562,10.276 C7.782,8.192 10,7.375 10,3.991 L10,3.991 Z" class="si-glyph-fill bulb"> </path> 
                        <rect x="3" y="12" width="3.953" height="0.922" class="si-glyph-fill"> </rect> 
                        <path d="M6.969,14.968 C6.969,15.529 6.535,15.985 5.998,15.985 L4.014,15.985 C3.476,15.985 3.042,15.529 3.042,14.968 L3.042,14.021 L6.969,14.021 L6.969,14.968 L6.969,14.968 Z" class="si-glyph-fill"> </path> 
                      </g> 
                    </g> 
                  </g>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>