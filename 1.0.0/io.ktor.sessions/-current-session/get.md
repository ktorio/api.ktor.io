---
title: CurrentSession.get - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="index.html">CurrentSession</a> / <a href="./get.html">get</a></div>

# get

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">get</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.CurrentSession$get(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span></code></div>

Get session instance for <a href="get.html#io.ktor.sessions.CurrentSession$get(kotlin.String)/name">name</a>

### Exceptions

<code>IllegalStateException</code> - if no session provider registered with for <a href="get.html#io.ktor.sessions.CurrentSession$get(kotlin.String)/name">name</a>