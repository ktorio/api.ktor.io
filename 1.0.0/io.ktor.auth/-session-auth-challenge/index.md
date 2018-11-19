---
title: SessionAuthChallenge - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="./index.html">SessionAuthChallenge</a></div>

# SessionAuthChallenge

<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">SessionAuthChallenge</span><span class="symbol">&lt;</span><span class="keyword">in</span>&nbsp;<span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

Specifies what to send back if form authentication fails.

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-ignore.html">Ignore</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Ignore</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">SessionAuthChallenge</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

Does nothing so other authentication methods could provide their challenges.
This is the  default and recommended way


</td>
</tr>
<tr>
<td markdown="1">

<a href="-redirect/index.html">Redirect</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Redirect</span><span class="symbol">&lt;</span><span class="keyword">in</span>&nbsp;<span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">SessionAuthChallenge</span></a><span class="symbol">&lt;</span><a href="-redirect/index.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span></code></div>

Redirect to an URL provided by the given function.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-unauthorized.html">Unauthorized</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Unauthorized</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">SessionAuthChallenge</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

Respond with <a href="../../io.ktor.http/-http-status-code/-unauthorized.html">HttpStatusCode.Unauthorized</a>.


</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-default.html">Default</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Default</span><span class="symbol">: </span><a href="-ignore.html"><span class="identifier">Ignore</span></a></code></div>

The default session auth challenge kind


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-ignore.html">Ignore</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Ignore</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">SessionAuthChallenge</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

Does nothing so other authentication methods could provide their challenges.
This is the  default and recommended way


</td>
</tr>
<tr>
<td markdown="1">

<a href="-redirect/index.html">Redirect</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Redirect</span><span class="symbol">&lt;</span><span class="keyword">in</span>&nbsp;<span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">SessionAuthChallenge</span></a><span class="symbol">&lt;</span><a href="-redirect/index.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span></code></div>

Redirect to an URL provided by the given function.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-unauthorized.html">Unauthorized</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Unauthorized</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">SessionAuthChallenge</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

Respond with <a href="../../io.ktor.http/-http-status-code/-unauthorized.html">HttpStatusCode.Unauthorized</a>.


</td>
</tr>
</tbody>
</table>
