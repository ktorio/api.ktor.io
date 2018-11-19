---
title: OAuth1aException - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="./index.html">OAuth1aException</a></div>

# OAuth1aException

<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">OAuth1aException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/Exception.html"><span class="identifier">Exception</span></a></code></div>

Represents an OAuth1a server error

### Exceptions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-missing-token-exception/index.html">MissingTokenException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">MissingTokenException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OAuth1aException</span></a></code></div>

Thrown when an OAuth1a server didn't provide access token


</td>
</tr>
<tr>
<td markdown="1">

<a href="-unknown-exception/index.html">UnknownException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">UnknownException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OAuth1aException</span></a></code></div>

Represents any other OAuth1a error


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-missing-token-exception/index.html">MissingTokenException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">MissingTokenException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OAuth1aException</span></a></code></div>

Thrown when an OAuth1a server didn't provide access token


</td>
</tr>
<tr>
<td markdown="1">

<a href="-unknown-exception/index.html">UnknownException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">UnknownException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OAuth1aException</span></a></code></div>

Represents any other OAuth1a error


</td>
</tr>
</tbody>
</table>
