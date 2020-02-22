<template>
  <nav class="menu" tabindex="0">
    <div class="smartphone-menu-trigger"></div>
    <header class="avatar">
      <router-link to="/">
        <img src="../assets/images/pp.jpg" alt="">
      </router-link>
      <h3>Ali İlteriş Keskin</h3>
      <p>Software Developer</p>
    </header>
    <ul>
      <router-link to="/advices">
        <li tabindex="0" class="icon-advices"><span>Tavisyeler</span></li>
      </router-link>
      <router-link to="/about">
        <li tabindex="0" class="icon-user"><span>Hakkımda</span></li>
      </router-link>
      <a href="https://github.com/ilteriskeskin" target="_blank">
        <li tabindex="0" class="icon-github"><span>Github</span></li>
      </a>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "Sidebar"
  }
</script>

<style lang="less">
  @color-1st: #f0dd92;
  @color-2nd: #589167;

  @menu-width-desktop: 240px;
  @menu-width-tablet: 90px;
  @menu-width-smartphone: 230px;

  @icon-url-base: "http://www.entypo.com/images/";
  @icon-url-advices: "@{icon-url-base}/gauge.svg";
  @icon-url-about: "@{icon-url-base}/list.svg";
  @icon-url-user: "@{icon-url-base}/user.svg";
  @icon-url-github: "@{icon-url-base}/github.svg";

  body {
    background: @color-1st;
    margin: 0;
    font-family: "Open Sans", Helvetica Neue, Helvetica, Arial, sans-serif;
    color: #fff;
    padding-left: @menu-width-desktop;
  }

  a:link {
    color: white;
    text-decoration: none;
  }

  a:visited {
    color: white;
    text-decoration: none;
  }

  .menu {
    background: @color-2nd;
    height: 100vh;
    width: @menu-width-desktop;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    outline: none;

    .avatar {
      background: rgba(0, 0, 0, 0.1);
      padding: 2em 0.5em;
      text-align: center;

      img {
        width: 100px;
        border-radius: 50%;
        overflow: hidden;
        border: 4px solid @color-1st;
        box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);
      }

      h2 {
        font-weight: normal;
        margin-bottom: 0;
      }
    }

    ul {
      list-style: none;
      padding: 0.5em 0;
      margin: 0;

      li {
        padding: 0.5em 1em 0.5em 3em;
        font-size: 0.95em;
        background-repeat: no-repeat;
        background-position: left 15px center;
        background-size: auto 20px;
        transition: all 0.15s linear;
        cursor: pointer;

        &.icon-advices {
          background-image: url(@icon-url-advices);
        }

        &.icon-about {
          background-image: url(@icon-url-about);
        }

        &.icon-user {
          background-image: url(@icon-url-user);
        }

        &.icon-github {
          background-image: url(@icon-url-github);
        }

        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }

        &:focus {
          outline: none;
        }

      }
    }
  }

  @media screen and (max-width: 900px) and (min-width: 400px) {
    body {
      padding-left: @menu-width-tablet;
    }

    .menu {
      width: @menu-width-tablet;

      .avatar {
        padding: 0.5em;
        position: relative;

        img {
          width: @menu-width-tablet - 30px;
        }

        h2 {
          opacity: 0;
          position: absolute;
          top: 50%;
          left: @menu-width-tablet + 10px;
          margin: 0;
          min-width: 200px;
          border-radius: 4px;
          background: rgba(0, 0, 0, 0.4);
          transform: translate3d(-20px, -50%, 0);
          transition: all 0.15s ease-in-out;
        }

        &:hover {
          h2 {
            opacity: 1;
            transform: translate3d(0px, -50%, 0);
          }
        }
      }

      ul {
        li {
          height: @menu-width-tablet/1.5;
          background-position: center center;
          background-size: 30px auto;
          position: relative;

          span {
            //display:none;
            opacity: 0;
            position: absolute;
            background: rgba(0, 0, 0, 0.5);
            padding: 0.2em 0.5em;
            border-radius: 4px;
            top: 50%;
            left: @menu-width-tablet - 10px;
            transform: translate3d(-15px, -50%, 0);
            transition: all 0.15s ease-in-out;

            &:before {
              content: '';
              width: 0;
              height: 0;
              position: absolute;
              top: 50%;
              left: -5px;
              border-top: 5px solid transparent;
              border-bottom: 5px solid transparent;
              border-right: 5px solid rgba(0, 0, 0, 0.5);
              transform: translateY(-50%);
            }
          }

          &:hover {
            span {
              opacity: 1;
              transform: translate3d(0px, -50%, 0);
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
    body {
      padding-left: 0;
    }

    .menu {
      width: @menu-width-smartphone;
      box-shadow: 0 0 0 100em rgba(0, 0, 0, 0);
      transform: translate3d(-@menu-width-smartphone, 0, 0);
      transition: all 0.3s ease-in-out;

      .smartphone-menu-trigger {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 100%;
        background: @color-2nd;

        &:before, &:after {
          content: '';
          width: 50%;
          height: 2px;
          background: #fff;
          border-radius: 10px;
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }

        &:after {
          top: 55%;
          transform: translate3d(-50%, -50%, 0);
        }
      }

      ul {

        li {
          padding: 1em 1em 1em 3em;
          font-size: 1.2em;
        }
      }

      &:focus {
        transform: translate3d(0, 0, 0);
        box-shadow: 0 0 0 100em rgba(0, 0, 0, 0.6);

        .smartphone-menu-trigger {
          pointer-events: none;
        }
      }
    }
  }
</style>
