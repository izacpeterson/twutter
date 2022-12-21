<script>
  import Login from "./lib/Login.svelte";

  let user = null;

  fetch("/api/users/user")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      user = data.username;
    });
</script>

<main>
  <h1>Twutter</h1>
  {user}
  {#if !user}
    <Login />
  {/if}
</main>
