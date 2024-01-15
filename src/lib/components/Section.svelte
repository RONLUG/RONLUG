<script>
    import { twMerge } from 'tailwind-merge'
    export let clazz = ""
</script>

<div class={twMerge("flex m-auto w-9/12 max-w-screen-lg", clazz)}>
    <slot></slot>
</div>