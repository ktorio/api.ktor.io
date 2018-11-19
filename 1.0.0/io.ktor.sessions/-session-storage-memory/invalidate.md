---
title: SessionStorageMemory.invalidate - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="index.html">SessionStorageMemory</a> / <a href="./invalidate.html">invalidate</a></div>

# invalidate

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">invalidate</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionStorageMemory$invalidate(kotlin.String)/id">id</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Overrides <a href="../-session-storage/invalidate.html">SessionStorage.invalidate</a>

Invalidates session <a href="invalidate.html#io.ktor.sessions.SessionStorageMemory$invalidate(kotlin.String)/id">id</a>.

This method prevents session <a href="invalidate.html#io.ktor.sessions.SessionStorageMemory$invalidate(kotlin.String)/id">id</a> from being accessible after this call.

### Exceptions

<code>NoSuchElementException</code> - when session <a href="invalidate.html#io.ktor.sessions.SessionStorageMemory$invalidate(kotlin.String)/id">id</a> is not found.