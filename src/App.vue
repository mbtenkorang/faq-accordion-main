<template>
  <article class="border border-light-pink shadow-light-pink shadow-lg w-10/12 mx-auto rounded-lg px-8 py-6 bg-white">
    <div class="flex items-center justify-start">
      <div class="mr-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 40 41">
          <path fill="#AD28EB"
            d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z" />
        </svg>
      </div>
      <h1 class="text-dark-purple text-4xl font-bold">
        {{ articleTitle }}
      </h1>
    </div>
    <div>
      <section v-for="(faq,index) in faqData" class="py-6 border-b border-light-pink last:border-none last:pb-0">
        <div @click="toggleAccordion(index)" class="flex items-center justify-between">
          <h2 class="text-base text-pretty font-semibold text-dark-purple w-10/12">{{ faq.faqQuestion }}</h2>
          <div>
            <button v-if="activeIndex === index"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="31"
                fill="none" viewBox="0 0 30 31">
                <path fill="#301534"
                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z" />
              </svg></button>
            <button v-else><svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
                <path fill="#AD28EB"
                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z" />
              </svg>
            </button>
          </div>
        </div>
        <p v-if="activeIndex === index" class="text-gray-purple text-sm text-pretty mt-5">{{ faq.faqResponse }}</p>
      </section>
    </div>

  </article>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
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
        faqQuestion: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
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

<!-- <style>
body {
  background-image: url("/assets/images/background-pattern-mobile.svg");
}
</style> -->