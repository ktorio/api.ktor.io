---
title: io.ktor.sessions.kotlin.collections.List - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="./index.html">kotlin.collections.List</a></div>

### Extensions for kotlin.collections.List

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="transform-read.html">transformRead</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-session-transport-transformer/index.html"><span class="identifier">SessionTransportTransformer</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">transformRead</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$transformRead(kotlin.collections.List((io.ktor.sessions.SessionTransportTransformer)), kotlin.String)/cookieValue">cookieValue</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Un-applies a list of session transformations to a <a href="transform-read.html#io.ktor.sessions$transformRead(kotlin.collections.List((io.ktor.sessions.SessionTransportTransformer)), kotlin.String)/cookieValue">cookieValue</a> representing a transformed session string.
If any of the unapplication of transformations fail returning a null, this function also returns null.


</td>
</tr>
<tr>
<td markdown="1">

<a href="transform-write.html">transformWrite</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-session-transport-transformer/index.html"><span class="identifier">SessionTransportTransformer</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">transformWrite</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$transformWrite(kotlin.collections.List((io.ktor.sessions.SessionTransportTransformer)), kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Applies a list of session transformations to a <a href="transform-write.html#io.ktor.sessions$transformWrite(kotlin.collections.List((io.ktor.sessions.SessionTransportTransformer)), kotlin.String)/value">value</a> representing session string.


</td>
</tr>
</tbody>
</table>
