<template>
  <article class="border border-light-pink shadow-light-pink shadow-lg rounded-xl px-8 lg:px-8 py-6 lg:py-8 bg-white ">
    <div class="flex items-center justify-start">
      <div class="mr-8" aria-labelledby="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" fill="none" viewBox="0 0 40 41">
          <path fill="#AD28EB"
            d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z" />
        </svg>
      </div>
      <h1 class="text-dark-purple text-5xl lg:text-6xl font-bold">
        {{ articleTitle }}
      </h1>
    </div>

    <div>
      <section v-for="(faq,index) in faqData" class="py-5 border-b border-light-pink last:border-none last:pb-0">
        <!-- Question and SVG Icon -->
        <div @click="toggleAccordion(index)" class="flex items-center justify-between" tabindex="0.5">
          <h2
            class="text-base md:text-lg text-pretty font-semibold text-dark-purple hover:text-hover-color hover:cursor-pointer focus:text-gray-purple w-10/12"
            id="hide-answer">
            {{ faq.faqQuestion }}
          </h2>
          <!-- SVG Icons -->
          <div role="button">
            <a v-if="activeIndex === index" href="#hide-answer" aria-label="hide answer">
              <img src="/assets/images/icon-minus.svg" alt="" aria-hidden="true">
            </a>
            <a v-else href="#show-answer" aria-label="show answer">
              <img src="/assets/images/icon-plus.svg" alt="" aria-hidden="true">
            </a>
          </div>
        </div>
        <!-- Answer to Question -->
        <Transition name="slide-fade" appear>
          <p v-if="activeIndex === index" class="text-gray-purple text-sm lg:text-base text-pretty mt-5" id="show-answer">
            {{ faq.faqResponse }}
          </p>
        </Transition>
      </section>
    </div>

  </article>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      articleTitle: "FAQs",
      faqData: [{
        faqQuestion: "What is Frontend Mentor, and how will it help me?",
        faqResponse: "Frontend Mentor offers realistic coding challenges to help developers improve their \
frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for \
all levels and ideal for portfolio building."
      },
      {
        faqQuestion: "Is Frontend Mentor free?",
        faqResponse: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free \
option providing access to a range of projects suitable for all skill levels."
      },
      {
        faqQuestion: "Can I use Frontend Mentor projects in my portfolio?",
        faqResponse: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent \
way to showcase your skills to potential employers!"
      },
      {
        faqQuestion: "How can I get help if I'm stuck on a challenge?",
        faqResponse: "The best place to get help is inside Frontend Mentor's Discord community. There's a help \
channel where you can ask questions and seek support from other community members."
      }
      ],
    }
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = (this.activeIndex === index) ? null : index;
    }
  }
}
</script>


<style>
.slide-fade-enter-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(0.4, 0.5, 0.55, 0.9);
}

.slide-fade-enter-from {
  transform: translateY(20px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
</style>