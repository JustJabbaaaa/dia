<template>
    <Section anchor="Contact" title="Contact" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia.">
            <form action="https://formspree.io/" method="POST" class="contact__form">
                <div class="contact__form">
                        <div class="contact__form--group">
                            <label for="name">Name</label>
                            <input id="name" type="text" name="name" placeholder="Type your name" required />
                        </div>
                        <div class="contact__form--group">
                            <label for="email">E-mail</label>
                            <input id="email" type="email" name="email" placeholder="Your email address" required />
                        </div>
                        <div class="contact__form--group message">
                            <label for="message">Message</label>
                            <textarea id="message" type="message" name="message" placeholder="Your message" required />
                        </div> 
                </div>
                <button class="contact__form--submit btn btn-primary" type="submit">Send</button>
            </form>
    </Section>
</template>