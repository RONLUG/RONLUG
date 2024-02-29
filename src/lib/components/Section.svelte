<script>
    import { twMerge } from "tailwind-merge";
    let clazz = $$props.class;
    let outerClass = $$props.outerClass;
</script>

<section class={twMerge("w-full py-20", outerClass)}>
    <div class={twMerge("m-auto flex  w-10/12 max-w-screen-xl flex-col xl:w-8/12", clazz)}>
        <slot />
    </div>
</section>
