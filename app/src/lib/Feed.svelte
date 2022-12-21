<script>
  let feed = [];
  fetch(`/api/posts/all`)
    .then((res) => res.json())
    .then((data) => {
      feed = data;
    });
</script>

{#each feed as post}
  <div class="bg-gray-100 shadow m-4 p-2 rounded-lg">
    <h3 class="font-bold">{post.username}</h3>
    <p class="text-sm">{new Date(post.datetime).toLocaleString()}</p>
    <p>{post.text}</p>
  </div>
{/each}
