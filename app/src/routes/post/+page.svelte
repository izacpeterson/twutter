<script>
  let text = "";

  function post() {
    fetch(`/api/posts/new?text=${text}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.href = "/";
      });
  }
</script>

<h2 class="text-2xl">New Post</h2>
<form on:submit|preventDefault={post} class="flex flex-col">
  <textarea bind:value={text} class="bg-gray-200 h-52 p-4 m-2" />
  <button type="submit" class="m-2 p-2 bg-blue-500 text-white">Post</button>
</form>
