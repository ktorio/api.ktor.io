---
title: io.ktor.client.features.json - 
layout: api
---



## Package io.ktor.client.features.json

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-gson-serializer/index.html">GsonSerializer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">GsonSerializer</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-json-serializer/index.html"><span class="identifier">JsonSerializer</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-jackson-serializer/index.html">JacksonSerializer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">JacksonSerializer</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-json-serializer/index.html"><span class="identifier">JsonSerializer</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-json-feature/index.html">JsonFeature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">JsonFeature</span></code></div>

<a href="../io.ktor.client/-http-client/index.html">HttpClient</a> feature that serializes/de-serializes as JSON custom objects
to request and from response bodies using a <a href="-json-feature/serializer.html">serializer</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-json-serializer/index.html">JsonSerializer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">JsonSerializer</span></code></div>

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="default-serializer.html">defaultSerializer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">actual</span> <span class="keyword">fun </span><span class="identifier">defaultSerializer</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-json-serializer/index.html"><span class="identifier">JsonSerializer</span></a></code></div>

</td>
</tr>
</tbody>
</table>
