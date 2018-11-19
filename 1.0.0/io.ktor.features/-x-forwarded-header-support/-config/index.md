---
title: XForwardedHeaderSupport.Config - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.features</a> / <a href="../index.html">XForwardedHeaderSupport</a> / <a href="./index.html">Config</a></div>

# Config

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Config</span></code></div>

<a href="../index.html">XForwardedHeaderSupport</a> feature's configuration

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Config</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

<a href="../index.html">XForwardedHeaderSupport</a> feature's configuration


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="for-headers.html">forHeaders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">forHeaders</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-array-list/index.html"><span class="identifier">ArrayList</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

<code>X-Forwarded-For</code> header names


</td>
</tr>
<tr>
<td markdown="1">

<a href="host-headers.html">hostHeaders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">hostHeaders</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-array-list/index.html"><span class="identifier">ArrayList</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

Host name X-header names. Default are <code>X-Forwarded-Server</code> and <code>X-Forwarded-Host</code>


</td>
</tr>
<tr>
<td markdown="1">

<a href="https-flag-headers.html">httpsFlagHeaders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">httpsFlagHeaders</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-array-list/index.html"><span class="identifier">ArrayList</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

HTTPS/TLS flag header names. Default are <code>X-Forwarded-SSL</code> and <code>Front-End-Https</code>


</td>
</tr>
<tr>
<td markdown="1">

<a href="proto-headers.html">protoHeaders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">protoHeaders</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-array-list/index.html"><span class="identifier">ArrayList</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

Protocol X-header names. Default are <code>X-Forwarded-Proto</code> and <code>X-Forwarded-Protocol</code>


</td>
</tr>
</tbody>
</table>
