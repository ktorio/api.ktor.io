---
title: RedirectException - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features</a> / <a href="./index.html">RedirectException</a></div>

# RedirectException

<div class="signature"><code><span class="keyword">class </span><s><span class="identifier">RedirectException</span></s>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html"><span class="identifier">IllegalStateException</span></a></code></div>

**Deprecated:** Not thrown anymore. Use SendCountExceedException

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">RedirectException</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.RedirectException$<init>(io.ktor.client.request.HttpRequest, kotlin.String)/request">request</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.request/-http-request/index.html"><span class="identifier">HttpRequest</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.client.features.RedirectException$<init>(io.ktor.client.request.HttpRequest, kotlin.String)/cause">cause</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="request.html">request</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">request</span><span class="symbol">: </span><a href="../../io.ktor.client.request/-http-request/index.html"><span class="identifier">HttpRequest</span></a></code></div>

</td>
</tr>
</tbody>
</table>
