<script>
    import { twMerge } from "tailwind-merge";
    export let data
    const imageDefaultPath = "./src/lib/img/"
    let {clazz, ...rp} = $$restProps
</script>

<button class={twMerge("p-2 w-full", clazz)} on:click>
    <div class="flex flex-row items-center justify-between w-full overflow-hidden">
        <h3 class="text-2xl font-normal">{data.name}</h3>
        <div class="text-2xl font-bold floatin">{data.year}</div>
    </div>
</button>

<style>
    .floatin {
        transition-property: transform, opacity;
        transition-duration: 0.3s;
        transition-delay: 0.1s;
        transition-timing-function: ease-in-out;
        transform: translate3d(0, 2rem, 0);
        opacity: 0%;
    }
    button:hover .floatin {
        transform: translate3d(0, 0, 0);
        opacity: 100%;
    }
    button::after {
        transition-property: width;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
        content: '';
        display: block;
        height: 1px;
        width: 0%;
        background-color: rgb(179, 179, 179);
    }
    button:hover::after {
        width: 100%;
    }

</style>