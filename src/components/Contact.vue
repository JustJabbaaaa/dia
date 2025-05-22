<template>
    <Section anchor="Contact" title="Contact" subtitle="Contact with us via form below, describe your problem and send it to our support team. We will answer as fast as possible.">
            <form action="https://formspree.io/" method="POST" class="contact__form">
                <div class="contact__form">
                        <div class="contact__form--group">
                            <label for="name">Name</label>
                            <input id="name" type="text" name="name" placeholder="Enter your name" required />
                        </div>
                        <div class="contact__form--group">
                            <label for="email">E-mail</label>
                            <input id="email" type="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div class="contact__form--group">
                            <label for="email">Title</label>
                            <input id="title" type="text" name="title" placeholder="Enter title" required />
                        </div>
                        <div class="contact__form--group message">
                            <label for="message">Message</label>
                            <textarea id="message" type="message" name="message" placeholder="Enter your message" required />
                        </div> 
                </div>
                <button class="contact__form--submit btn btn-primary" type="submit">Send</button>
            </form>
    </Section>
</template>