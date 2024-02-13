<script>
    import Modal from "$lib/components/Modal.svelte";
    import Project from "$lib/components/Project.svelte";
    import Section from "$lib/components/Section.svelte";
    import { PROJECTS as projects } from "$lib/data/project";

    console.log(projects);
    let modal;
    let shownProject = {};
    $: console.log(shownProject);
</script>

<Modal bind:this={modal} clazz="rounded-md w-[60rem]">
    <img
        loading="lazy"
        slot="image"
        src={shownProject?.img ? "/src/lib/img/" + shownProject.img : "/src/lib/img/portrait.jpg"}
        alt="img"
        class="h-full select-none object-cover"
    />
    <h1 class="text-2xl font-bold">
        {shownProject.name}
    </h1>
    {#if shownProject.details}
        <ul>
            {#each shownProject.details as projectDetail}
                <li>
                    <h1 class="text-xl font-semibold">
                        {projectDetail.header}
                    </h1>
                    <ul class="list-disc pl-5">
                        {#each projectDetail.bullets as bullet}
                            <li>
                                {bullet}
                            </li>
                        {/each}
                    </ul>
                </li>
            {/each}
            {#if shownProject.links}
                <h1>Links</h1>
                <ul>
                    {#each shownProject.links as link}
                        <li>
                            <a href={link.url} target="_blank">{link.name ?? link.url}</a>
                        </li>
                    {/each}
                </ul>
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
