---
title: get - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.sessions</a> / <a href="./get.html">get</a></div>

# get

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="keyword">reified</span>&nbsp;<span class="identifier">T</span><span class="symbol">&gt;</span> <a href="-current-session/index.html"><span class="identifier">CurrentSession</span></a><span class="symbol">.</span><span class="identifier">get</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="get.html#T"><span class="identifier">T</span></a><span class="symbol">?</span></code></div>

Get session instance with type <a href="get.html#T">T</a>

### Exceptions

<code>IllegalStateException</code> - if no session provider registered for type <a href="get.html#T">T</a>