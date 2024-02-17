<script>
    import { twMerge } from "tailwind-merge";
    export let clazz = "";
</script>

<div class={twMerge("flex w-full px-20 py-20 xl:px-40", clazz)}>
    <slot />
</div>
