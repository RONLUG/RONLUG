<script>
    import Section from "$lib/components/Section.svelte";
    import Card from "$lib/components/Card.svelte";
    import Icon from "@iconify/svelte";
    import { viewport } from "$lib/scripts/viewportAction";
</script>

<Section class="items-center justify-between gap-8 xl:flex-row">
    <div class="transition-opacity-transform basis-1/2 translate-y-10 opacity-0 duration-1000" use:viewport>
        <h1 class="mb-3 text-3xl font-bold">
            Ronnakorn Lugsamipichate <span class="font-normal">(Au)</span>
        </h1>
        <p class="text-slate-700">
            Hello! I am a soon-to-be graduate Computer Engineering student in 2025. I possess fundamental knowledge of
            software development processes and tools. Currently, I am seeking an internship in a software engineering
            position. I am eager to seize learning opportunities and gain real-world experience.
        </p>
        <h1 class="my-3 mt-6 text-3xl font-bold">What Can I Do?</h1>
        <ul class="flex flex-wrap items-center justify-center gap-3">
            <li>
                <Icon class="mx-4 text-[55px]" icon="logos:flask" />
            </li>
            <li>
                <Icon class="text-[40px]" icon="logos:django" />
            </li>
            <li>
                <Icon class="text-[100px]" icon="devicon-plain:svelte-wordmark" />
            </li>
            <li>
                <Icon class="text-[100px]" icon="devicon-plain:unity-wordmark" />
            </li>
        </ul>
    </div>
    <div
        class="transition-opacity-transform max-w-lg basis-1/2 translate-y-10 flex-col items-center justify-evenly opacity-0 delay-500 duration-700"
        use:viewport
    >
        <div class="mb-3 grid grid-cols-3 gap-3">
            <Card clazz="row-span-2" header="Lived" detail="Bangkok Noi, Bangkok">
                <Icon slot="icon" icon="material-symbols:where-to-vote" />
            </Card>
            <Card header="GPA" detail="3.28*">
                <Icon slot="icon" icon="mdi:academic-cap" />
            </Card>
            <Card header="English" detail="A2**">
                <Icon slot="icon" icon="clarity:language-solid" />
            </Card>
            <Card clazz="col-span-2" header="Studing">
                <Icon slot="icon" icon="teenyicons:school-solid" />
                <p class="text-center text-slate-600">Studing Computer Engineering At KMUTT</p>
            </Card>
        </div>
        <ul>
            <li>*GPA accumulate only to current date(5 semesters)</li>
            <li>**Tested in 2020</li>
        </ul>
    </div>
</Section>
