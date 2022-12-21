<script>
  let email = "";
  let password = "";

  function login() {
    console.log(email, password);
    fetch(`/api/users/login?email=${email}&password=${password}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.href = "/";
      });
  }
</script>

<h2 class="text-2xl">Login</h2>
<form on:submit|preventDefault={login} class="flex flex-col">
  <input type="email" placeholder="Email" bind:value={email} class="m-2 p-2" />
  <input type="password" placeholder="Password" bind:value={password} class="m-2 p-2" />
  <button type="submit" class="m-2 p-2 bg-blue-500 text-white">Login</button>
</form>
