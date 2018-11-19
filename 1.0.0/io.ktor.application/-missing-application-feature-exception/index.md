---
title: MissingApplicationFeatureException - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.application</a> / <a href="./index.html">MissingApplicationFeatureException</a></div>

# MissingApplicationFeatureException

<div class="signature"><code><span class="keyword">class </span><span class="identifier">MissingApplicationFeatureException</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html"><span class="identifier">IllegalStateException</span></a></code></div>

Thrown when Application Feature has been attempted to be accessed but has not been installed before

### Parameters

<code>key</code> - application feature's attribute key

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">MissingApplicationFeatureException</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.application.MissingApplicationFeatureException$<init>(io.ktor.util.AttributeKey((kotlin.Any)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

Thrown when Application Feature has been attempted to be accessed but has not been installed before


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="key.html">key</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span></code></div>

application feature's attribute key


</td>
</tr>
<tr>
<td markdown="1">

<a href="message.html">message</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">message</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>
