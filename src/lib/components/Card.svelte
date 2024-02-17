<script>
    import { twMerge } from "tailwind-merge";
    export let clazz = "";
    export let header = "";
    export let detail = "";
</script>

<div class={twMerge("flex flex-col items-center justify-center rounded-md bg-slate-100 px-8 py-4", clazz)}>
    <div class="text-2xl text-slate-400">
        <slot name="icon" />
    </div>
    <h2 class="text-xl font-semibold">{header}</h2>
    {#if detail}
        <p class="text-center text-slate-500">{detail}</p>
    {/if}
    <slot />
</div>
