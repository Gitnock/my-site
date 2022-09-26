<template>
  <div class="p-main">
    <div class="p-top">
      <div class="top-container flex-center">
        <div class="info-content">
          <div class="font-52 roboto-mono-b info-title">Who am I</div>
          <div class="font-28 roboto-mono-m info-subtitle">
            {{ bio }}
          </div>
        </div>
        <Skills :tags="skillTags" />
      </div>
      <div class="scroll-indicator-wrapper" id="indicator">
        <div class="link-mask">
          <h3 class="text-indicator font-16 roboto-mono-m link-title1 link">
            Project Timeline
          </h3>
          <h3
            class="text-indicator font-16 roboto-mono-m link-title2 link clickable"
            @click="goto"
          >
            scroll Down
          </h3>
        </div>
      </div>
    </div>
    <div class="about-bot">
      <div class="timeline" v-for="(project, index) in store.getProjects">
        <div class="timeline--display" v-if="index % 2 === 0">
          <div class="timeline__component">
            <div class="timeline__date timeline__date--right roboto-mono-r">
              {{ toDate(project.date.toMillis()) }}
            </div>
          </div>
          <div class="timeline__middle">
            <div class="timeline__point"></div>
          </div>
          <div class="timeline__component timeline__component--bg">
            <div class="timeline-date-container">
              <div class="timeline-mobile-date roboto-mono-m">
                {{ toDate(project.date.toMillis()) }}
              </div>
            </div>
            <h2 class="timeline__title roboto-mono-m">{{ project.title }}</h2>
            <p class="timeline__paragraph roboto-mono-m">
              {{ project.desc }}
            </p>
            <router-link
              :to="`/project/${project.id}`"
              class="timeline__link roboto-mono-m"
            >
              learn more
            </router-link>
          </div>
        </div>
        <div class="timeline--display" v-else>
          <div class="timeline__component timeline__component--bg">
            <div class="timeline-date-container">
              <div class="timeline-mobile-date roboto-mono-m">
                {{ toDate(project.date.toMillis()) }}
              </div>
            </div>
            <h2 class="timeline__title roboto-mono-m">{{ project.title }}</h2>
            <p class="timeline__paragraph roboto-mono-m">
              {{ project.desc }}
            </p>
            <router-link
              :to="`/project/${project.id}`"
              class="timeline__link roboto-mono-m"
            >
              learn more
            </router-link>
          </div>
          <div class="timeline__middle">
            <div class="timeline__point"></div>
          </div>
          <div class="timeline__component">
            <div class="timeline__date roboto-mono-r">
              {{ toDate(project.date.toMillis()) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/store';
import Skills from '@/components/skills.vue';
import { onMounted, ref } from 'vue';
import { doc, getDoc } from '@firebase/firestore';
import { db } from '@/firebase';

const store = useStore();
let skillTags = ref<string[]>([]);
let bio = ref('');
const toDate = (ms: number) => {
  return new Date(ms).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

const getBio = async () => {
  const bioRef = doc(db, 'about', 'enock');
  const docSnap = await getDoc(bioRef);
  if (docSnap.exists()) {
    const { skills, about } = docSnap.data();
    bio.value = about;
    skillTags.value.push(...skills);
  } else {
    // doc.data() will be undefined in this case
  }
};
const goto = () => {
  const element = document.getElementById('indicator');
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
};
onMounted(() => {
  getBio();
});
</script>

<style lang="scss" scoped>
@import '../assets/styles/flexbox.scss';
@import '@/assets/styles/linkAnim.scss';
/* TOP */
.top-container {
  height: 100%;
  display: flex;
}
.info-content {
  width: 478px;
  padding: 12px 32px;
}
.info-subtitle {
  margin: 8px 0 0 0;
}
.stack-content {
  width: 459px;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  // justify-content: flex-start;
  gap: 12px;
}
.stack-item {
  background-color: #f9fbfc;
  border-radius: 8px;
  height: 59px;
  padding: 0 24px;
}

/* BOTTOM */
.about-bot {
  height: 900px;
  padding: 24px;
}
// timeline
.timeline {
  margin: 0 auto;
  max-width: 975px;
  display: flex;
  flex-direction: column;
  font-family: 'Fira Sans', sans-serif;
  color: black;
}
.timeline--display {
  display: grid;
  grid-template-columns: 1fr 3px 1fr;
}

.timeline__component {
  margin: 0 20px 20px 20px;
}

.timeline__component--bg {
  padding: 1.75em;
  background: #f9fbfc;
  border-radius: 10px;
}
.timeline-mobile-date {
  display: none;
}
/* LEAVE TILL LAST */
.timeline__component--bottom {
  margin-bottom: 0;
}

.timeline__middle {
  position: relative;
  background: black;
  width: 1.5px;
}

.timeline__point {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  background: black;
  border-radius: 2px;
}

/* LEAVE TILL LAST */
.timeline__point--bottom {
  top: initial;
  bottom: 0;
}
.timeline__date {
  font-size: 12px;
}
.timeline__date--right {
  text-align: right;
}

.timeline__title {
  margin: 0;
  font-size: 16px;
}

.timeline__paragraph {
  font-size: 12px;
  line-height: 1.5;
}
.timeline__link {
  text-decoration: none;
  color: #3c74ff;
  font-size: 12px;
}

@media only screen and (max-width: 902px) {
  .top-container {
    flex-wrap: wrap;
    padding: 48px 0;
  }
  .p-top {
    padding: 0 0 42px 0;
  }
}

@media screen and (max-width: 768px) {
  .info-title {
    font-size: 32px;
    text-align: center;
  }
  .info-subtitle {
    font-size: 18px;
    text-align: center;
    margin: 12px 0 0 0;
  }
  .stack-content {
    justify-content: center;
  }
  .stack-item {
    height: 32px;
    padding: 4 12px;
    font-size: 12px;
  }
}
@media screen and (max-width: 524px) {
  .timeline {
    gap: 12px;
  }
  .timeline--display {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .timeline__point {
    display: none;
  }
  .timeline__date {
    display: none;
  }
  .timeline-date-container {
    display: flex;
    padding: 12px 0;
  }
  .timeline-mobile-date {
    display: block;
    font-size: 12px;
  }
  .about-bot {
    padding: 0;
  }
}
</style>
