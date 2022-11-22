<template>
    <li class="d-block w-a m-5">
        <a 
        :href="href" 
        :target="target" 
        data-turbo-action="replace">
            <slot></slot>
        </a>
    </li>
</template>
  
<script>
export default {
    props: {
        href: {
            type: String,
            required: true,
        },
        target: {
            type: String,
            required: false,
        },
        isActive: Boolean,
    },
}
</script>


<style lang="scss" scoped>
footer,
nav,
ul {
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
