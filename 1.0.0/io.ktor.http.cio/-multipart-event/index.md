---
title: MultipartEvent - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio</a> / <a href="./index.html">MultipartEvent</a></div>

# MultipartEvent

<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">MultipartEvent</span></code></div>

Represents a multipart content starting event. Every part need to be completely consumed or released via <a href="release.html">release</a>

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-epilogue/index.html">Epilogue</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Epilogue</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">MultipartEvent</span></a></code></div>

Represents a multipart content epilogue. A multipart stream could have at most one epilogue.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-multipart-part/index.html">MultipartPart</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">MultipartPart</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">MultipartEvent</span></a></code></div>

Represents a multipart part. There could be any number of parts in a multipart stream. Please note that
it is important to consume <a href="-multipart-part/body.html">body</a> otherwise multipart parser could get stuck (suspend)
so you will not receive more events.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-preamble/index.html">Preamble</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Preamble</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">MultipartEvent</span></a></code></div>

Represents a multipart content preamble. A multipart stream could have at most one preamble.


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="release.html">release</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">release</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Release underlying data/packet.


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-epilogue/index.html">Epilogue</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Epilogue</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">MultipartEvent</span></a></code></div>

Represents a multipart content epilogue. A multipart stream could have at most one epilogue.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-multipart-part/index.html">MultipartPart</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">MultipartPart</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">MultipartEvent</span></a></code></div>

Represents a multipart part. There could be any number of parts in a multipart stream. Please note that
it is important to consume <a href="-multipart-part/body.html">body</a> otherwise multipart parser could get stuck (suspend)
so you will not receive more events.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-preamble/index.html">Preamble</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Preamble</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">MultipartEvent</span></a></code></div>

Represents a multipart content preamble. A multipart stream could have at most one preamble.


</td>
</tr>
</tbody>
</table>
