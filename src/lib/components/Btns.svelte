<script>
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import Icon from "@iconify/svelte";
    import { deleteDiary } from '$lib/store/store';
    export let diary = [];
</script>

<div class="btns">
    {#if !$page.url.pathname.startsWith("/edit")}
    <button class="btn" on:click={() => goto(`/edit/${diary.id}`)}>
        <Icon icon="pepicons-pop:pen" width="24" height="24" style="color: #444;"/>
    </button>
    {/if}
    <button
     class="btn"
      on:click={async () => {
        await deleteDiary(diary.id);
        // goto('/')
        location.href = '/';
    }}>
        <Icon icon="material-symbols:delete-outline" width="26" height="26" style="color: #f80;"/>
    </button>
</div>