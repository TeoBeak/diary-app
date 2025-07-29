<script>
    import Icon from "@iconify/svelte";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { diaries } from "$lib/store/store";
    import Btns from "$lib/components/Btns.svelte";
    import formatDate from "$lib/utils/formatDate.js";

    const { id } = $page.params;
    // const diary = $diaries.find(diary => diary.id === Number(id));
    // const { content, date } = diary;
    
    export let data;
    console.log(data);
</script>

<main class="contianer">
    <div class="diary">
                <p class="content">{data.diary[0].content}</p>
            <div class="bottom-info">
                <span class="date">{formatDate(data.diary[0].created_at)}</span>
                <div class="btns">
                    <Btns diary={data.diary[0]}/>
                </div>
            </div>
        </div>
</main>