<script>
    import autosize from "svelte-autosize";
    import { diaries, writing, editId } from "$lib/store/store";
    import { page } from "$app/stores";
    import Icon from "@iconify/svelte";
    import TextArea from "$lib/components/TextArea.svelte";
    import Btns from "$lib/components/Btns.svelte";
	import formatDate from "$lib/utils/formatDate.js";

    export let data;
    
    let id = $page.params.id;
    // let editDiary = $diaries.find(diary => diary.id == id);
    let editDiary = data.diary[0];
    let val = editDiary.content;
    let date = editDiary.created_at
    console.log(date)

    $editId = id;

    $: {
        $writing = val;
        console.log($writing);
    }
</script>

<main>
    <div class="diary">
        <!-- <textarea placeholder="글쓰기를 시작하세요..."></textarea> -->
        <textarea
            use:autosize
            bind:value={val}
        ></textarea>
        <div class="bottom-info">
            <span class="date">{formatDate(date)}</span>
            <Btns diary={editDiary}/>
        </div>
    </div>
</main>

<style lang="scss">
    // textarea {
    //     border: none;
    //     width: 100%;
    //     font-size: inherit;
    //     padding: 0.5rem 0;
    //     background: transparent;
    //     outline: none;
    // }
</style>