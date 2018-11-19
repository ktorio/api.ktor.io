---
title: UnsafeHeaderException - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">UnsafeHeaderException</a></div>

# UnsafeHeaderException

<div class="signature"><code><span class="keyword">class </span><span class="identifier">UnsafeHeaderException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-argument-exception/index.html"><span class="identifier">IllegalArgumentException</span></a></code></div>

Thrown when an attempt to set unsafe header detected. A header is unsafe if listed in <a href="../-http-headers/-unsafe-headers.html">HttpHeaders.UnsafeHeaders</a>.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">UnsafeHeaderException</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.UnsafeHeaderException$<init>(kotlin.String)/header">header</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

Thrown when an attempt to set unsafe header detected. A header is unsafe if listed in <a href="../-http-headers/-unsafe-headers.html">HttpHeaders.UnsafeHeaders</a>.


</td>
</tr>
</tbody>
</table>
