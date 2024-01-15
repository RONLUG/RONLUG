<script>
  import Project from "$lib/components/Project.svelte";
  import Section from "$lib/components/Section.svelte";

  const projects = [
    {
      img: "cat.jpg",
      name: "Software engineer final project",
      desc: "Developed a task manager website using Svelte + SvelteKit framework and using PostgreSQL as DBMS",
      tools: ["CSS", "HTML", "Javascript"],
      links: [{ type: "website", url: "https://www.google.com/" }],
    },
    {
      img: "dog.jpg",
      name: "Bangmod hackathon 2024",
      desc: "Test description",
      tools: ["CSS", "HTML", "Javascript"],
      links: [{ type: "website", url: "https://www.google.com/" }],
    },
    {
      img: "dog.jpg",
      name: "Depa game accelerator program batch 3",
      desc: "Test description",
      tools: ["CSS", "HTML", "Javascript"],
      links: [{ type: "website", url: "https://www.google.com/" }],
    },
    {
      img: "dog.jpg",
      name: "Database final projects",
      desc: "Test description",
      tools: ["CSS", "HTML", "Javascript"],
      links: [{ type: "website", url: "https://www.google.com/" }],
    },
    {
      img: "dog.jpg",
      name: "CS50x final project",
      desc: "Test description",
      tools: ["CSS", "HTML", "Javascript"],
      links: [{ type: "website", url: "https://www.google.com/" }],
    },
  ];
</script>
<Section clazz="flex-col gap-y-2 py-6">
  <h1 class="text-2xl font-bold">Projects</h1>
  {#each projects as project}
    <Project data={project}></Project>
  {/each}
</Section>
