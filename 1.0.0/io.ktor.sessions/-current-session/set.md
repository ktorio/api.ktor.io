---
title: CurrentSession.set - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="index.html">CurrentSession</a> / <a href="./set.html">set</a></div>

# set

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">set</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.CurrentSession$set(kotlin.String, kotlin.Any)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.sessions.CurrentSession$set(kotlin.String, kotlin.Any)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set new session instance with <a href="set.html#io.ktor.sessions.CurrentSession$set(kotlin.String, kotlin.Any)/name">name</a>

### Exceptions

<code>IllegalStateException</code> - if no session provider registered with for <a href="set.html#io.ktor.sessions.CurrentSession$set(kotlin.String, kotlin.Any)/name">name</a>