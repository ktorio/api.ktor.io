---
title: DefaultResponsePushBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.response</a> / <a href="./index.html">DefaultResponsePushBuilder</a></div>

# DefaultResponsePushBuilder

<div class="signature"><code><span class="keyword">class </span><span class="identifier">DefaultResponsePushBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-response-push-builder/index.html"><span class="identifier">ResponsePushBuilder</span></a></code></div>

HTTP/2 push builder

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">DefaultResponsePushBuilder</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.response.DefaultResponsePushBuilder$<init>(io.ktor.http.URLBuilder, io.ktor.http.Headers)/url">url</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.response.DefaultResponsePushBuilder$<init>(io.ktor.http.URLBuilder, io.ktor.http.Headers)/headers">headers</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a><span class="symbol">)</span></code></div>

<div class="signature"><code><span class="identifier">DefaultResponsePushBuilder</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.response.DefaultResponsePushBuilder$<init>(io.ktor.application.ApplicationCall)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span></code></div>
<div class="signature"><code><span class="identifier">DefaultResponsePushBuilder</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.DefaultResponsePushBuilder$<init>(io.ktor.http.HttpMethod, io.ktor.http.URLBuilder, io.ktor.http.HeadersBuilder, kotlin.collections.List((io.ktor.http.content.Version)))/method">method</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a>&nbsp;<span class="symbol">=</span>&nbsp;HttpMethod.Get<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.DefaultResponsePushBuilder$<init>(io.ktor.http.HttpMethod, io.ktor.http.URLBuilder, io.ktor.http.HeadersBuilder, kotlin.collections.List((io.ktor.http.content.Version)))/url">url</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a>&nbsp;<span class="symbol">=</span>&nbsp;URLBuilder()<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.DefaultResponsePushBuilder$<init>(io.ktor.http.HttpMethod, io.ktor.http.URLBuilder, io.ktor.http.HeadersBuilder, kotlin.collections.List((io.ktor.http.content.Version)))/headers">headers</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a>&nbsp;<span class="symbol">=</span>&nbsp;HeadersBuilder()<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.DefaultResponsePushBuilder$<init>(io.ktor.http.HttpMethod, io.ktor.http.URLBuilder, io.ktor.http.HeadersBuilder, kotlin.collections.List((io.ktor.http.content.Version)))/versions">versions</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.http.content/-version/index.html"><span class="identifier">Version</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyList()<span class="symbol">)</span></code></div>

HTTP/2 push builder


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="headers.html">headers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">headers</span><span class="symbol">: </span><a href="../../io.ktor.http/-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a></code></div>

builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="method.html">method</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">method</span><span class="symbol">: </span><a href="../../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a></code></div>

HTTP method


</td>
</tr>
<tr>
<td markdown="1">

<a href="url.html">url</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">url</span><span class="symbol">: </span><a href="../../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a></code></div>

builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="versions.html">versions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">versions</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-array-list/index.html"><span class="identifier">ArrayList</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.http.content/-version/index.html"><span class="identifier">Version</span></a><span class="symbol">&gt;</span></code></div>

List of version information (for conditional headers)


</td>
</tr>
</tbody>
</table>
