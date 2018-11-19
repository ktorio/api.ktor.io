---
title: HttpCookies.Config - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.client.features.cookies</a> / <a href="../index.html">HttpCookies</a> / <a href="./index.html">Config</a></div>

# Config

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Config</span></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Config</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="storage.html">storage</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">storage</span><span class="symbol">: </span><a href="../../-cookies-storage/index.html"><span class="identifier">CookiesStorage</span></a></code></div>

<a href="../../-cookies-storage/index.html">CookiesStorage</a> that will be used at this feature.
By default it just uses an initially empty in-memory <a href="../../-accept-all-cookies-storage/index.html">AcceptAllCookiesStorage</a>.


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="default.html">default</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">default</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.cookies.HttpCookies.Config$default(kotlin.Function1((io.ktor.client.features.cookies.CookiesStorage, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../-cookies-storage/index.html"><span class="identifier">CookiesStorage</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Registers a <a href="default.html#io.ktor.client.features.cookies.HttpCookies.Config$default(kotlin.Function1((io.ktor.client.features.cookies.CookiesStorage, kotlin.Unit)))/block">block</a> that will be called when the configuration is complete the specified <a href="storage.html">storage</a>.
The <a href="default.html#io.ktor.client.features.cookies.HttpCookies.Config$default(kotlin.Function1((io.ktor.client.features.cookies.CookiesStorage, kotlin.Unit)))/block">block</a> can potentially add new cookies by calling <a href="../../-cookies-storage/add-cookie.html">CookiesStorage.addCookie</a>.


</td>
</tr>
</tbody>
</table>
