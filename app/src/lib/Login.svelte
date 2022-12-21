<script>
  let username = "";
  let email = "";
  let password = "";

  function login() {
    console.log("Login");
    let url = `/api/users/login?email=${email}&password=${password}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
</script>

<form on:submit|preventDefault={login}>
  <input type="text" bind:value={email} placeholder="Email" />
  <input type="text" bind:value={password} placeholder="Password" />
  <button type="submit">Login</button>
</form>
