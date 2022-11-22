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
    text-decoration:inherit;
}

a:hover {
    border-bottom: 2px solid #FFFFFF;
}
</style>
