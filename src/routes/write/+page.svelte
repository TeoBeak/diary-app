<script>
    import TextArea from "$lib/components/TextArea.svelte";
    import { writing } from "$lib/store/store";
    import formatDate from "$lib/utils/formatDate";
    import autosize from "svelte-autosize";

    let val = '';
    $: {
        $writing = val;
    }
</script>

<main>
    <div class="diary">
        <!-- <textarea placeholder="글쓰기를 시작하세요..."></textarea> -->
         <textarea 
            use:autosize
            bind:value={val}
            placeholder="글쓰기를 시작하세요..."
         ></textarea>
        <div class="bottom-info">
            <span class="date">{formatDate()}</span>
        </div>
    </div>
</main>
