---
title: CachingOptions - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.content</a> / <a href="./index.html">CachingOptions</a></div>

# CachingOptions

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">CachingOptions</span></code></div>

Specifies caching properties for an <a href="../-outgoing-content/index.html">OutgoingContent</a> such as Cache-Control or Expires

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">CachingOptions</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.CachingOptions$<init>(io.ktor.http.CacheControl, io.ktor.util.date.GMTDate)/cacheControl">cacheControl</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-cache-control/index.html"><span class="identifier">CacheControl</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.CachingOptions$<init>(io.ktor.http.CacheControl, io.ktor.util.date.GMTDate)/expires">expires</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.date/-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">)</span></code></div>

Specifies caching properties for an <a href="../-outgoing-content/index.html">OutgoingContent</a> such as Cache-Control or Expires


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="cache-control.html">cacheControl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">cacheControl</span><span class="symbol">: </span><a href="../../io.ktor.http/-cache-control/index.html"><span class="identifier">CacheControl</span></a><span class="symbol">?</span></code></div>

header


</td>
</tr>
<tr>
<td markdown="1">

<a href="expires.html">expires</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">expires</span><span class="symbol">: </span><a href="../../io.ktor.util.date/-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a><span class="symbol">?</span></code></div>

header


</td>
</tr>
</tbody>
</table>
