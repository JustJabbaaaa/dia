<template>
  <footer class="footer">
    <div class="footer__body">
      <div class="footer__body--content">
        <div class="footer__body--image">
          <NuxtImg src="/images/logo/logo.png"/>
        </div>
        <div class="footer__body--links">
          <p>Social Media:</p>
          <NuxtLink to="https://www.facebook.com">Facebook</NuxtLink>
          <NuxtLink to="https://www.twitter.com">Twitter</NuxtLink>
          <NuxtLink to="https://www.instagram.com">Instagram</NuxtLink>
        </div>
      </div>
      Copyright © {{new Date().getFullYear()}} All rights reserved |  
    </div>
  </footer>
</template>