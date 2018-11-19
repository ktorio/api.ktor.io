---
title: set - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.sessions</a> / <a href="./set.html">set</a></div>

# set

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="keyword">reified</span>&nbsp;<span class="identifier">T</span><span class="symbol">&gt;</span> <a href="-current-session/index.html"><span class="identifier">CurrentSession</span></a><span class="symbol">.</span><span class="identifier">set</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions$set(io.ktor.sessions.CurrentSession, io.ktor.sessions.set.T)/value">value</span><span class="symbol">:</span>&nbsp;<a href="set.html#T"><span class="identifier">T</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set session instance with type <a href="set.html#T">T</a>

### Exceptions

<code>IllegalStateException</code> - if no session provider registered for type <a href="set.html#T">T</a>