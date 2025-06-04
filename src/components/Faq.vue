<script setup>
    const accordionIndex = ref(null)

    function toggleAccordion(index) {
    if (accordionIndex.value === index) {
        accordionIndex.value = null
    } else {
        accordionIndex.value = index
    }
}
</script>
<template>
    <Section anchor="FAQ" title="FAQ">
        <div class="faq__content">
            <div class="faq__content--accordion" :class="{ bg: accordionIndex === 1 }">
                <div class="faq__content--question" @click="toggleAccordion(1)">How do I add a new account?
                    <span class="accordion-icon" :class="{ expanded: accordionIndex === 1 }">
                        <svg height="1.5rem" width="1.5rem" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
                    </span>
                </div>
                <div class="faq__content--answer" :class="{ expanded: accordionIndex === 1 }">
                    <div class="faq__content--text">Just click "Add Account" and enter your League of Legends account information. Your data is protected with multiple layers of encryption.</div>
                </div>
            </div>
            <hr>
            <div class="faq__content--accordion" :class="{ bg: accordionIndex === 2 }">
                <div class="faq__content--question" @click="toggleAccordion(2)">Is the app free to use?
                    <span class="accordion-icon" :class="{ expanded: accordionIndex === 2 }">
                        <svg height="1.5rem" width="1.5rem" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
                    </span>
                </div>
                <div class="faq__content--answer" :class="{ expanded: accordionIndex === 2 }">
                    <div class="faq__content--text">Yes! We offer a free plan with basic features. For advanced functionality, you can upgrade to the premium plan.</div>
                </div>
            </div>
            <hr>
            <div class="faq__content--accordion" :class="{ bg: accordionIndex === 3 }">
                <div class="faq__content--question" @click="toggleAccordion(3)">Does the app support different regions?
                    <span class="accordion-icon" :class="{ expanded: accordionIndex === 3 }">
                        <svg height="1.5rem" width="1.5rem" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
                    </span>
                </div>
                <div class="faq__content--answer" :class="{ expanded: accordionIndex === 3 }">
                    <div class="faq__content--text">Absolutely — Orion Accounts Manager supports all League of Legends servers.</div>
                </div>
            </div>
            <hr>
            <div class="faq__content--accordion" :class="{ bg: accordionIndex === 4 }">
                <div class="faq__content--question" @click="toggleAccordion(4)">Is my data safe?
                    <span class="accordion-icon" :class="{ expanded: accordionIndex === 4 }">
                        <svg height="1.5rem" width="1.5rem" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
                    </span>
                </div>
                <div class="faq__content--answer" :class="{ expanded: accordionIndex === 4 }">
                    <div class="faq__content--text">Yes. We use multiple layers of encryption to keep your account details secure and private. You can focus on playing without worrying about security.</div>
                </div>
            </div>
        </div>
    </Section>
</template>