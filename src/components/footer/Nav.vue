<template>
    <li class="c-white md:text-center float-left mr-30 md:mb-10 mb-5 text-left ml-0">
        <slot></slot>
    </li>
</template>

<style lang="scss" scoped>
footer,
nav,
ul,li{
    list-style: none;
}

a,
a:visited {
    color: #FFF;
    transition: all 250ms linear;
    transition-timing-function: ease-in-out;
}

a:hover {
    border-bottom: 2px solid #FFFFFF;
}

.cls-1 {
    fill: #FFF;
}

.cls-2 {
    fill: #FFF;
    transform: translateY(-70%)
}
</style>