---
title: Response - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio</a> / <a href="./index.html">Response</a></div>

# Response

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Response</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-http-message/index.html"><span class="identifier">HttpMessage</span></a></code></div>

Represents an HTTP response

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="status.html">status</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">status</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="status-text.html">statusText</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">statusText</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html"><span class="identifier">CharSequence</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="version.html">version</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">version</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html"><span class="identifier">CharSequence</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-http-message/headers.html">headers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">headers</span><span class="symbol">: </span><a href="../-http-headers-map/index.html"><span class="identifier">HttpHeadersMap</span></a></code></div>

request/response headers


</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-http-message/close.html">close</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">close</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Release all memory resources hold by this message


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-http-message/release.html">release</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">release</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Release all memory resources hold by this message


</td>
</tr>
</tbody>
</table>
