<script>
    import { PROJECTS as projects } from "$lib/data/project";
    import Section from "$lib/components/Section.svelte";

    let shownProject = projects[2];
</script>

<Section clazz="flex-col">
    <a class="mb-4" href="#">Projects / {shownProject.name} </a>
    <div class="flex flex-shrink gap-20">
        <div class="">
            <h1 class="text-2xl font-bold">{shownProject.name}</h1>
            <p>{shownProject.desc}</p>
            <ul>
                {#each shownProject.details as detail}
                    <li>
                        <h2 class="text-lg font-bold">{detail.header}</h2>
                        {#each detail.bullets as bullet}
                            {detail.bullets}
                        {/each}
                    </li>
                {/each}
            </ul>
        </div>
        <div class="flex-shrink-0 basis-[42rem]">
            <img src={"/img/" + shownProject.img + ".png"} alt="sdklf" />
        </div>
    </div>
</Section>
