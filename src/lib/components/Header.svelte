<script>
    import { writing, addDiary, editDiary, editId } from "$lib/store/store";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";

    async function clickHandler() {
        if($page.url.pathname.startsWith('/read')) {
            goto('/')
        } else if($page.url.pathname.startsWith('/write')) {
            if($writing) {
               await addDiary();
            }
            goto('/')
        } else if($page.url.pathname.startsWith('/edit')) {
            if($writing) {
                await editDiary($editId);
            }
            goto('/')
        }
    }
</script>

<header>
    <h1>Diary {$page.url.pathname}</h1>
    {#if $page.url.pathname.startsWith('/read')}
        <button class="btn" on:click={clickHandler}>완료</button>
    {:else if $page.url.pathname.startsWith('/write')}
        <button class="btn" on:click={clickHandler}>완료</button>
    {:else if $page.url.pathname.startsWith('/edit')}
        <button class="btn" on:click={clickHandler}>완료</button>
    {/if}
</header>

<nav>
        <a href="/">Home</a>
        <a href="/read">read</a>
        <a href="/write">write</a>
        <a href="/edit">edit</a>
    </nav>

<style lang="scss">
    header {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        background: var(--main-color);
        color: var(--text-light);
        a {
            text-decoration: none;
            color: var(--text-light);
        }
        h1 { font-size: 28px; }
        .btn {
            border: none;
            background: transparent;
            color: var(--text-light);
            font-size: 18px;
            cursor: pointer;
        }
    }
</style>