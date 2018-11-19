---
title: HttpCookies - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features.cookies</a> / <a href="./index.html">HttpCookies</a></div>

# HttpCookies

<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpCookies</span></code></div>

<a href="../../io.ktor.client/-http-client/index.html">HttpClient</a> feature that handles sent <code>Cookie</code>, and received <code>Set-Cookie</code> headers,
using a specific <a href="#">storage</a> for storing and retrieving cookies.

You can configure the <a href="-config/storage.html">Config.storage</a> and to provide <a href="-config/default.html">Config.default</a> blocks to set
cookies when installing.

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-companion/index.html">Companion</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Companion</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.client.features/-http-client-feature/index.html"><span class="identifier">HttpClientFeature</span></a><span class="symbol">&lt;</span><a href="-config/index.html"><span class="identifier">Config</span></a><span class="symbol">,</span>&nbsp;<a href="./index.md"><span class="identifier">HttpCookies</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-config/index.html">Config</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Config</span></code></div>

</td>
</tr>
</tbody>
</table>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">HttpCookies</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.cookies.HttpCookies$<init>(io.ktor.client.features.cookies.CookiesStorage)/storage">storage</span><span class="symbol">:</span>&nbsp;<a href="../-cookies-storage/index.html"><span class="identifier">CookiesStorage</span></a><span class="symbol">)</span></code></div>

<a href="../../io.ktor.client/-http-client/index.html">HttpClient</a> feature that handles sent <code>Cookie</code>, and received <code>Set-Cookie</code> headers,
using a specific <a href="-init-.html#io.ktor.client.features.cookies.HttpCookies$<init>(io.ktor.client.features.cookies.CookiesStorage)/storage">storage</a> for storing and retrieving cookies.


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="get.html">get</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">get</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.cookies.HttpCookies$get(io.ktor.http.Url)/requestUrl">requestUrl</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-url/index.html"><span class="identifier">Url</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.http/-cookie/index.html"><span class="identifier">Cookie</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="key.html">key</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">HttpCookies</span></a><span class="symbol">&gt;</span></code></div>

The <a href="../../io.ktor.util/-attribute-key/index.html">AttributeKey</a> for this feature.


</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="install.html">install</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.cookies.HttpCookies.Companion$install(io.ktor.client.features.cookies.HttpCookies, io.ktor.client.HttpClient)/feature">feature</span><span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpCookies</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.client.features.cookies.HttpCookies.Companion$install(io.ktor.client.features.cookies.HttpCookies, io.ktor.client.HttpClient)/scope">scope</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs the <a href="-companion/install.html#io.ktor.client.features.cookies.HttpCookies.Companion$install(io.ktor.client.features.cookies.HttpCookies, io.ktor.client.HttpClient)/feature">feature</a> class for a <a href="../../io.ktor.client/-http-client/index.html">HttpClient</a> defined at <a href="-companion/install.html#io.ktor.client.features.cookies.HttpCookies.Companion$install(io.ktor.client.features.cookies.HttpCookies, io.ktor.client.HttpClient)/scope">scope</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="prepare.html">prepare</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">prepare</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.cookies.HttpCookies.Companion$prepare(kotlin.Function1((io.ktor.client.features.cookies.HttpCookies.Config, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-config/index.html"><span class="identifier">Config</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpCookies</span></a></code></div>

Builds a <a href="#">TFeature</a> by calling the <a href="-companion/prepare.html#io.ktor.client.features.cookies.HttpCookies.Companion$prepare(kotlin.Function1((io.ktor.client.features.cookies.HttpCookies.Config, kotlin.Unit)))/block">block</a> with a <a href="#">TConfig</a> config instance as receiver.


</td>
</tr>
</tbody>
</table>
