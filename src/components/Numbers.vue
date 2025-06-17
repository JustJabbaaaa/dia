<script setup>
const colorMode = useColorMode();
</script>
<template>
    <Section 
        anchor="Numbers" 
        title="Why Choose Orion Accounts Manager?" 
        subtitle="We’re just getting started, but our mission is clear: to make League account management simple, secure, and stress-free. Here’s where we are right now:" 
        grid="4"
    >
        <div class="numbers__card">
            <NuxtImg class="numbers__card--image" src="/images/statistics/schedule.png"/>
            <div class="left">
                <div class="numbers__card--number">1+<br>Year</div>
                <div class="numbers__card--title">Orion has been active in the gaming industry</div>
            </div>
        </div>
        <div class="numbers__card">
            <NuxtImg class="numbers__card--image" src="/images/statistics/users.png"/>
            <div class="left">
                <div class="numbers__card--number">2000+<br>Active Users</div>
                <div class="numbers__card--title">Our community is growing every day</div>
            </div>
        </div>
        <div class="numbers__card">
            <NuxtImg class="numbers__card--image" src="/images/statistics/lock.png"/>
            <div class="left">
                <div class="numbers__card--number">100%<br>Encryption</div>
                <div class="numbers__card--title">Your data stays private and secure</div>
            </div>
        </div>
        <div class="numbers__card">
            <NuxtImg class="numbers__card--image" src="/images/statistics/support.png"/>
            <div class="left">
                <div class="numbers__card--number">24/7<br>Support</div>
                <div class="numbers__card--title">Help is always just a click away</div>
            </div>
        </div>
    </Section>
</template>
