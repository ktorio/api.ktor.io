---
title: ResponsePushBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.response</a> / <a href="./index.html">ResponsePushBuilder</a></div>

# ResponsePushBuilder

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ResponsePushBuilder</span></code></div>

HTTP/2 push builder interface

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="headers.html">headers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">headers</span><span class="symbol">: </span><a href="../../io.ktor.http/-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a></code></div>

request headers


</td>
</tr>
<tr>
<td markdown="1">

<a href="method.html">method</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">var </span><span class="identifier">method</span><span class="symbol">: </span><a href="../../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a></code></div>

request method


</td>
</tr>
<tr>
<td markdown="1">

<a href="url.html">url</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">url</span><span class="symbol">: </span><a href="../../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a></code></div>

push URL


</td>
</tr>
<tr>
<td markdown="1">

<a href="versions.html">versions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">versions</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-list/index.html"><span class="identifier">MutableList</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.http.content/-version/index.html"><span class="identifier">Version</span></a><span class="symbol">&gt;</span></code></div>

request versions (last modification date, etag and so on)


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-default-response-push-builder/index.html">DefaultResponsePushBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">DefaultResponsePushBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ResponsePushBuilder</span></a></code></div>

HTTP/2 push builder


</td>
</tr>
</tbody>
</table>
