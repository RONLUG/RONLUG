<script>
    import Section from "$lib/components/Section.svelte";
</script>

<Section clazz="h-screen justify-center items-center">
    <div class="flex w-full flex-col items-center justify-center gap-x-16 gap-y-5 xl:w-2/3 xl:flex-row">
        <div class="image-container">
            <img src="/img/portrait.jpg" class="bg-cover" alt="portrait" />
        </div>
        <div class="flex flex-col">
            <h1 class="px-12 text-5xl font-extrabold xl:px-0">Hello, <br /> Call Me Ronnakorn</h1>
            <p class="px-12 xl:px-0">University student graduated in 2025, Front-end developer</p>
        </div>
    </div>
</Section>

<style>
    .image-container {
        height: 500px;
        width: auto;
        /* border: 3px solid red; */
        clip-path: polygon(20% 0%, 80% 0%, 80% 100%, 20% 100%);
    }
    /* img {
        object-fit: cover;
    } */
</style>
