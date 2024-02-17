<script>
    import Modal from "$lib/components/Modal.svelte";
    import Project from "$lib/components/Project.svelte";
    import Section from "$lib/components/Section.svelte";
    import { PROJECTS as projects } from "$lib/data/project";
    import bmh2024 from "$lib/img/bmh2024.png";
    import bobstasks from "$lib/img/bobstasks.png";
    import dpga from "$lib/img/dpga.png";
    import stonk from "$lib/img/stonk.png";
    import courseMeadow from "$lib/img/courseMeadow.png";
    import Icon from "@iconify/svelte";

    const images = {
        bmh2024: bmh2024,
        bobstasks: bobstasks,
        dpga: dpga,
        stonk: stonk,
        courseMeadow: courseMeadow,
    };

    let modal;
    let shownProject = {};
</script>

<!-- src={shownProject?.img ? "/img/" + shownProject.img : "/img/portrait.jpg"} -->
<Modal bind:this={modal} clazz="rounded-md w-[60rem]">
    <img loading="lazy" slot="image" src={images[shownProject.img]} alt="img" class="h-full select-none object-cover" />
    <div class="mb-3">
        <h1 class="text-2xl font-bold">
            {shownProject.name}
        </h1>
        <p class="text-slate-700">{shownProject.desc}</p>
    </div>
    {#if shownProject.details}
        <ul>
            {#each shownProject.details as projectDetail}
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
            <li class="mb-3">
                <h1 class="text-xl font-semibold">Tools</h1>
                <div class="ml-1 flex gap-3 text-3xl text-slate-500">
                    {#if shownProject.tools?.includes("unity")}
                        <Icon icon="mdi:unity" />
                    {/if}
                    {#if shownProject.tools?.includes("figma")}
                        <Icon icon="solar:figma-broken" />
                    {/if}
                    {#if shownProject.tools?.includes("sveltekit")}
                        <Icon icon="ri:svelte-fill" />
                    {/if}
                    {#if shownProject.tools?.includes("github")}
                        <Icon icon="mdi:git" />
                    {/if}
                    {#if shownProject.tools?.includes("supabase")}
                        <Icon icon="ri:supabase-line" />
                    {/if}
                    {#if shownProject.tools?.includes("flask")}
                        <Icon icon="bxl:flask" />
                    {/if}
                </div>
            </li>
            {#if shownProject.links}
                <li>
                    <h1 class="text-xl font-semibold">Links</h1>
                    <ul>
                        {#each shownProject.links as link}
                            <li class="flex items-center">
                                <Icon class="ml-1 mr-1 text-[14px] text-slate-500" icon="dashicons:admin-links" />
                                <a class="text-slate-700 hover:underline" href={link.url} target="_blank"
                                    >{link.name ?? link.url}</a
                                >
                            </li>
                        {/each}
                    </ul>
                </li>
            {/if}
        </ul>
    {/if}
</Modal>

<Section clazz="flex-col py-6 justify-center items-center">
    <div class="w-11/12 xl:w-2/3">
        <h1 class="text-3xl font-bold">Projects</h1>
        {#each projects as project}
            <div class="project-container">
                <Project
                    clazz="focus:outline-none text-left"
                    data={project}
                    on:click={() => {
                        modal.openModal();
                        shownProject = project;
                    }}
                ></Project>
            </div>
        {/each}
    </div>
</Section>
