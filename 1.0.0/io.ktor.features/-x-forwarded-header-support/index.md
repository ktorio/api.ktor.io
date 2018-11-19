---
title: XForwardedHeaderSupport - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="./index.html">XForwardedHeaderSupport</a></div>

# XForwardedHeaderSupport

<div class="signature"><code><span class="keyword">object </span><span class="identifier">XForwardedHeaderSupport</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.application/-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="-config/index.html"><span class="identifier">Config</span></a><span class="symbol">,</span>&nbsp;<a href="-config/index.html"><span class="identifier">Config</span></a><span class="symbol">&gt;</span></code></div>

<code>X-Forwarded-*</code> headers support
See http://ktor.io/servers/features/forward-headers.html for details

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-config/index.html">Config</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Config</span></code></div>

<a href="./index.md">XForwardedHeaderSupport</a> feature's configuration


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
<div class="signature"><code><span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="-config/index.html"><span class="identifier">Config</span></a><span class="symbol">&gt;</span></code></div>

Unique key that identifies a feature


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="install.html">install</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.XForwardedHeaderSupport$install(io.ktor.application.ApplicationCallPipeline, kotlin.Function1((io.ktor.features.XForwardedHeaderSupport.Config, kotlin.Unit)))/pipeline">pipeline</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.XForwardedHeaderSupport$install(io.ktor.application.ApplicationCallPipeline, kotlin.Function1((io.ktor.features.XForwardedHeaderSupport.Config, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="-config/index.html"><span class="identifier">Config</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-config/index.html"><span class="identifier">Config</span></a></code></div>

Feature installation script


</td>
</tr>
</tbody>
</table>
