import { writable, get } from "svelte/store";
import  formatDate from "$lib/utils/formatDate";
import { posts } from "$lib/data/posts";

export const diaries = writable(posts);
export const writing = writable('');
export const editId = writable(0);

export const deleteDiary = async (id) => {
    const response = await fetch('/api', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    });

    const data = await response.json();

    if(data.success) {
        return console.log('글 삭제 성공');
    } else {
        return console.log('글 삭제 실패');
    }
}

export const editDiary = async (id) => {
    const content = get(writing);

    if(content) {
        const response = await fetch('/api', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, content })
        });

        const data = await response.json();
        console.log(data);

        if(data.success) {
            return console.log('글 수정 성공');
        } else {
            return console.log('글 수정 실패');
        }
    }
}

export const addDiary = async () => {
    const content = get(writing);

    if(content) {
        const response = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content })
        });
        const data = await response.json();
        console.log(data);

        if(data.success) {
            console.log('글쓰기 성공');
        } else {
            console.log('글쓰기 실패');
        }
    }
}