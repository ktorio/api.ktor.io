---
title: SessionStorageMemory.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="index.html">SessionStorageMemory</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">SessionStorageMemory</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

<a href="../-session-storage/index.html">SessionStorage</a> that stores session contents into memory.

Since it doesn't use any TTL sessions, memory usage will increase while the application is running
and session information will be discarded once the server stops.

This is intended for development.

