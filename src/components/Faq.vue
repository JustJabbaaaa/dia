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
                <div class="faq__content--question" @click="toggleAccordion(1)">Lorem ipsum dolor sit amet consectetures?
                    <span class="accordion-icon" :class="{ expanded: accordionIndex === 1 }">
                        <svg height="1.5rem" width="1.5rem" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
                    </span>
                </div>
                <div class="faq__content--answer" :class="{ expanded: accordionIndex === 1 }">
                    <div class="faq__content--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a unde veritatis velit molestias deleniti neque, culpa ducimus nesciunt laborum nemo consequuntur, cum fugiat, ipsa est alias repellat sed adipisci!
                    Nihil facilis, enim quos odio aspernatur perspiciatis numquam quibusdam nemo ratione, ipsum quae rerum dicta autem qui consequatur dolorum vero consequuntur officia esse repudiandae. Facilis eligendi impedit earum id mollitia.</div>
                </div>
            </div>
            
            <div class="faq__content--accordion" :class="{ bg: accordionIndex === 2 }">
                <div class="faq__content--question" @click="toggleAccordion(2)">Lorem ipsum dolor sit amet consectetur adipisicing elit?
                    <span class="accordion-icon" :class="{ expanded: accordionIndex === 2 }">
                        <svg height="1.5rem" width="1.5rem" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
                    </span>
                </div>
                <div class="faq__content--answer" :class="{ expanded: accordionIndex === 2 }">
                    <div class="faq__content--text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, reiciendis excepturi, magnam culpa ad labore magni assumenda ducimus quos fugiat molestias iste odio at mollitia nam eligendi voluptate. Nam, porro.
                    Sapiente quae possimus labore, nulla inventore quisquam sint quaerat ut, eius quia, esse iure et minus rem odio placeat ducimus soluta repellendus est nesciunt deleniti cumque? Aperiam deserunt mollitia maxime.</div>
                </div>
            </div>
            <div class="faq__content--accordion" :class="{ bg: accordionIndex === 3 }">
                <div class="faq__content--question" @click="toggleAccordion(3)">Lorem ipsum dolor sit?
                    <span class="accordion-icon" :class="{ expanded: accordionIndex === 3 }">
                        <svg height="1.5rem" width="1.5rem" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
                    </span>
                </div>
                <div class="faq__content--answer" :class="{ expanded: accordionIndex === 3 }">
                    <div class="faq__content--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi alias voluptatum dolore, odit ipsam et nihil aperiam. Sed necessitatibus totam consequatur consequuntur beatae, tempore accusamus minus excepturi accusantium eos.
                    Ad velit recusandae ipsum quidem doloremque facere hic error magnam eligendi suscipit, delectus debitis culpa illo id sunt saepe, expedita ut ducimus totam accusamus vitae accusantium quo odit illum? Blanditiis!</div>
                </div>
            </div>
        </div>
    </Section>
</template>