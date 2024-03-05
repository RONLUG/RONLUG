<script>
    import { twMerge } from "tailwind-merge";
    export let data = {};
    const imageDefaultPath = "img/";
    import Icon from "@iconify/svelte";
    import { viewport } from "$lib/scripts/viewportAction";
    import { onMount } from "svelte";
    let innerWidth;
    let reveal = false;
    let clazz = $$props.class;
    let expandContainer;
    onMount(() => {
        expandContainer.style.marginTop = !reveal ? `${-expandContainer.offsetHeight}px` : "0";
        console.log("Margin Added: ", expandContainer.style.marginTop);
        console.log("Offset: ", expandContainer.offsetHeight);
    });

    $: if (expandContainer && expandContainer.offsetHeight) {
        innerWidth;
        expandContainer.style.marginTop = !reveal ? `${-expandContainer.offsetHeight}px` : "0";
    }
</script>

<svelte:window bind:innerWidth />

<div class="viewport-observe transition-opacity-transform translate-y-2 opacity-0 duration-700" use:viewport>
    <button
        class={twMerge(
            " my-1 w-full rounded-md p-2 duration-200 hover:bg-slate-100",
            clazz,
            reveal ? "bg-slate-50" : "",
        )}
        on:click={() => {
            reveal = !reveal;
        }}
    >
        <div class="my-2 flex flex-row items-start">
            <div
                class={twMerge(
                    reveal ? "reveal" : "",
                    "m-auto mx-6 flex w-full flex-col items-start justify-center transition-all",
                )}
            >
                <h3 class="text-2xl font-semibold">{data.name}</h3>
                <p>{data.shortDesc}</p>
                <div class="w-full overflow-hidden">
                    <div bind:this={expandContainer} class="project-details mt-[-200rem] transition-all duration-700">
                        <div class=" flex flex-col items-start justify-between gap-10 lg:flex-row">
                            <ul class="">
                                <li>
                                    <h1 class="text-xl font-semibold">What is {data.name}</h1>
                                    <p>{data.desc}</p>
                                </li>
                                {#each data.details as projectDetail}
                                    <li>
                                        <h1 class="text-xl font-semibold">
                                            {projectDetail.header}
                                        </h1>
                                        <ul class="list-disc pl-5 text-slate-700 marker:text-slate-500">
                                            {#each projectDetail.bullets as bullet}
                                                <li class="">
                                                    {bullet}
                                                </li>
                                            {/each}
                                        </ul>
                                    </li>
                                {/each}
                            </ul>
                            <img
                                class="w-[300px] self-center"
                                src={imageDefaultPath + data.img + ".png"}
                                alt="project"
                            />
                        </div>

                        <ul class="mt-4 flex gap-2">
                            {#each data.links as link}
                                <li class="box-border">
                                    <a
                                        href={link.url}
                                        class="box-border flex items-center rounded-full border-2 bg-black px-3 py-1 text-white duration-200 hover:border-black hover:bg-slate-100 hover:text-black"
                                        target="_blank"
                                    >
                                        <Icon class="mr-1 text-[16px]" icon="dashicons:admin-links" />
                                        {link.name}</a
                                    >
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </button>
</div>

<style>
    /* .reveal .project-details {
        margin-top: 0%;
    } */
</style>
