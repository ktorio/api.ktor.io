---
title: clear - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.sessions</a> / <a href="./clear.html">clear</a></div>

# clear

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="keyword">reified</span>&nbsp;<span class="identifier">T</span><span class="symbol">&gt;</span> <a href="-current-session/index.html"><span class="identifier">CurrentSession</span></a><span class="symbol">.</span><span class="identifier">clear</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Clear session instance with type <a href="clear.html#T">T</a>

### Exceptions

<code>IllegalStateException</code> - if no session provider registered for type <a href="clear.html#T">T</a>