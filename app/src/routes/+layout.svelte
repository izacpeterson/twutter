<script>
  import "../app.css";
</script>

<header class="bg-blue-500 text-white">
  <a href="/" class="text-4xl text-center">
    <h1>Twutter</h1>
  </a>
  <nav class="flex justify-evenly">
    <a href="/createAccount">Sign Up</a>
    <a href="/login">Login</a>
    <a href="/post">New Post</a>
  </nav>
</header>
<slot />
