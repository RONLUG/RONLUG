<script>
    import Section from "$lib/components/Section.svelte";
    import "iconify-icon";
</script>

<Section outerClass="flex-col py-6 justify-center items-center mt-20 bg-slate-50" class="flex-row gap-32">
    <div>
        <h2 class="text-2xl font-semibold">Get In Touch</h2>
        <ul class="text-slate-700">
            <li>
                <a class="hover:underline" href="mailto: ron.lugsami@gmail.com">ron.lugsami@gmail.com</a>
            </li>
        </ul>
    </div>
    <div>
        <h2 class="text-2xl font-semibold">More Information</h2>
        <ul class="text-slate-700">
            <li>
                <a class="hover:underline" href="ronnakorn_resume.pdf" target="_blank">Resume</a>
            </li>
        </ul>
    </div>
    <div>
        <h2 class="text-2xl font-semibold">My Works</h2>
        <ul class="text-slate-700">
            <li>
                <a class="hover:underline" href="https://github.com/RONLUG" target="_blank">github.com</a>
            </li>
            <li>
                <a class="hover:underline" href="https://ronlug.itch.io/" target="_blank">itch.io</a>
            </li>
        </ul>
    </div>
</Section>
