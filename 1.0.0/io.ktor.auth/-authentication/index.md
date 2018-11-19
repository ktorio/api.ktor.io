---
title: Authentication - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="./index.html">Authentication</a></div>

# Authentication

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Authentication</span></code></div>

Authentication feature supports pluggable mechanisms for checking and challenging a client to provide credentials

### Parameters

<code>config</code> - initial authentication configuration

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-configuration/index.html">Configuration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span></code></div>

Authentication configuration


</td>
</tr>
<tr>
<td markdown="1">

<a href="-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.application/-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">,</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="./index.md"><span class="identifier">Authentication</span></a><span class="symbol">&gt;</span></code></div>

Installable feature for <a href="./index.md">Authentication</a>.


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
<div class="signature"><code><span class="identifier">Authentication</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.Authentication$<init>(kotlin.collections.List((io.ktor.auth.AuthenticationProvider)))/providers">providers</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-authentication-provider/index.html"><span class="identifier">AuthenticationProvider</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

<div class="signature"><code><span class="identifier">Authentication</span><span class="symbol">(</span><span class="symbol">)</span></code></div>
<div class="signature"><code><span class="identifier">Authentication</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.Authentication$<init>(io.ktor.auth.Authentication.Configuration)/config">config</span><span class="symbol">:</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">)</span></code></div>

Authentication feature supports pluggable mechanisms for checking and challenging a client to provide credentials


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="configure.html">configure</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">configure</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.Authentication$configure(kotlin.Function1((io.ktor.auth.Authentication.Configuration, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Configure already installed feature


</td>
</tr>
<tr>
<td markdown="1">

<a href="intercept-pipeline.html">interceptPipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">interceptPipeline</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.Authentication$interceptPipeline(io.ktor.application.ApplicationCallPipeline, kotlin.collections.List((kotlin.String)), kotlin.Boolean)/pipeline">pipeline</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.Authentication$interceptPipeline(io.ktor.application.ApplicationCallPipeline, kotlin.collections.List((kotlin.String)), kotlin.Boolean)/configurationNames">configurationNames</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;listOf(null)<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.Authentication$interceptPipeline(io.ktor.application.ApplicationCallPipeline, kotlin.collections.List((kotlin.String)), kotlin.Boolean)/optional">optional</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Configures <a href="intercept-pipeline.html#io.ktor.auth.Authentication$interceptPipeline(io.ktor.application.ApplicationCallPipeline, kotlin.collections.List((kotlin.String)), kotlin.Boolean)/pipeline">pipeline</a> to process authentication by one or multiple auth methods


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
<div class="signature"><code><span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">Authentication</span></a><span class="symbol">&gt;</span></code></div>

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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.Authentication.Feature$install(io.ktor.application.Application, kotlin.Function1((io.ktor.auth.Authentication.Configuration, kotlin.Unit)))/pipeline">pipeline</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.Authentication.Feature$install(io.ktor.application.Application, kotlin.Function1((io.ktor.auth.Authentication.Configuration, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">Authentication</span></a></code></div>

Feature installation script


</td>
</tr>
</tbody>
</table>
