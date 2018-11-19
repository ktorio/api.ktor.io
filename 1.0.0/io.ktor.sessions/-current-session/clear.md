---
title: CurrentSession.clear - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="index.html">CurrentSession</a> / <a href="./clear.html">clear</a></div>

# clear

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">clear</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.CurrentSession$clear(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Clear session instance for <a href="clear.html#io.ktor.sessions.CurrentSession$clear(kotlin.String)/name">name</a>

### Exceptions

<code>IllegalStateException</code> - if no session provider registered with for <a href="clear.html#io.ktor.sessions.CurrentSession$clear(kotlin.String)/name">name</a>