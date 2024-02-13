<script>
    import { twMerge } from "tailwind-merge";
    export let clazz = "";
</script>

<div class={twMerge("m-auto flex w-10/12 max-w-screen-2xl py-20", clazz)}>
    <slot />
</div>
