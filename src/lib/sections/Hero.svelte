<script>
    import Section from "$lib/components/Section.svelte";
    import { viewport } from "$lib/scripts/viewportAction";
</script>

<Section class="items-center justify-center xl:flex-row" outerClass="h-screen items-center flex">
    <div class="image-container transition-opacity-transform translate-y-10 opacity-0 duration-1000" use:viewport>
        <img src="/img/portrait.jpg" class="bg-cover" alt="portrait" />
    </div>
    <div class="h-full w-5 bg-black"></div>
    <div class="btarget viewport-observe relative overflow-hidden opacity-0 transition-opacity delay-500" use:viewport>
        <div
            class="viewport-observe transition-opacity-transform ml-6 flex translate-x-[-6rem] flex-col py-4 opacity-0 delay-700 duration-1000"
            use:viewport
        >
            <h1 class="px-12 text-5xl font-extrabold xl:px-0">Hello, <br /> Call Me Ronnakorn</h1>
            <p class="px-12 text-slate-500 xl:px-0">University student graduated in 2025, Computer Engineer</p>
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
    @keyframes fade {
        from {
            opacity: 0%;
        }
        to {
            opacity: 100%;
        }
    }

    .btarget::before {
        content: "";
        position: absolute;
        display: block;
        background-color: black;
        height: 100%;
        width: 2px;
    }
</style>
