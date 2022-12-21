<script>
  let email = "";
  let username = "";
  let password = "";
  let confirmPassword = "";

  function signUp() {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    fetch(`/api/users/new?email=${email}&username=${username}&password=${password}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.href = "/login";
      });
  }
</script>

<form on:submit|preventDefault={signUp} class="flex flex-col">
  <input bind:value={email} type="email" class="bg-gray-200 m-2 p-2" placeholder="Email Address" />
  <input bind:value={username} type="text" class="bg-gray-200 m-2 p-2" placeholder="Username" />
  <input bind:value={password} type="password" class="bg-gray-200 m-2 p-2" placeholder="Password" />
  <input bind:value={confirmPassword} type="password" class="bg-gray-200 m-2 p-2" placeholder="Confirm Password" />
  <button class="m-2 p-2 bg-blue-500 text-white">Sign Up</button>
</form>
