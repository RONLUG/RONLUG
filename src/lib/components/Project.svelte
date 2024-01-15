<script>
    export let data
    const imageDefaultPath = "./src/lib/img/"
</script>
<div class="flex gap-6 py-2">
    <!-- <img class="lg:w-60 w-48 lg:h-32 h-24 flex-shrink-0" src={imageDefaultPath + data.img} alt={data.name + "cover image"}/> -->
    <div>
        <h3 class="text-lg font-bold">{data.name}</h3>
        <p>{data.desc}</p>
        <p>Tools: {data.tools ? data.tools.join(", "): undefined}</p>
    </div>

</div>