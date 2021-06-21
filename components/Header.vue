<template>
  <header class="navbar navbar-expand-lg navbar-light bg-light">
    <div
      class="mobile_menu_toggle d_none"
      :class="{ mobile_menu_toggle_active: mobileMenu }"
      @click="mobileMenu = !mobileMenu"
    >
      <span></span>
    </div>

    <nav class="container">
      <ul
        class="navbar_links mobile_menu d_none"
        :class="{ mobile_menu_active: mobileMenu }"
      >
        <li class="nav-item">
          <nuxt-link to="/" active-class="active" class="nav-link"
            >Главная</nuxt-link
          >
        </li>
        <li class="nav-item dropdown">
          <nuxt-link to="/about" class="nav-link"
            >О нас
            <span @click.prevent="dropdownToggle('about')"
              ><i class="fas fa-chevron-down"></i></span
          ></nuxt-link>
          <transition name="slide-fade">
            <ul class="dropdown-menu d-block" v-if="dropdown === 'about'">
              <li v-for="link in 4" :key="link">
                <a href="#" class="dropdown-item">Подробнее({{ link }})</a>
              </li>
            </ul>
          </transition>
        </li>
        <li class="nav-item dropdown">
          <nuxt-link to="/blogs" class="nav-link"
            >Блоги
            <span @click.prevent="dropdownToggle('blogs')"
              ><i class="fas fa-chevron-down"></i></span
          ></nuxt-link>
          <transition name="slide-fade">
            <ul class="dropdown-menu d-block" v-if="dropdown === 'blogs'">
              <li v-for="link in 7" :key="link">
                <a href="#" class="dropdown-item">Подробнее({{ link }})</a>
              </li>
            </ul>
          </transition>
        </li>
        <li class="nav-item">
          <nuxt-link to="/contacts" class="nav-link">Контакты</nuxt-link>
        </li>
      </ul>
      <ul class="navbar_links m_none">
        <li class="nav-item">
          <nuxt-link to="/" active-class="active" class="nav-link"
            >Главная</nuxt-link
          >
        </li>
        <li class="nav-item dropdown">
          <nuxt-link to="/about" class="nav-link"
            >О нас
            <span @click.prevent="dropdownToggle('about')"
              ><i class="fas fa-chevron-down"></i></span
          ></nuxt-link>
          <transition name="slide-fade">
            <ul class="dropdown-menu d-block" v-if="dropdown === 'about'">
              <li v-for="link in 4" :key="link">
                <a href="#" class="dropdown-item">Подробнее({{ link }})</a>
              </li>
            </ul>
          </transition>
        </li>
        <li class="nav-item dropdown">
          <nuxt-link to="/blogs" class="nav-link"
            >Блоги
            <span @click.prevent="dropdownToggle('blogs')"
              ><i class="fas fa-chevron-down"></i></span
          ></nuxt-link>
          <transition name="slide-fade">
            <ul class="dropdown-menu d-block" v-if="dropdown === 'blogs'">
              <li v-for="link in 7" :key="link">
                <a href="#" class="dropdown-item">Подробнее({{ link }})</a>
              </li>
            </ul>
          </transition>
        </li>
        <li class="nav-item">
          <nuxt-link to="/contacts" class="nav-link">Контакты</nuxt-link>
        </li>
      </ul>
      <div class="logo">
        <nuxt-link to="/" active-class="active" class="nav-link"
          >LOGO</nuxt-link
        >
      </div>
      {{ userName }}
      <ul class="navbar_links navbar_auth">
        <li class="nav-item">
          <nuxt-link to="/checkIn" class="nav-link">Регистрация</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/auth" class="nav-link">Вход</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data: () => ({
    dropdown: null,
    userName: null,
    mobileMenu: false,
  }),
  methods: {
    dropdownToggle(item) {
      if (this.dropdown === item) {
        this.dropdown = null;
      } else {
        this.dropdown = item;
      }
    },
  },
};
</script>
<style lang="scss">
.d_none {
  display: none !important;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

header {
  position: sticky;
  top: 0;
  nav {
    .navbar_links {
      display: flex;
      margin: 0;
      padding: 0;
      width: 100%;
      li {
        list-style-type: none;
      }
    }
    .logo {
      width: 100%;
      text-align: center;
    }
    .navbar_auth {
      justify-content: flex-end;
    }
  }
}

.active {
  color: #000;
}

.mobile_menu_toggle {
  width: 40px;
  height: 40px;
  background-color: #000;
  position: relative;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  padding: 4px;
  z-index: 90;
  span {
    width: 100%;
    height: 2px;
    background-color: #fff;
    display: block;
    position: relative;
    transition: all 0.5s ease;
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: #fff;
      display: block;
      position: absolute;
      top: -8px;
      transition: all 0.5s ease;
    }
    &::before {
      content: "";
      width: 100%;
      height: 2px;
      background-color: #fff;
      display: block;
      position: absolute;
      top: 8px;
      transition: all 0.5s ease;
    }
  }
}

.mobile_menu_toggle_active {
  span {
    background-color: transparent;
    &::after {
      top: 0;
      transform: rotate(45deg);
    }
    &::before {
      top: 0;
      transform: rotate(-45deg);
    }
  }
}

.mobile_menu_active {
  transform: translateX(0) !important;
}
@media only screen and (max-width: 576px) {
  .d_none {
    display: flex !important;
  }
  .m_none {
    display: none !important;
  }

  .navbar_auth {
    justify-content: space-between !important;
  }
  .mobile_menu {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 100%;
    margin: 0 -15px !important;
    position: fixed;
    top: 0;
    z-index: 50;
    transform: translateX(-100%);
    transition: all 0.5s ease;
  }
}
</style>
