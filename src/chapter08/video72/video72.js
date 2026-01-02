const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json();
    //insert data html

    const tbody = document.querySelector("#blogs tbody");
    if (data && data.length) {
        data.forEach((blog, index) => {
            tbody.innerHTML += `
            <tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td><button class="delete-blog" data-id="${blog.id}">Delete</button></td>
            </tr>
    `
        })
    }
}
const addNewRowToTable = (blog) => {
    const tableBody = document.querySelector('#blogs tbody');
    // Tạo phần tử dòng mới
    const newRow = document.createElement('tr');
    // Gán HTML cho dòng
    newRow.innerHTML = `
        <tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td><button class="delete-blog" data-id="${blog.id}">Delete</button></td>
            </tr>
    `;
    // Thêm dòng vào cuối bảng
    tableBody.appendChild(newRow)

    // Gán lại sự kiện onClick cho row mới thêm

    const btn = document.querySelector(`[data-id="${blog.id}"]`);
    btn.addEventListener('click', async () => {
        const id = btn.getAttribute("data-id");
        const deleteBlog = await fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const data = await deleteBlog.json();
        //delete row from table
        const row = btn.closest('tr');
        row.remove();
    })
}
const handleAddNewBlog = () => {
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const contentInput = document.getElementById("content");
    const addBlogBtn = document.getElementById("saveBlog");
    addBlogBtn.addEventListener("click", async () => {

        // call api to add new blog
        const newBlog = await fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: titleInput.value, author: authorInput.value, content: contentInput.value })
        });
        const data = await newBlog.json();
        addNewRowToTable(data);
    })
}

const handleDeleteBlog = () => {
    const btns = document.querySelectorAll('.delete-blog');
    if (btns) {
        btns.forEach((btn, index) => {
            btn.addEventListener('click', async () => {
                const id = btn.getAttribute("data-id");
                const deleteBlog = await fetch(`http://localhost:8000/blogs/${id}`, {
                    method: "DELETE",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
                const data = await deleteBlog.json();
                //delete row from table
                const row = btn.closest('tr');
                row.remove();
            })
        })
    }
}
fetchBlogs().then(() => {
    handleDeleteBlog();

});
handleAddNewBlog();