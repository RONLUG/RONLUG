<script>
    let dialog;
    export function openModal() {
        dialog.showModal();
    }
    export function closeModal() {
        dialog.closeModal();
    }
    export let clazz = "";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog} on:click|self={() => dialog.close()} class={clazz}>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click|stopPropagation class="flex min-h-[35rem] flex-row">
        <div class="flex-shrink-0 basis-5/12">
            <slot name="image" />
        </div>
        <div class="flex-shrink basis-7/12 p-6">
            <slot />
        </div>
    </div>
</dialog>

<style>
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        animation: fade 0.2s ease-out;
    }
    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }

    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
