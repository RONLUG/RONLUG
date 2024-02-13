<script>
    import Section from "$lib/components/Section.svelte";
    import Card from "$lib/components/Card.svelte";
    import Icon from "@iconify/svelte";
</script>

<Section clazz="justify-center items-center">
    <div class="flex w-11/12 flex-col items-center gap-12 xl:w-2/3 xl:flex-row">
        <div class="basis-1/2">
            <h1 class="mb-3 text-3xl font-bold">
                Ronnakorn Lugsamipichate <span class="font-normal">(Au)</span>
            </h1>
            <p>
                I'm a soon-to-be graduate Computer Engineering student in 2025, with fundamental knowledge of software
                development processes and tools. I'm looking forward to gaining real-world experience to further improve
                my knowledge.
            </p>
            <h1 class="my-3 mt-6 text-3xl font-bold">What Can I Do?</h1>
            <ul class="flex flex-wrap items-center justify-center gap-3">
                <li>
                    <Icon class="mx-8 text-[60px]" icon="logos:flask" />
                </li>
                <li>
                    <Icon class="text-[45px]" icon="logos:django" />
                </li>
                <li>
                    <Icon class="text-[100px]" icon="devicon-plain:svelte-wordmark" />
                </li>
                <li>
                    <Icon class="text-[100px]" icon="devicon-plain:unity-wordmark" />
                </li>
            </ul>
        </div>
        <div class="max-w-lg basis-1/2 flex-col items-center justify-evenly">
            <div class="mb-3 grid grid-cols-3 gap-3">
                <Card clazz="row-span-2" header="Lived" detail="Bangkok Noi, Bangkok">
                    <Icon class="text-2xl" slot="icon" icon="material-symbols:where-to-vote" />
                </Card>
                <Card header="GPA" detail="3.29*">
                    <Icon class="text-2xl" slot="icon" icon="material-symbols:where-to-vote" />
                </Card>
                <Card header="English" detail="A2**">
                    <Icon class="text-2xl" slot="icon" icon="material-symbols:where-to-vote" />
                </Card>
                <Card clazz="col-span-2" header="Studing">
                    <Icon class="text-2xl" slot="icon" icon="material-symbols:where-to-vote" />
                    <p class="text-center">Studing Computer Engineering At KMUTT</p>
                </Card>
            </div>
            <ul>
                <li>*GPA accumulate only to current date(5 semesters)</li>
                <li>**Tested in 2020</li>
            </ul>
        </div>
    </div>
</Section>
