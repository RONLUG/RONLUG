<script>
    import { twMerge } from "tailwind-merge";
    export let clazz = ""
    export let header = ""
    export let detail = ""
</script>
<div class={twMerge("bg-slate-100 rounded-md flex flex-col items-center justify-center px-8 py-4", clazz)}>
    <slot name="icon"></slot>
    <h2 class="text-xl font-semibold">{header}</h2>
    {#if detail}
    <p class="text-center">{detail}</p>
    {/if}
    <slot></slot>
</div>