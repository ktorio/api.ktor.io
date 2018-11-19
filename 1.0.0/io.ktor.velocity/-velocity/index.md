---
title: Velocity - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.velocity</a> / <a href="./index.html">Velocity</a></div>

# Velocity

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Velocity</span></code></div>

Velocity ktor feature. Provides ability to respond with <a href="../-velocity-content/index.html">VelocityContent</a> and <a href="../respond-template.html">respondTemplate</a>.

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.application/-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<span class="identifier">VelocityEngine</span><span class="symbol">,</span>&nbsp;<a href="./index.md"><span class="identifier">Velocity</span></a><span class="symbol">&gt;</span></code></div>

A companion object for installing feature


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
<div class="signature"><code><span class="identifier">Velocity</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.velocity.Velocity$<init>(org.apache.velocity.app.VelocityEngine)/engine">engine</span><span class="symbol">:</span>&nbsp;<span class="identifier">VelocityEngine</span><span class="symbol">)</span></code></div>

Velocity ktor feature. Provides ability to respond with <a href="../-velocity-content/index.html">VelocityContent</a> and <a href="../respond-template.html">respondTemplate</a>.


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
<div class="signature"><code><span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">Velocity</span></a><span class="symbol">&gt;</span></code></div>

Unique key that identifies a feature


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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.velocity.Velocity.Feature$install(io.ktor.application.ApplicationCallPipeline, kotlin.Function1((org.apache.velocity.app.VelocityEngine, kotlin.Unit)))/pipeline">pipeline</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.velocity.Velocity.Feature$install(io.ktor.application.ApplicationCallPipeline, kotlin.Function1((org.apache.velocity.app.VelocityEngine, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<span class="identifier">VelocityEngine</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">Velocity</span></a></code></div>

Feature installation script


</td>
</tr>
</tbody>
</table>
