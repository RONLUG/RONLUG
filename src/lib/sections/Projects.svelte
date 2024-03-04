<script>
    import Modal from "$lib/components/Modal.svelte";
    import Project from "$lib/components/Project.svelte";
    import Section from "$lib/components/Section.svelte";
    import { PROJECTS as projects } from "$lib/scripts/project";
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

    let d2023;
    let d2022;

    console.log(projects[0].year);
    if (projects) {
        d2023 = projects.filter((e) => e.year == 2023);
        d2022 = projects.filter((e) => e.year == 2022);
    }

    let projectAnimationDelay = 0;
</script>

<Section class="items-left" outerClass="space-between">
    <h1 class="text-3xl font-bold">Projects</h1>
    <div class="mt-6">
        <h2 class="ml-8 text-3xl font-extrabold text-slate-700">2023</h2>
        {#each d2023 as project}
            <Project class="text-left focus:outline-none" data={project}></Project>
        {/each}
        <h2 class="ml-8 text-3xl font-extrabold text-slate-700">2022</h2>
        {#each d2022 as project}
            <Project class="text-left focus:outline-none" data={project}></Project>
        {/each}
    </div>
</Section>
