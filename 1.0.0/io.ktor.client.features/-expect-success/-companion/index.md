---
title: ExpectSuccess.Companion - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.client.features</a> / <a href="../index.html">ExpectSuccess</a> / <a href="./index.html">Companion</a></div>

# Companion

<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Companion</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../-http-client-feature/index.html"><span class="identifier">HttpClientFeature</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../index.html"><span class="identifier">ExpectSuccess</span></a><span class="symbol">&gt;</span></code></div>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="key.html">key</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="../../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="../index.html"><span class="identifier">ExpectSuccess</span></a><span class="symbol">&gt;</span></code></div>

The <a href="../../../io.ktor.util/-attribute-key/index.html">AttributeKey</a> for this feature.


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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.ExpectSuccess.Companion$install(io.ktor.client.features.ExpectSuccess, io.ktor.client.HttpClient)/feature">feature</span><span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">ExpectSuccess</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.client.features.ExpectSuccess.Companion$install(io.ktor.client.features.ExpectSuccess, io.ktor.client.HttpClient)/scope">scope</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs the <a href="install.html#io.ktor.client.features.ExpectSuccess.Companion$install(io.ktor.client.features.ExpectSuccess, io.ktor.client.HttpClient)/feature">feature</a> class for a <a href="../../../io.ktor.client/-http-client/index.html">HttpClient</a> defined at <a href="install.html#io.ktor.client.features.ExpectSuccess.Companion$install(io.ktor.client.features.ExpectSuccess, io.ktor.client.HttpClient)/scope">scope</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="prepare.html">prepare</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">prepare</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.ExpectSuccess.Companion$prepare(kotlin.Function1((kotlin.Unit, )))/block">block</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../index.html"><span class="identifier">ExpectSuccess</span></a></code></div>

Builds a <a href="#">TFeature</a> by calling the <a href="prepare.html#io.ktor.client.features.ExpectSuccess.Companion$prepare(kotlin.Function1((kotlin.Unit, )))/block">block</a> with a <a href="#">TConfig</a> config instance as receiver.


</td>
</tr>
</tbody>
</table>
