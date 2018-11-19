---
title: FormAuthChallenge - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="./index.html">FormAuthChallenge</a></div>

# FormAuthChallenge

<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">FormAuthChallenge</span></code></div>

Specifies what to send back if form authentication fails.

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-redirect/index.html">Redirect</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Redirect</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">FormAuthChallenge</span></a></code></div>

Redirect to an URL provided by the given function.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-unauthorized.html">Unauthorized</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Unauthorized</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">FormAuthChallenge</span></a></code></div>

Respond with <a href="../../io.ktor.http/-http-status-code/-unauthorized.html">HttpStatusCode.Unauthorized</a>.


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-redirect/index.html">Redirect</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Redirect</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">FormAuthChallenge</span></a></code></div>

Redirect to an URL provided by the given function.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-unauthorized.html">Unauthorized</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Unauthorized</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">FormAuthChallenge</span></a></code></div>

Respond with <a href="../../io.ktor.http/-http-status-code/-unauthorized.html">HttpStatusCode.Unauthorized</a>.


</td>
</tr>
</tbody>
</table>
